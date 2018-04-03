









const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err)
        return console.log('Unable to connect to the server');

    console.log('Connected to MongoDB Server');

    db.collection('Todos').find({_id:new ObjectID('5ac280c8be8469c2a561d50b')}).toArray().then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }).catch((error) => {
        throw error;
    });
    



    db.close();

});