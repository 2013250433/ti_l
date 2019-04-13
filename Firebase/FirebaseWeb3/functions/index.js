const functions = require('firebase-functions');
/*
import Web3 from 'web3'; 
var web3 = new Web3(new Web3.providers.httpProvider("https://ropsten.infura.io/"));
web3.version.getNetwork(function(error,result){
	console.log(result);
})
*/
var Web3 = require('web3'); //why require instead of import?

if(typeof web3 !== 'undefined'){
	web3 = new Web3(web3.currentProvider);
} else {
	web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/"));
}

web3.net.getPeerCount(function(error,result){
	console.log("Peer count: "+result);
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!!!");
});
