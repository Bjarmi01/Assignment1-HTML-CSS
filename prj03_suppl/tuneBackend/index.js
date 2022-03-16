//Sample for Assignment 3
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
const dbUrl = "mongodb://localhost:27017/";
var db;

const express = require('express');
const app = express();

//Port environment variable already set up to run on Heroku
let port = process.env.PORT || 3000;

//Import a body parser module to be able to access the request body as json
const bodyParser = require('body-parser');

//Use cors to avoid issues with testing on localhost
const cors = require('cors');

// Initialize connection once
 MongoClient.connect(dbUrl, function (err, database){
     if (err) throw err;
     db = database.db("todoDB");
     app.listen(port, () => {
         console.log('Express app listening on port' + port);
     });
 });

//Tell express to use the body parser module
app.use(bodyParser.json());

//Tell express to use cors -- enables CORS for this backend
app.use(cors());  

//Set Cors-related headers to prevent blocking of local requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//The following is an example of an array of two tunes.  Compared to assignment 2, I have shortened the content to make it readable
var tunes = [
    { id: '0', name: "Für Elise", genreId: '1', content: [{note: "E5", duration: "8n", timing: 0},{ note: "D#5", duration: "8n", timing: 0.25},{ note: "E5", duration: "8n", timing: 0.5},{ note: "D#5", duration: "8n", timing: 0.75},
    { note: "E5", duration: "8n", timing: 1}, { note: "B4", duration: "8n", timing: 1.25}, { note: "D5", duration: "8n", timing: 1.5}, { note: "C5", duration: "8n", timing: 1.75},
    { note: "A4", duration: "4n", timing: 2}] },

    { id: '3', name: "Seven Nation Army", genreId: '0', 
    content: [{note: "E5", duration: "4n", timing: 0}, {note: "E5", duration: "8n", timing: 0.5}, {note: "G5", duration: "4n", timing: 0.75}, {note: "E5", duration: "8n", timing: 1.25}, {note: "E5", duration: "8n", timing: 1.75}, {note: "G5", duration: "4n", timing: 1.75}, {note: "F#5", duration: "4n", timing: 2.25}] }
];

let genres = [
    { id: '0', genreName: "Rock"},
    { id: '1', genreName: "Classic"}
];

//Your endpoints go here

//Get all tunes
app.get('/tunes', (req, res) => {
    res.status(200).json(tunes);
});
app.get('/users', (req, res) => {
    db.collection("users").find({}).toArray(function(err, users){
        res.status(200).json(users);
    });
});

// Create documents
let newUser = { username: req.body.username, age: req.body.age };
db.collection("users").insertOne(newUser, function(err, user){
    if (err) throw err;
    res.status(201).json(user.ops[0]);
    return;
})

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
//Start the server

//Default: not supported
app.use('*', (req, res) => {
    res.status(405) .send('Operation not supported.');
});

app.listen(port, () => {
    console.log('Tune app listening on port + ' + port);
});