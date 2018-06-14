var express = require('express');
var route=express.Router();
var task=require('../database/task');

route.get("/people",function(request,response){
task.getAll(function(err,data){
    if(err)
    response .render("table",{data:[]});
    else
    response .render("table",{data:data});
})
})

route.post("/addPeople",function(request,response){
    let person={

        SNo:request.body.SNo,
        Name:request.body.Name,
        City:request.body.City
    }
    task.addPerson(person,function(err,data){
        if(err)
        response.send("row not added");
        response.send("row added");
    });
})
module.exports=route;