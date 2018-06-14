var events=require('events');
var logger=require("../logger");
var emitter=new events.EventEmitter();
emitter.on("update",function(data){
    logger.info("number of employees in"+data+"updated");
});
emitter.on("more",function(data){
logger.info("For pattern serach the number of record exceeded 50 and it is"+data);
});
module.exports=emitter;