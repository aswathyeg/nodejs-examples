var http=require('http');
http.createServer(function(req,res){
    res.end('Hello node');
}).listen(3000);
console.log('Server is running on http:\\ 127.0.0.1:3000:')
