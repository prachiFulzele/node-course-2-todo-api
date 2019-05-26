const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,db)=>{
  if(err)
  {
    console.log('not connected');

  }
  console.log('connected');

const myDb=db.db('Users');

  //method 1
/*  myDb.collection('Users').deleteOne({name:'Andrew'}).then((res)=>{
    console.log(res);
  }
);*/

/*myDb.collection('Users').deleteMany({name:'Andrew'}).then((res)=>{
  console.log(res);
}
);*/

myDb.collection('Users').findOneAndDelete({text:'hi'}).then((res)=>{
  console.log(res);
}
);


});
