
const chai = require('chai');
const {expect} = chai;
const chaiHttp = require('chai-http');
const app = require('../../server/server').app;
const Todo = require('../models/todo').Todo;
chai.use(chaiHttp);

const todos = [
    {text: 'First to do'},
    {text: 'Second to do'}
];

// BEFORE EACH TEST
// CLEAR THE DATABASE
beforeEach((done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos);
        done();
    });
});


describe("GET /todos", () => {

    it("should get all todos", (done) => {
        chai.request(app)
        .get('/todos')
        .end((err, res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body.todos.length).to.be.equal(2);
            done();
        });
    });

});

describe("POST /todos", () => {

    // TEST 1
    it("should create a new todo", (done) => {
        var todoText = 'Test todo';
        chai.request(app)
        .post('/todos')
        .send({text: todoText})
        .end((err, res) => {
            if(err) 
                done(err);
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body.text).to.be.equal(todoText);
       
            Todo.find({text: todoText}).then((todos) => {
                expect(todos.length).to.be.equal(1);
                expect(todos[0].text).to.be.equal(todoText);
               done( );
            }).catch((err) =>{
                done(err);
            });
        });
    });
    
    // TEST 2
    it("should not create todo with invalid body data", (done) => {
        chai.request(app)
        .post('/todos')
        .send({})
        .end((err, res) => {
            if(err) done(err);
            expect(res.status).to.be.equal(400);
            expect(res.body.errors).to.be.not.null;  
            Todo.find().then((todos) => {
                expect(todos.length).to.be.equal(2);
                done();
            }).catch((err) => {
                done(err);
            });
        });
    });


});
    
