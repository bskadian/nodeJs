var express=require('express');
var app =express();
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/capgemini');
var mroute=require('./mroutes/mroutes');
var db =mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('mongodb connection is open');
})

var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.listen("8080",function(){
    console.log("server. listening on 8080");
})

app.use("/mongo.api",mroute);

