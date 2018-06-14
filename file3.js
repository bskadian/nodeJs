function callthistoo(p){

    console.log(p);
    return function(q){console.log(q)}
}

callthistoo("Broad")("France");