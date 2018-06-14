var express =require('express');
var app=express();
var fs=require("fs")
var bodyParser=require("body-parser")
var dbroutes=require('./routes/dbroute');
//parsing incoming request
app.use(bodyParser.urlencoded({extended:true}));
//to create listener
app.listen(8080,function(){

    console.log("Server is running on port 8080");
});

//configuring  view template

app.set('views',__dirname+'/public/templates');
app.set('view engine','ejs');

//handling requests
app.get('/',function(request,response){
    response.send("helloo from express");
})

app.post("/store",function(request,response){
    var SNo=request.body.SNo;
    var Name=request.body.Name;
    var City=request.body.City;
    var obj ={SNo:SNo,Name:Name,City:City};
    //obj=JSON.stringify(obj);
    fs.readFile("data/info.txt",'utf8',function(err,data){
        if(err)
        response.send("Error ehile manipulating data");
        var temp=JSON.parse(data);
        temp.push(obj);
        temp=JSON.stringify(temp);
        fs.writeFile("data/info.txt",temp,function(err){
        if(err)
        response.send("data not stored...!!");
        response.send("Data stored in a file");
    })
    })
    

})
/*
app.get("/table", function(request,response){

fs.readFile('data/info.txt','utf8',function(err,obj){
    if(err)
    response.send("no Data...");
    let info= JSON.parse(obj);
    response.render("table",{data:info});
})

})
*/

//to join a route


app.use("/dbroutes",dbroutes);

app.use(express.static(__dirname+'/public/styles'));
app.use(express.static(__dirname+"/bower_components"));
app.get('/home',function(request,response){
    console.log("inside");
    response.sendFile(__dirname+"/public/views/index.html");
   
})

/*
app.post("/store",function(request,response){
    let regex = /\.(docx|doc|pdf)$/;
    let filename=request.files.resume.name;
    if(regex.test(filename))
    {
        request.files.resume.mv("resume/"+filename,function(err){

            if(err){

                resume.send("resume not stored and so is data");
            }
        })
    }
    else
    response.send("data is not stored, please upload doc or pdf");
})

*/
