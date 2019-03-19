var CryptoJS = require("crypto-js");

/*
var getGenesisBlock = () => {
	return new Block(0, "0", 1552986960, "The Genesis Block", "");
}*/

console.log(CryptoJS.SHA256(0 + "0" + 1552986960 + "The Genesis Block").toString());
