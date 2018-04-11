const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose.js');
const Todo = require('./models/todo').Todo;
const User = require('./models/user').User;
var app = express();
app.use(bodyParser.json());


app.post('/todos',(req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }).catch((err) => {
        res.status(400).send(err);
    });

});



app.listen(3000, () => {
    console.log('Server has started on port 3000');
})

module.exports.app = app;