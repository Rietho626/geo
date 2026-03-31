export default function getQuizDomActions(){
    return new QuizDomActions();
}

class QuizDomActions{
    constructor(){
        this.quizContainer = document.getElementById("quiz-container");
        this.lang = languagePack[localStorage.getItem("langPref") || "english"];
        this.ru, this.lu, this.ll, this.rl, this.logic;
    }

    appendNodes = (node, children) => children.forEach(child=>node.appendChild(child));

    createNode(type, attributes = [["class", "gneralContainer"]]){
        const node = document.createElement(type);
        attributes.forEach(attr=>node.setAttribute(attr[0], attr[1]));
        return node;
    }

    startingScreen(quiz, startQuiz, createQuiz){
        const startClass = ["class", "starting-screen"];
        const heading = this.createNode("h1", [["id","heading"],startClass]);
        const detailsContainer = this.createNode("div", [["id", "details-container"],startClass]);
        const questionTypeContainer = this.createNode("div", [["id", "type-container"],startClass]);
        const questionModeContainer = this.createNode("div", [["id", "mode-container"],startClass]);
        const timeLimitContainer = this.createNode("div", [["id", "time-limit-container"],startClass]);
        const continentContainer = this.createNode("div", [["id", "continent-container"], startClass])
        const numQuestionsContainer  = this.createNode("div", [["id", "num-questions-container"],startClass]);
        const submitContainer = this.createNode("div", [["id", "submit-container"], startClass]);
        const startQuizButton = this.createNode("button", [["id", "start-quiz-button"], startClass]);
        const createNewQuizButton = this.createNode("button", [["id", "create-new-button"], startClass]);

        heading.textContent = quiz["topic"].split("")[0].toUpperCase() + quiz["topic"].slice(1) + this.lang.startingScreen.heading;
        questionModeContainer.textContent = this.lang.startingScreen.questionModeContainer + quiz.mode;
        questionTypeContainer.textContent = this.lang.startingScreen.questionTypeContainer + quiz.type;
        timeLimitContainer.textContent = this.lang.startingScreen.timeLimitContainer + quiz.time;
        numQuestionsContainer.textContent = this.lang.startingScreen.numQuestionsContainer + quiz.numQuestions;
        continentContainer.textContent = quiz.continents.reduce((string, continent)=>{
            return string + ((string) ? ", " : "") + this.lang.continents[continent];
        }, "");

        startQuizButton.textContent = this.lang.startingScreen.startQuizButton;
        createNewQuizButton.textContent = this.lang.startingScreen.createNewQuizButton;

        this.appendNodes(this.quizContainer, [heading, detailsContainer]);
        this.appendNodes(detailsContainer, [
            questionTypeContainer,
            questionModeContainer,
            timeLimitContainer,
            numQuestionsContainer,
            continentContainer,
            submitContainer
        ])
        this.appendNodes(submitContainer, [startQuizButton, createNewQuizButton]);
    

        startQuizButton.addEventListener("click", ()=>{
            startQuiz(quiz);
        });
        createNewQuizButton.addEventListener("click", createQuiz);
    }

    resetQuiz = () => Array.from(document.querySelectorAll("#quiz-container > *")).forEach(node=>node.remove());

    constructQuiz(mode, checkAnswer){
        this.quizWrapper = this.createNode("div", [["id","quiz-wrapper"]]);
        this.quizTopContainer = this.createNode("div", [["id", "quiz-top-container"]]);
        this.heading = this.createNode("h1", [["id", "quiz-heading"]]);
        this.correctQuestionsContainer = this.createNode("div", [["id", "correct-questions-container"]]);
        this.wrongQuestionsContainer = this.createNode("div", [["id", "wrong-questions-container"]]);
        this.correctQuestionsLabel = this.createNode("div", [["id", "correct-questions-label"]]);
        this.wrongQuestionsLabel = this.createNode("div", [["id", "wrong-questions-label"]]);
        this.correctQuestions = this.createNode("div", [["id", "correct-questions"]]);
        this.wrongQuestions = this.createNode("div", [["id", "wrong-questions"]]);
        this.questionBox = this.createNode("div", [["id", "question-box"]]);
        this.question = this.createNode("div", [["id", "quiz-question"]]);
        this.time = this.createNode("div", [["id", "quiz-time"]]);
        this.answerBox = this.createNode("div", [["id", "answer-box"]]);
        this.leftUpperAnswer = this.createNode("div", [["id", "left-upper-answer"]]);
        this.leftLowerAnswer = this.createNode("div", [["id", "left-lower-answer"]]);
        this.rightUpperAnswer = this.createNode("div", [["id", "right-upper-answer"]]);
        this.rightLowerAnswer = this.createNode("div", [["id", "right-lower-answer"]]);
        //Here search/type-in Mode expansion

        this.appendNodes(this.quizContainer, [this.quizWrapper]);
        this.appendNodes(this.quizWrapper, [this.quizTopContainer, this.questionBox, this.answerBox]);
        this.appendNodes(this.quizTopContainer, [this.heading, this.correctQuestionsContainer, this.wrongQuestionsContainer]);
        this.appendNodes(this.correctQuestionsContainer, [this.correctQuestionsLabel, this.correctQuestions]);
        this.appendNodes(this.wrongQuestionsContainer, [this.wrongQuestionsLabel, this.wrongQuestions]);
        this.appendNodes(this.questionBox, [this.question, this.time]);
        //ofc only if mode is multiple choice, otherwise append search bar
        this.appendNodes(this.answerBox, [this.leftUpperAnswer, this.rightUpperAnswer, this.leftLowerAnswer, this.rightLowerAnswer]);

        this.correctQuestionsLabel.textContent = this.lang.quiz.correctQuestions;
        this.wrongQuestionsLabel.textContent = this.lang.quiz.wrongQuestions;

        this.multipleChoiceListener(checkAnswer);
    } 

    updateQuestion(logic){
        this.logic = logic;
        this.correctQuestions.textContent = logic.getNumCorrectQuestions();
        this.wrongQuestions.textContent = logic.getNumWrongQuestions();
        this.heading.textContent = this.lang.quiz.heading + logic.getQuestionNr();
        this.question.textContent = logic.getQuestion();
        this.time.textContent = logic.getTime();

        if(logic.getMode() === "multiple-choice"){
            const answers = [...logic.getWrongAnswers(), logic.getAnswer()];
            const randomizedAnswers = logic.randomizeAnswers(answers);
            this.leftUpperAnswer.textContent = randomizedAnswers[0], this.lu = randomizedAnswers[0];
            this.rightUpperAnswer.textContent = randomizedAnswers[1], this.ru = randomizedAnswers[1];
            this.leftLowerAnswer.textContent = randomizedAnswers[2], this.ll = randomizedAnswers[2];
            this.rightLowerAnswer.textContent = randomizedAnswers[3], this.rl = randomizedAnswers[3];
        }else{
            console.log("Not Multiple Choice")
        }
    }

    multipleChoiceListener(checkAnswer){
        this.answerBox.addEventListener("click", (e)=>{
            if(e.target.id === "left-upper-answer"){
                checkAnswer(this.lu, this.logic, "left-upper-answer");
            }else if(e.target.id === "right-upper-answer"){
                checkAnswer(this.ru, this.logic, "right-upper-answer");
            }else if(e.target.id === "left-lower-answer"){
                checkAnswer(this.ll, this.logic, "left-lower-answer");
            }else if(e.target.id === "right-lower-answer"){
                checkAnswer(this.rl, this.logic, "right-lower-answer");
            }
        })
    }

    displayAnswerCheck(isCorrect, answerBoxId, correctAnswer){
        return new Promise((resolve)=>{
            const answerNode = document.getElementById(answerBoxId);
            let corrAnswerNode = false;
            if(isCorrect){
                answerNode.style.backgroundColor =  "green";
                answerNode.style.color = "white";
            }else{
                answerNode.style.backgroundColor =  "red";
                answerNode.style.color = "white";
                console.log(correctAnswer, this.lu, this.ru, this.rl, this.ll);
                if(this.lu === correctAnswer){
                    corrAnswerNode = document.getElementById("left-upper-answer")
                }else if(this.ll === correctAnswer){
                    corrAnswerNode = document.getElementById("left-lower-answer")
                }else if(this.ru === correctAnswer){
                    corrAnswerNode = document.getElementById("right-upper-answer")
                }else if(this.rl === correctAnswer){
                    corrAnswerNode = document.getElementById("right-lower-answer")
                }
                if(corrAnswerNode) corrAnswerNode.style.backgroundColor = "lightgreen";
            }
            setTimeout(()=>{
                answerNode.style.backgroundColor =  "white";
                answerNode.style.color = "black";
                if(corrAnswerNode) corrAnswerNode.style.backgroundColor = "white";
                resolve(this);
            }, 2000);
        })
    }
}




const languagePack =  {
    "english": {
        "startingScreen":{
            heading: "Quiz",
            questionModeContainer: "Question Mode: ",
            questionTypeContainer: "Question Type: ",
            timeLimitContainer: "Time per Question: ",
            numQuestionsContainer: "Number of Questions: ",
            continentContainer: "Continents: ",
            startQuizButton: "Start Quiz",
            createNewQuizButton: "Create New Quiz"
            
        },
        "continents":{
            europe: "Europe",
            asia: "Asia",
            "north-america": "North America",
            "south-america": "South America",
            africa: "Africa",
            oceania: "Oceania"
        },
        "quiz":{
            correctQuestions: "Correct",
            wrongQuestions: "Incorrect",
            heading: "Question "
        }
    }
}