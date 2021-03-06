const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (id) => questionsModel.findById(id)
const findQuestionsForQuiz = (qid) => {
    return questionsModel.find({'quizId': qid});
}
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }