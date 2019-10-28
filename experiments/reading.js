var fs=require('fs');
var data=fs.readFile('read.txt',
function(err,data){
if(err)return console.err(err);
console.log(data.toString())
console.log(data.length)
}
);
console.log("program ended");