var express = require('express');
var mongoose = require('mongoose');
var app = express();

//DB setting
mongoose.connect(process.env.MONGO_DB,{useNewUrlParser : true});
var db  = mongoose.connection;

db.once("open", function(){
  console.log("DB connected");
});

db.on("error", function(err){
  console.log("DB error: ", err);
});

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));

var port = 3000;
app.listen(port,function(){
  console.log("Server on! http://localhost:",port);
})
