const express = require('express')
const app = express()

//mongodb+srv://adarsh:adarsh@webdev.ueqhd.mongodb.net/WebDev?retryWrites=true&w=majority
const mongoose = require('mongoose');
const remoteURI = `mongodb+srv://adarsh:adarsh@webdev.ueqhd.mongodb.net/WebDev?retryWrites=true&w=majority`
//const localUri = `mongodb://localhost:27017/whiteboard-02`
try {
    mongoose.connect(remoteURI,
        {useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log('connected to db'));
} catch (err) {
    console.log('failed to connect to db')
}

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

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)
app.listen(process.env.PORT || 5000);