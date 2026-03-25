export default function createQuizController(quizSettings){
    return new QuizController(quizSettings);
}

class QuizController{
    constructor(quizSettings){
        this.settings = quizSettings;
    }

    testSettings(){
        console.log(this.settings);
    }
}