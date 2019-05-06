const functions = require('firebase-functions');
/*
import Web3 from 'web3'; 
var web3 = new Web3(new Web3.providers.httpProvider("https://ropsten.infura.io/"));
web3.version.getNetwork(function(error,result){
	console.log(result);
})
*/
const Web3 = require('web3'); //why require instead of import?
const EthereumTx = require('ethereumjs-tx');
//const fs = require('fs');
//var Syncdata = fs.readFileSync('./PrivateKey.txt','utf8');
const express = require('express');
const app = express();
const PK = require('./privateKey.js');

if(typeof web3 !== 'undefined'){
	web3 = new Web3(web3.currentProvider);
} else {
	web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/"));
}
console.log(web3.currentProvider);

/*
var privateKey = Buffer.from(PK.pk, 'hex');

	var nce = web3.eth.getTransactionCount("0xC39BBb80FbAb2738E358FC9C03cd69AA410c68C0"); 
	nce = web3.toHex(nce);
	var rawTx = {
		 nonce: nce,
		 gasPrice: '0x09184e72a000',
		 gasLimit: '0x30000',
		 to: '0xa3c84a57f0995504b78476884f5ceDE50B733C47',	//Account2
		 value: '0x00', 
		 data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
		}
		
	var tx = new EthereumTx(rawTx);
		tx.sign(privateKey);
		
	var serializedTx = tx.serialize();
	web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
		 if (!err){
			console.log(hash);
		 }
		 else{
			console.log(err);
		 }
	});
*/

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

app.get('/transaction',(req,res)=>{
	res.send("Latest transaction: ");
});
app.post('/transaction',(req,res)=>{
	//res.send("Transaction hash: "+req+" "+req.body);
	//console.log(req.body);
	var Syncdata = fs.readFileSync('PrivateKey.txt','utf8');
	
	var privateKey = Buffer.from(PK.pk, 'hex');

	var nce = web3.eth.getTransactionCount("0xC39BBb80FbAb2738E358FC9C03cd69AA410c68C0"); 
	nce = web3.toHex(nce);
	var rawTx = {
		 nonce: nce,
		 gasPrice: '0x09184e72a000',
		 gasLimit: '0x30000',
		 to: '0xa3c84a57f0995504b78476884f5ceDE50B733C47',	//Account2
		 value: '0x00', 
		 data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
		}
		
	var tx = new EthereumTx(rawTx);
		tx.sign(privateKey);
		
	var serializedTx = tx.serialize();
	web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
		 if (!err){
			console.log(hash);
		 }
		 else{
			console.log("Error!");
		 }
		});
})
app.post('/simple',(req,res)=>{
	res.send('Received POST request!: '+req.body.param1);
	//curl -d "param1=value2" -X POST http://localhost:5000/functionsweb3/us-central1/ropsten/simple
})

app.post('/balance',(req,res)=>{
	res.send('Balance of '+req.body.address+': '+web3.eth.getBalance(req.body.address).toNumber());
	//curl -d "address=0xC39BBb80FbAb2738E358FC9C03cd69AA410c68C0" -X POST http://localhost:5000/functionsweb3/us-central1/ropsten/balance
})

exports.ropsten = functions.https.onRequest(app);
exports.notrest = functions.https.onRequest((request, response) => {
	//var Syncdata = fs.readFileSync('PrivateKey.txt','utf8');
	
	var privateKey = Buffer.from(PK.pk, 'hex');

	var nce = web3.eth.getTransactionCount("0xC39BBb80FbAb2738E358FC9C03cd69AA410c68C0"); 
	nce = web3.toHex(nce);
	var rawTx = {
		 nonce: nce,
		 gasPrice: '0x09184e72a000',
		 gasLimit: '0x30000',
		 to: '0xa3c84a57f0995504b78476884f5ceDE50B733C47',	//Account2
		 value: '0x00', 
		 data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
		}
		
	var tx = new EthereumTx(rawTx);
		tx.sign(privateKey);
		
	var serializedTx = tx.serialize();
	web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
		 if (!err){
			console.log(hash);
		 }
		 else{
			console.log("Error!");
		 }
	});
});
/*
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!!!");
});

exports.setUser = functions.https.onRequest((request, response)=>{
  gs.setUser("time",new Date().getTime()%1000);
  response.send("set completed");	
});

exports.getUser = functions.https.onRequest((request, response)=>{
	gs.getUser(function(error,result){
		if(!error)
			response.send("User:"+result[0]+" Point:"+result[1]);
		else
			console.log(error);
	})	
});

*/