var express=require('express');
var {mangoose}= require('./db/mongoose.js');
var {Todo}=require('./models/todo.js');
var bodyParser=require('body-parser');

/*var newTodo=new Todo({
  text:'cool'
});

newTodo.save().then((res)=>{console.log('saved',res)},(e)=>{console.log('unable to connect')});
*/

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo=new Todo({
    text: req.body.text
  });

  todo.save().then((doc)=>{
    res.status(200).send(doc);
  },(e)=>{
    res.status(404).send(e);
  });

});
app.listen(3000,()=>{
  console.log('started on port 3000');
});
