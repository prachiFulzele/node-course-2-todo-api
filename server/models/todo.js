var mongoose=require('mongoose');

var Todo=mongoose.model('Todo',{
  text:{type: String, trim:true , minLength:1},
  num:{type:Number},
  complete:{type:Boolean}
});

module.exports={
  Todo
};
