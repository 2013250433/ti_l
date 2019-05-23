var express = require('express');
var cors = require('cors');
var app = express();

app.use(express.static('/'));
app.use(cors());

app.get('/', (req,res)=>{
	res.sendFile('index.html', {root:__dirname});
})

app.listen(3000,()=>{
	console.log('listening on port 3000');
})
