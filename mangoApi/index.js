var express=require('express');
var app =express();
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/capgemini');
var mroute=require('./mroutes/mroutes');
var db =mongoose.connection;

app.use(function(req,res,next){

    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type, Accept");
    next();
    
});
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('mongodb connection is open');
})

var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.listen("8081",function(){
    console.log("server. listening on 8081");
})

app.use("/mongo.api",mroute);

