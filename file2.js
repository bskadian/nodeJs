function callme(p){

    console.log("Line 1");
    p("world","India");
    console.log("line 2");
}

var x=function(a,b){
    console.log("call back");
    console.log("a value is:"+a);
    console.log("b value is:"+b);
}
callme(x);
