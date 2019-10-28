var evets=require('events');
var myEmitter=new evets.EventEmitter();
myEmitter.on('someEvent',function(msg)
{console.log(msg)})
myEmitter.emit('someEvent','Evet emitted')