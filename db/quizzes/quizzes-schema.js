const mongoose = require("mongoose")

const quizzesSchema = mongoose.Schema({
    _id: String,
    title:String,
    courseId:String
}, {collection:"quizzes"})

module.exports= quizzesSchema