// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err) 
        return console.log('Unable to connect to MongoDB Server.');

    console.log('Connected to MongoDB Server.');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do.',
    //     completed: false
    // }, (err, result) => {
    //     if(err)
    //         return console.log('unable to insert todo', err);
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    
    // db.collection('Users').insertOne({
    //     name: 'Chrisha Jewel',
    //     age: 19,
    //     location: 'Philippines'
    // }, (err, result) => {
    //     if(err)
    //         return console.log('Unable to insert');
    //     console.log('Successfully inserted: ',JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
   
});
