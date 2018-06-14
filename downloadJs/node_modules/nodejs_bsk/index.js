var lib =require('./lib');
var obj = new lib.Student(12,"bhupi");


obj.display();
lib.global();
console.log(lib.constants);
home=function(){

    console.log("this is the funtion on home page");
}
const appname="Global node package";
module.exports={

    home:home,
    appname:appname,
    lib:lib
}

module.exports.version="1.0.0";