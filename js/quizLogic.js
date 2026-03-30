export default function getQuizLogic(quiz){
    return new QuizLogic(quiz);
}

class QuizLogic{
    constructor(quiz){
        this.quiz = quiz;
        this.wrongQuestions = [];
        this.correctQuestions = []; 
        this.activeQuestion = quiz.questions.shift();
    }

    getAnswer = () => this.activeQuestion.answer;

    getNumCorrectQuestions = () => this.correctQuestions.length;

    getNumWrongQuestions = () => this.wrongQuestions.length;

    getTime = () => this.activeQuestion.time;

    getMode = () => this.quiz.mode;

    getWrongAnswers = () => this.activeQuestion.wrongAnswers;    

    getQuestion = () => this.activeQuestion.questionText;

    getQuestionNr = () => this.correctQuestions.length + this.wrongQuestions.length + 1;

    checkAnswer = (answer) => answer === this.activeQuestion.answer;

    handleInput(answer){
        this.checkAnswer(answer)
            ?  this.correctQuestions.push(this.activeQuestion)
            :  this.wrongQuestions.push(this.activeQuestion);

        this.activeQuestion = this.quiz.questions.unshift();
        return this;
    }
}