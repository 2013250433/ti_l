const functions = require('firebase-functions');
/*
import Web3 from 'web3'; 
var web3 = new Web3(new Web3.providers.httpProvider("https://ropsten.infura.io/"));
web3.version.getNetwork(function(error,result){
	console.log(result);
})
*/
const Web3 = require('web3'); //why require instead of import?
const express = require('express');
const app = express();

if(typeof web3 !== 'undefined'){
	web3 = new Web3(web3.currentProvider);
} else {
	web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/"));
}
console.log(web3.currentProvider);
var gsContract = web3.eth.contract(
[
	{
		"constant": false,
		"inputs": [],
		"name": "getUser",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_point",
				"type": "uint256"
			}
		],
		"name": "setUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]);

var gs = gsContract.at("0x70989302e707D438019019607Df2771326FaCE67");

/*
web3.net.getPeerCount(function(error,result){
	console.log("Peer count: "+result);
})
*/

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

app.get('/',(req,res)=>{
	res.send("Latest transaction: ");
});
app.post('/',(req,res)=>{
	res.send("Transaction hash: "+req+" "+req.body);
	//console.log(req);
	console.log(req.body);
})

/*

exports.transaction = functions.https.onRequest(app);

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