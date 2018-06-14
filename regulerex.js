var obj =["1234","abbcc","Ram","hdfh"];
var regex=/[0-9]$/;
for(var x in obj){
    if(regex.test(obj[x]))
    console.log(obj[x]);
}