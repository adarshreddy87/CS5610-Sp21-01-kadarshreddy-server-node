const quizzes = require("./quizzes.json")


const createQuiz =()=>{

}
const findAllQuizes =()=>{
    return quizzes
}

const findQuizById = (qid) => {
    return quizzes.find((quiz)=> {
        return (quiz._id === qid)
    })
}

const updateQuiz = () => {

}

const deleteQuiz = () => {

}

module.exports = {
    createQuiz, findQuizById, findAllQuizes, updateQuiz,deleteQuiz
}