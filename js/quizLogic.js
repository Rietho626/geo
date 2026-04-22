import transliterate from "./transliterate.js";
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

    updateActive = () => this.activeQuestion = this.quiz.questions.shift();
 
    getAnswer = () => this.activeQuestion.answer;

    getNumCorrectQuestions = () => this.correctQuestions.length;

    getNumWrongQuestions = () => this.wrongQuestions.length;

    getTime = () => this.quiz.time;

    getMode = () => this.quiz.mode;

    getWrongAnswers = () => this.activeQuestion.wrongAnswers;    

    getQuestion = () => this.activeQuestion.questionText;

    getQuestionObject = () => this.activeQuestion.questionObject;

    getAnswerType = () => this.activeQuestion.questionType.split("-")[1];

    getQuestionNr = () => this.correctQuestions.length + this.wrongQuestions.length + 1;

    checkAnswer(answer){
        const aType = this.getAnswerType();
        const correctAnswer = this.getAnswer();
        if(Boolean(Number(answer))){
            return answer === correctAnswer;
        }else{
            const formattedAnswer = this.transliterate(answer);
            const formattedCorrectAnswer = this.transliterate(correctAnswer);

            if(aType === "capital"){
                const tlCapitalObj = this.quiz.tlCapitals[formattedAnswer];
                if(tlCapitalObj){
                    return (this.transliterate(this.quiz.allCountries[tlCapitalObj["country"]]["capital"]) === formattedCorrectAnswer || formattedAnswer === correctAnswer)
                    ? true 
                    : false; 
                }
            }else if(aType === "country"){
                const tlCountryObj = this.quiz.tlCountries[formattedAnswer];
                if(tlCountryObj){
                    return tlCountryObj["country"] === formattedCorrectAnswer || formattedAnswer === formattedCorrectAnswer
                    ? true 
                    : false; 
                }
            }
            return formattedAnswer === formattedCorrectAnswer;
        }
    }

    checkForQuizEnd = () => (!this.quiz.questions.length) ? true : false;

    getDecrementor(time){
        return function(){
            time--;
            return time;
        }
    }

    transliterate(str){
        let word = str.toLowerCase();
        transliterate.forEach((val, key)=>{
           word = word.replaceAll(key, val);
        })
        return word;
    }

    validateInput(input){
        const aType = this.getAnswerType();
        const formattedInput = this.transliterate(input);
        if(aType === "country"){
            return (this.quiz.allCountries[formattedInput] || this.quiz.tlCountries[formattedInput]) ? true : false;
        }else if(aType === "capital"){
            return (this.quiz.countriesByCapital[formattedInput] || this.quiz.tlCapitals[formattedInput]) ? true : false;
        }
    }

    handleInput(answer){
        const isCorrect = this.checkAnswer(answer);
        isCorrect ? this.correctQuestions.push(this.activeQuestion) :  this.wrongQuestions.push(this.activeQuestion);
        return isCorrect;
    }

    randomizeAnswers(answers, randomAnswers = []){
        if(randomAnswers.length == 4){
            return randomAnswers;
        }else{
            const rndm = answers[Math.floor(Math.random()*answers.length)];
            answers[answers.indexOf(rndm)] = answers[0];
            answers.shift();
            randomAnswers.push(rndm);
            return this.randomizeAnswers(answers, randomAnswers);
        }
    }

}