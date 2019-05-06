const Web3 = require('web3');
const EthereumTx = require('ethereumjs-tx');
const express = require('express');
const app = express();
const PI = require('./privateInfo.js');
const PORT = process.env.PORT || 5000;

if(typeof web3 != 'undefined'){
	web3 = new Web3(web3.currentProvider);
} else {
	web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/"));
}

app.get('/HiMessage', (req,res) => res.send('Hi!'));
app.listen(PORT,()=>{
	console.log('Listening on port: '+PORT);
});