var db=require('./connection.js');
var operations={
    getAll: function(callback){
        db.query
        ("select * from person",callback);

    },
    addPerson:function(person,callback){
        db.query("insert into person values(?,?,?)",[person.SNo,person.Name,person.City],callback);
    }
}
module.exports=operations;