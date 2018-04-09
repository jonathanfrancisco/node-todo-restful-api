// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err) 
        return console.log('Unable to connect to MongoDB Server.');

    console.log('Connected to MongoDB Server.');


    db.collection('Users').findOneAndUpdate({
        name: 'Chrisha Jewel'
    },{
        $set: {
            location: 'Sa puso ni Jonathan'
        }
    },{
        returnOriginal: false
    }, (err, result) => {
        console.log(result);
    });

   
});

