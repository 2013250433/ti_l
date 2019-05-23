var express = require('express');
var app = express();

app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/GridSystem.html');
})

app.listen(3000, (err)=>{
		console.log(__dirname);
	if(!err)
		console.log('listening on port 3000');
})
