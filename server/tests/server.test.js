
const chai = require('chai');
const {expect} = chai;
const chaiHttp = require('chai-http');
const app = require('../../server/server').app;
const Todo = require('../models/todo').Todo;
chai.use(chaiHttp);

// BEFORE EACH TEST
// CLEAR THE DATABASE
beforeEach((done) => {
    console.log('Inside before each');
    Todo.remove({}).then(() => {
        done();
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

            Todo.find().then((todos) => {
                expect(todos.length).to.be.equal(1);
                expect(todos[0].text).to.be.equal(todoText);
                done();
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
                expect(todos.length).to.be.equal(0);
                done();
            }).catch((err) => {
                done(err);
            });
        });
    });


});
    
