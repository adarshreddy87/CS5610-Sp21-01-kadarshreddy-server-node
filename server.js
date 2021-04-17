const express = require('express')
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/whiteboard',
    {useNewUrlParser: true, useUnifiedTopology: true});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

// const demos =require('./controllers/demos-controller')
// demos(app)

const quizzesController = require("./controllers/quizzes_controller")
const questionController = require("./controllers/question_controller")
quizzesController(app)
questionController(app)
app.listen(3000)