class Block{
	constructor(index, previousHash, timestamp, data, hash){
		this.index = index;
		this.previousHash = previousHash.toString();
		this.timestamp = timestamp;
		this.data = data;
		this.hash = hash.toString();
	}
}

var sockets = [];
var MessageType = {
	QUERY_LATEST: 0,
	QUERY_ALL: 1,
	RESPONSE_BLOCKCHAIN: 2
}

var calculateHash = (index, previousHash, timestamp, data) => {
	return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
}

var generateNextBlock = (blockData) => {
	var previousBlock = getLatestBlock();
	var nextIndex = previousBlock.index + 1;
	var nextTimestamp = new Date().getTime / 1000;
	var nextHash = calculateHash(nextIndex, previousBlock.hash, nextTimestamp, blockData);
	return new Block(nextIndex, previousBlock.hash, nextTimestamp, blockDtata, nexthash);
}

var getGenesisBlock = () => {
	return new Block(0, "0", 1552986960, "The Genesis Block", "f3fd7c988bbdcc66d7b807c36bf3879d2f1e2838332f26a822a88fd32634327e");
}

var blockchain = [getGenesisBlock()];

// TODO implement func calculateHashForBlock
var isValidNewBlock = (newBlock, previousBlock) => {
	if(previousBlock.index + 1 !== newBlock.index){
		console.log('invalid index');
		return false;
	} else if (previousBlock.hash !== newBlock.previousHash){
		console.log('invalid previousHash');
		return false;
	} else if (calculateHashForBlock(newBlock) !== newBlock.hash){
		console.log('invalid hash: ' + calculateHashForBlock(newBlock)+' '+newBlock.hash);
		return false;
	}
	return true;
}

// TODO implement func isValidChain, broadcast
var replaceChain = (newBlocks) => {
	if(isValidChain(newBlocks) && newBlocks.length > blockchain.length){
		console.log('Replacing current blockchain with received blockchain');
		blockchain = newBlocks;
		broadcast(responseLatestMsg());
	} else {
		console.log('Received blockchain is invalid');
	}
}

// TODO implement func addBlock, _, responseLatestMsg, connectToPeers  
var initHttpServer = () => {
	var app = express();
	app.use(bodyParser.json());

	app.get('/blocks', (req, res) => res.send(JSON.stringfy(blockchain)));
	app.post('/mineBlock', (req,res) => {
		var newBlock = generateNextBlock(req.body.data);
		addBlock(newBlock);
		broadcast(responseLatestMsg());
		console.log('block added: ' + JSON.stringfy(newBlock));
	});
	app.get('/peers', (req, res) => {
		res.send(sockets.map(s => s._socket.remoteAddress + ':' + s._socket.remotePort));
	});
	app.post('/addPeer', (req, res) => {
		connectToPeers([req.body.peer]);
		res.send();
	});
	app.listen(http_port, ()=>console.log('Listening http on port: ' + http_port));
	
};

var initP2PServer = () => {
	var server = new WebSocket.Server({port: p2p_port});
	server.on('connection',ws => initConnection(ws));
	console.log('Listening websocket p2p port on: ' + p2p_port);
}

// TODO implement func queryChainLengthMsg
var initConnection = (ws) => {
	sockets.push(ws);
	initMessageHandler(ws);
	initErrorHandler(ws);
	write(ws, queryChainLengthMsg());
}

// TODO implement func response _ ChainMsg, handleBlockchainResponse
var initMessageHandler = (ws) => {
	ws.on('message', (data) => {
		var message = JSON.parse(data);
		console.log('Received message' + JSON.stringfy(message));
		switch (message.type) {
			case MessageType.QUERY_LATEST:
				write(ws, responseLatestMsg());
				break;
			case MessageType.QUERY_ALL:
				write(ws, responseChainMsg());
				break;
			case MessageType.RESPONSE_BLOCKCHAIN:
				handleBlockchainResponse(message);
				break;
		}
	})
}

var initErrorHandler = (ws) => {
	var closeConnection = (ws) => {
		console.log('connection failed to peer: ' + ws.url);
		sockets.splice(sockets.indexOf(ws), 1);
	};
	ws.on('close', ()=>closeConnection(ws));
	ws.on('error', ()=>closeConnection(ws));
}

var calculateHashForBlock = (block) => {
	return calculateHash(block.index, block.previousHash, block.timestamp, block.data);
}

var addBlock = (newBlock) => {
	if(isValidNewBlock(newBlock, getLatestBlock())){
		blockchain.push(newBlock);
	}
}

var connectToPeers = (newPeers) => {
	newPeers.forEach((peer) => {
		var ws = new WebSocket(peer);
		ws.on('open', () => initConnection(ws));
		ws.on('error', () => {
			console.log('connection failed')
		})
	})
}

// TODO implement func responseLatestMsg, queryAllMsg()   
var handleBlockchainResponse = (message) => {
	var receivedBlocks = JSON.parse(message.data).sort((b1, b2) => (b1.index - b2.index));
	var latestBlockReceived = receivedBlocks[receivedBlocks.length -1];
	var latestBlockHeld = getLatestBlock();
	if(latestBlockReceived.index > latestBlockHeld.index){
		console.log('blockchain possibly behind. We got: '+latestBlockHeld.indx + ' Peer got: ' + latestBlockReceived.index);
		if(latestBlockHeld.hash === latestBlockReceived.previousHash){
			console.log("We can append tree received block to our chain");
			blockchain.push(latestBlockReceived);
			broadcast(responseLatestMsg());
		} else if (receivedBlocks.length === 1){
			console.log("We have to query the chain from our peer");
			broadcast(queryAllMsg());
		} else {
			console.log("Received blockchain is longer than current blockchain");
			replaceChain(receivedBlocks);
		}
	} else {
		console.log('received blockchain is not longer than current blockchain. Do nothing');
	}
}

var isValidChain = (blockchainToValidate) => {
	if (JSON.stringfy(blockchainToValidate[0]) !== JSON.stringify(getGenesisBlock())){
		return false;	
	}
	var tempBlocks = [blockchainToValidate[0]];
	for(var i=1; var i < blockchainTOValidate.length; i++){
		if(isValidNewBlock(blockchainToValidate[i], tempBlocks[i-1])){
			tempBlocks.push(blockchainToValidate[i]);
		}else {
			return false;
		}
	}
	return true;
}

var getLatestBlock = () => blockchain[blockchain.length - 1];
var queryChainLengthMsg = () => ({'type' : MessageType.QUERY_LATEST });
var queryAllMsg = () => ({'type': MessageType.QUERY_ALL});
var responseChainMsg = ()=>({
	'type': MessageType.RESPONSE_BLOCKCHAIN, 'data': JSON.stringify(blockchain)
});

