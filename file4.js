var obj=[23,45,"Bhupender", function(){
    console.log("Running...");
},function(){
   console.log("Walking..."); 
},[12,13,function(){
   console.log("Walking..."); 
}],object]

obj[3]();
obj[4]();
obj[5][2]();
obj[6].print();
console.log(obj[6].skills);
var matrix=[[1,2,3],[1,4,3],[13,33,22]]
console.log(matrix);