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

var replaceChain = (newBlocks) => {
	if(isValidChain(newBlocks) && newBlocks.length > blockchain.length){
		console.log('Replacing current blockchain with received blockchain');
		blockchain = newBlocks;
		broadcast(responseLatestMsg());
	} else {
		console.log('Received blockchain is invalid');
	}
}
// TODO implement func broadcast, responseLatestMsg, calculateHashForBlock

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
// TODO implement func connectToPeers
