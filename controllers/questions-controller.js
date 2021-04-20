const questionsService = require('../services/questions-service')
module.exports = (app) => {

    const findAllQuestions = (req, res) => {
        questionsService.findAllQuestions()
            .then(allQuestions => res.json(allQuestions))

    }

    const findQuestionsForQuiz = (req, res) => {
        const questionId = req.params['qid'];
        questionsService.findQuestionsForQuiz(questionId)
            .then(questions => res.json(questions))
    }

    const findQuestionsById = (req, res) => {
        const quizId = req.params['qid'];
        questionsService.findQuestionById(quizId)
            .then(question => res.json(question))
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
    app.get("/api/questions/:qid", findQuestionsById);
}