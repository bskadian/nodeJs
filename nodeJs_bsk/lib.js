global=function(){

    console.log("Global Function is running");
}

constants={pf:0.07,hra:0.09,it:0.03};

class Student{
    constructor(sno,name){
        this.sno=this.sno;
        this.name=this.name;
    }
    display(){

        console.log(this.sno+" "+this.name);
    }
}

module.exports ={

    global:global,
    constants:constants,
    Student:Student
}