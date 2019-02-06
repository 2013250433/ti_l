var express = require('express');
var app = express();

/*
app.get('/',function(req, res){
  res.send('Hello Wrold');
});
*/

app.use(express.static(__dirname + '/public'));
// HTTP method에 상관없이 실행.

app.listen(3000,function(){
  console.log('Server On!');
});
