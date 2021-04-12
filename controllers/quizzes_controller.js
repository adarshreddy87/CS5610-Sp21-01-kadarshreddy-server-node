const quizzesService = require("../services/quizes/quizzes-service")
module.exports =(app) =>{

    const findAllQuizzes =(req,res) =>{
        res.send(quizzesService.findAllQuizes())
    }
    const findQuizById =(req,res) => {
        const quizId= req.params['qid']
        res.send(quizzesService.findQuizById(quizId))
    }
    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:qid', findQuizById)



}