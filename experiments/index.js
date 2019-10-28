var express=require('express');
var app=express();
app.set('view engine','ejs');

    //res.sendFile(__dirname+'styling_students.html');
     //var data={age:31,phone:798347875,hobbies:['Gardening','Painting','Dancing']};
     var students={
         1:{name:'Mark',
            subjects:['c','c++','java']

     },
         2:{ name:'Tom',
            subjects:['sql','mongo','java']
    },
         3:{name:'yury',
            subjects:['asp.net','c++','c#']
},}

app.get('/students/:id',function(req,res){
    // res.render('students',{person:req.params.name,data:data});
    res.render('students',{name:students[req.params.id].name,id:req.params.id,
    subjects:students[req.params.id].subjects});

})
app.listen(3000,function(){
    console.log('You are listening to port 3000');
});