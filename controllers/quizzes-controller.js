const quizzesService = require('../services/quizzes-service')
module.exports = (app) => {
    const findAllQuizzes = (req, res) => {
        quizzesService.findAllQuizzes()
            .then(allQuizzes => res.json(allQuizzes))
    }

    const findQuizById = (req, res) => {
        quizzesService.findQuizById(req.params['qid'])
            .then(quiz => res.json(quiz))
    }

    app.get("/api/quizzes", findAllQuizzes)
    app.get("/api/quizzes/:qid", findQuizById)
}