var events=require('events');
var util=require('util');
var person=function(name){
    this.name=name;

}
util.inherits(person,events.EventEmitter)
var james=new person('james')
var john=new person('john')
var nury=new person('nury')
var people=[james,john,nury]
people.forEach(function(person){
    person.on('ask',function(msg){
        console.log(person.name +'ask :'+msg)
    })

    person.on('speak',function(msg){
        console.log(person.name +'said:'+msg)
    })
})
james.emit('speak','Hello All')
nury.emit('ask','where are you?')
