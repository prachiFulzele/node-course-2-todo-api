const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true} ,(err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const myDb=db.db('Users');
  myDb.collection('Users').find({_id: new ObjectID('5ce98101d46e5bff190d6df3')}).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  },(err)=>{
    console.log('unable to fetch users',err);
  });

//  db.close();
});
