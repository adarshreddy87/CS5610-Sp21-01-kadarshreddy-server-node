const quizzes = require("./quizzes.json")

const quizzesModel = require("../../db/quizzes/quizzes-model")


const createQuiz =()=>{

}
const findAllQuizes =()=>{
    return quizzesModel.find()
}

const findQuizById = (qid) => {
    return quizzesModel.findById(qid)
}

const updateQuiz = () => {

}

const deleteQuiz = () => {

}

module.exports = {
    createQuiz, findQuizById, findAllQuizes, updateQuiz,deleteQuiz
}