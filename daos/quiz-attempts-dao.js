const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model')

const scoreQuiz = (questions) => {
    let numberOfCorrectQuestions = 0;
    questions.forEach(question => question.answer === question.correct ?
        numberOfCorrectQuestions++ : numberOfCorrectQuestions);
    return 100 * (numberOfCorrectQuestions / questions.length );
}

const findAttemptsForQuiz = (qzid) =>
{
    return quizAttemptsModel.find({quiz: qzid}).populate('quiz', 'title_id')
}
const createAttempt = (qid, attempt) =>{
    console.log("ho")
    return quizAttemptsModel.create({ quiz: qid, answers: attempt, score: scoreQuiz(attempt)})

}
     // return quizAttemptsModel.find({quiz: qid})

module.exports = { createAttempt, findAttemptsForQuiz }