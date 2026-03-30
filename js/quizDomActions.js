export default function getQuizDomActions(){
    return new QuizDomActions();
}

class QuizDomActions{
    constructor(){
        this.quizContainer = document.getElementById("quiz-container");
        this.lang = languagePack[localStorage.getItem("langPref") || "english"];
    }
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

        this.quizContainer.appendChild(heading);
        this.quizContainer.appendChild(detailsContainer);
        detailsContainer.appendChild(questionTypeContainer);
        detailsContainer.appendChild(questionModeContainer);
        detailsContainer.appendChild(timeLimitContainer);
        detailsContainer.appendChild(numQuestionsContainer);
        detailsContainer.appendChild(continentContainer)
        detailsContainer.appendChild(submitContainer);
        submitContainer.appendChild(startQuizButton);
        submitContainer.appendChild(createNewQuizButton);

        startQuizButton.addEventListener("click", ()=>{
            startQuiz(quiz);
        });
        createNewQuizButton.addEventListener("click", createQuiz);
    }

    resetQuiz = () => Array.from(document.querySelectorAll("#quiz-container > *")).forEach(node=>node.remove());

    constructQuiz(mode){
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

        this.quizContainer.appendChild(this.quizWrapper);
        this.quizWrapper.appendChild(this.quizTopContainer);
        this.quizTopContainer.appendChild(this.heading);
        this.quizTopContainer.appendChild(this.correctQuestionsContainer);
        this.quizTopContainer.appendChild(this.wrongQuestionsContainer);
        this.correctQuestionsContainer.appendChild(this.correctQuestionsLabel);
        this.correctQuestionsContainer.appendChild(this.correctQuestions);
        this.wrongQuestionsContainer.appendChild(this.wrongQuestionsLabel);
        this.wrongQuestionsContainer.appendChild(this.wrongQuestions);
        this.quizWrapper.appendChild(this.questionBox);
        this.questionBox.appendChild(this.question);
        this.questionBox.appendChild(this.time);
        this.quizWrapper.appendChild(this.answerBox);



        //ofc only if mode is multiple choice, otherwise append search bar
        this.answerBox.appendChild(this.leftUpperAnswer);
        this.answerBox.appendChild(this.rightUpperAnswer);
        this.answerBox.appendChild(this.leftLowerAnswer);
        this.answerBox.appendChild(this.rightLowerAnswer);

        this.correctQuestionsLabel.textContent = this.lang.quiz.correctQuestions;
        this.wrongQuestionsLabel.textContent = this.lang.quiz.wrongQuestions;
    } 

    randomizeAnswers(answers){
        const randomAnswers = [];
        console.log("random answers: " + randomAnswers);
        console.log("answers: " + answers);
        if(randomAnswers.length == 4){
            return randomAnswers;
        }else{
            const rndm = answers[Math.floor(Math.random()*answers.length)];
            answers[answers.indexOf(rndm)] = answers[0];
            answers.shift();
            randomAnswers.push(rndm);
            return this.randomizeAnswers(answers);
        }
    }

    updateQuestion(logic){
        this.correctQuestions.textContent = logic.getNumCorrectQuestions();
        this.wrongQuestions.textContent = logic.getNumWrongQuestions();
        this.heading.textContent = this.lang.quiz.heading + logic.getQuestionNr();
        this.question.textContent = logic.getQuestion();
        this.time.textContent = logic.getTime();

        if(logic.getMode() === "multiple-choice"){
            const answers = [...logic.getWrongAnswers()].push(logic.getAnswer());
            console.log(answers);
            console.log([...logic.getWrongAnswers()].push(logic.getAnswer()))
            const randomizedAnswers = this.randomizeAnswers(answers);
            this.leftUpperAnswer.textContent = randomizedAnswers[0];
            this.rightUpperAnswer.textContent = randomizedAnswers[1];
            this.leftLowerAnswer.textContent = randomizedAnswers[2];
            this.rightLowerAnswer.textContent = randomizedAnswers[3];
            return randomizedAnswers;
        }else{
            console.log("Not Multiple Choice")
        }
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