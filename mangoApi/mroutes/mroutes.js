var express=require('express');
var route=express.Router();
var companies=require('../schema/schema');
route.get('/companies/:name',function(request,response){
    let name=request.params.name;
    companies.find({name: name},function(err,data){

        if(err)
        response.json({});
        else
        response.json(data);
    });
});

route.get("/cname/:pattern",function(request,response){
companies.find({name:{$regex:request.params.pattern,$options:'i'}},{_id:0,name:1},
function(err,data){
    if(err){
    response.send(err);
    response.json([]);
    }
    response.json(data);
})
});

//update the employee
route.put("/empcount/:name",function(request,response){
    let cname=request.params.name;
    companies.update({name:cname},{$set:request.body},function(err,data){
        if(err)
        response.send({result:"not updated"});
        response.send({result:"Successfully updated"});
    });
});
module.exports=route;