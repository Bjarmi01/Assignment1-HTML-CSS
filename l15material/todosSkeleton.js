const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');


let users = [
    { id: 5, username: "Alice", age: 31},
    { id: 10, username: "Bob", age: 31}];

let notes = [
    { userId: 5, usernotes: [
        { id: 10, name: "todos for today", content: "Prepare Lab 6"},
        { id: 12, name: "memo for l15", content: "Do not forget to mention Hero"}
    ]},
    { userId: 10, usernotes: [
        { id: 1, name: "shopping list", content: "Milk, Cheese"}
    ]
    }];

//Get all users
app.get('/users', (req, res) => {
    res.status(200) .json(users);
});

app.get('/users/:userId', (req, res) => {
    for (let i=0; i<users.length; i++){
        if (users[i].id == req.params.userId){
            return res.status(200).json(users[i]);
        }
    }
    res.status(404).json({'message': "User with id " + req.params.userId} + " does not exist")
});

app.post('/users', (req, res) => {
    if (req.body === undefined || req.body.username === undefined || req.body.age === undefined){
        return res.status(400).json({'message': "username and age are required in the request body"})
    } else {
        if (isNaN(Number(req.body.age)) || (Number(req.body.age)) < 0){
            return res.status(400).json({'message': "Age has to be a positive number."});
        }
        let newUser = {username: req.body.username, age: req.body.age, id: nextId};
        users.push(newUser);
        let newNotes = {userId: nextId, userNotes: []};
        notes.push(newNotes);
        nextId++;
        res.status(201).json(newUser);
    }
});

app.put('/users:userId', (req, res) => {
    if (req.body === undefined || req.body.username === undefined || req.body.age === undefined){
        return res.status(400).json({'message': "username and age are required in the request body"})
    } else {
        if (isNaN(Number(req.body.age)) || (Number(req.body.age)) < 0){
            return res.status(400).json({'message': "Age has to be a positive number."});
        }
        for (let i = 0; i<users.length;i++){
            if (users[i].id == req.params.userId){
                users[i].username = req.body.username;
                users[i].age = req.body.age;
                res.status(200).json(users[i]);
                return;
            }
        }
        res.status(404).json({'message': "User with id" + req.params.userId + "does not exist"})
    }
});

app.patch('/users:userId', (req, res) => {
    if (req.body === undefined || req.body.username === undefined && req.body.age === undefined){
        return res.status(400).json({'message': "username and age are required in the request body"})
    } else {
        if (isNaN(Number(req.body.age)) || (Number(req.body.age)) < 0){
            return res.status(400).json({'message': "Age has to be a positive number."});
        }
        for (let i = 0; i<users.length;i++){
            if (users[i].id == req.params.userId){
                if (req.body.username !== undefined){
                    users[i].username = req.body.username;
                }
                if (req.body.age !== undefined){
                    users[i].age = req.body.age;
                }
                res.status(200).json(users[i]);
                return;
            }
        }
        res.status(404).json({'message': "User with id" + req.params.userId + "does not exist"})
    }
});

//Delete all users
app.delete('/users', (req, res) => {
    var returnArray = users.slice();
    users = [];
    res.status(200) .json(returnArray);
});

app.delete('/users/:userId', (req, res) => {
    for (let i=0; i<users.length; i++){
        if (users[i].id == req.params.userId){
            res.status(200).json(users.splice(i, 1));
            return;
        }
    }
    res.status(404).json({'message': "User with id " + req.params.userId} + " does not exist")
});

//Note endpoints
app.get('/users/:userId/notes', (req, res) => {
    for (let i=0; i<notes.length; i++){
        if (users[i].id == req.params.userId){
            return res.status(200).json(notes[i].userNotes);
        }
    }
    res.status(404).json({'message': "User with id " + req.params.userId} + " does not exist")
});

app.get('/users:userId/notes:noteId', (req, res) => {
    for (let i=0; i < notes.length; i++){
        if (notes[i].userId == req.params.userId){
            for (let j=0; j < notes[i].userNotes.length; j++){
                if (notes[i].userNotes[j].id == req.params.noteId){
                    return res.status(200).json(users[i]);
                }
            }
            res.status(404).json({'message': "Note with id " + req.params.noteId} + " does not exist")        
            return;
        }
    }
    res.status(404).json({'message': "User with id " + req.params.userId} + " does not exist")

});

app.post('/users:userId/notes', (req, res) => {
    res.status(200) .json({'message': "Post a new note for user with id" + req.params.userId});
});

app.put('/users:userId/notes:noteId', (req, res) => {
    res.status(200) .json({'message': "Update note with id" + req.params.noteId});
});

app.delete('/users:userId/notes:noteId', (req, res) => {
    res.status(200) .json({'message': "Delete note with id"} + req.params.noteId);
});

app.delete('/users:userId/notes', (req, res) => {
    res.status(200) .json({'message': "Delete all notes for user with id"} + req.params.userId);
});

app.get('/notes', (req, res) => {
    res.status(200) .json({'message': "Get all notes"});
});

//Default: Not supported
app.use('*', (req, res) => {
    res.status(405) .send('Operation not supported.');
});

app.listen(port, () => {
    console.log('Express app listening on port' + port);
});

 
