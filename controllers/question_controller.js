const questionService = require("../services/questions/questions-service")
module.exports =(app) =>{

    const findAllQuestions =(req,res) =>{
        res.send(questionService.findAllQuestions())
    }


    const findQuestionsForQuiz =(req,res) => {
        const quizId= req.params['qzid']
        res.send(questionService.findQuestionsForQuiz(quizId))
    }
    app.get("/api/questions",findAllQuestions)
    app.get('/api/quizzes/:qzid/questions', findQuestionsForQuiz)
}