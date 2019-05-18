var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname,'www')));

app.use('/js', express.static(path.join(__dirname,  'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));

app.get('/', (req,res)=>{
	res.send('Hello World!');
})

app.get('/index.html', (req,res)=>{
	res.sendFile(__dirname+'/index.html');
})

app.listen(3000, (err)=>{
	if(!err)
		console.log('listening on port 3000');
})
