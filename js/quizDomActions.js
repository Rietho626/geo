export default function getQuizDomActions(){
    return new QuizDomActions();
}

class QuizDomActions{
    constructor(){
        this.quizContainer = document.getElementById("quiz-container");
        this.lang = languagePack[localStorage.getItem("langPref") || "english"];
        this.enabled = true;
        this.ru, this.lu, this.ll, this.rl, this.logic;
    }

    appendNodes = (node, children) => children.forEach(child=>node.appendChild(child));

    createNode(type, attributes = [["class", "gneralContainer"]]){
        const node = document.createElement(type);
        attributes.forEach(attr=>node.setAttribute(attr[0], attr[1]));
        return node;
    }

    startingScreen(quiz, startQuiz){
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
        this.createNewQuizButton = this.createNode("button", [["id", "create-new-button"], startClass]);

        heading.textContent = quiz["topic"].split("")[0].toUpperCase() + quiz["topic"].slice(1) + this.lang.startingScreen.heading;
        questionModeContainer.textContent = this.lang.startingScreen.questionModeContainer + quiz.mode;
        questionTypeContainer.textContent = this.lang.startingScreen.questionTypeContainer + quiz.type;
        timeLimitContainer.textContent = this.lang.startingScreen.timeLimitContainer + quiz.time;
        numQuestionsContainer.textContent = this.lang.startingScreen.numQuestionsContainer + quiz.numQuestions;
        continentContainer.textContent = quiz.continents.reduce((string, continent)=>{
            return string + ((string) ? ", " : "") + this.lang.continents[continent];
        }, "");

        startQuizButton.textContent = this.lang.startingScreen.startQuizButton;
        this.createNewQuizButton.textContent = this.lang.startingScreen.createNewQuizButton;

        this.appendNodes(this.quizContainer, [heading, detailsContainer]);
        this.appendNodes(detailsContainer, [
            questionTypeContainer,
            questionModeContainer,
            timeLimitContainer,
            numQuestionsContainer,
            continentContainer,
            submitContainer
        ])
        this.appendNodes(submitContainer, [startQuizButton, this.createNewQuizButton]);
    

        startQuizButton.addEventListener("click", ()=>{
            startQuiz(quiz);
        });
        this.createNewQuizButton.addEventListener("click", ()=>{
            this.createQuiz();
        });
    }

    createQuiz(){
        this.resetQuiz();
        document.getElementById("create-quiz-container").style.display = "block";
    }

    resetQuiz = () => Array.from(document.querySelectorAll("#quiz-container > *")).forEach(node=>node.remove());

    constructQuiz(mode, checkAnswer){
        this.quizWrapper = this.createNode("div", [["id","quiz-wrapper"]]);
        this.quizTopContainer = this.createNode("div", [["id", "quiz-top-container"]]);
        this.heading = this.createNode("h1", [["id", "quiz-heading"]]);
        this.pastQuestionsContainer = this.createNode("div", [["id", "past-questions-container"]]);
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

        //Here search/type-in Mode expansion

        this.appendNodes(this.quizContainer, [this.quizWrapper]);
        this.appendNodes(this.quizWrapper, [this.quizTopContainer, this.questionBox, this.answerBox]);
        this.appendNodes(this.quizTopContainer, [this.heading, this.pastQuestionsContainer]);
        this.appendNodes(this.pastQuestionsContainer, [this.correctQuestionsContainer, this.wrongQuestionsContainer])
        this.appendNodes(this.correctQuestionsContainer, [this.correctQuestionsLabel, this.correctQuestions]);
        this.appendNodes(this.wrongQuestionsContainer, [this.wrongQuestionsLabel, this.wrongQuestions]);
        this.appendNodes(this.questionBox, [this.question, this.time]);

        if(this.mode === "multiple-choice"){
            this.leftUpperAnswer = this.createNode("div", [["id", "left-upper-answer"]]);
            this.leftLowerAnswer = this.createNode("div", [["id", "left-lower-answer"]]);
            this.rightUpperAnswer = this.createNode("div", [["id", "right-upper-answer"]]);
            this.rightLowerAnswer = this.createNode("div", [["id", "right-lower-answer"]]);
            this.blockContainer = this.createNode("div", [["id", "block-container"]]);
            this.leftUpperImg = this.createNode("img", [["display", "none"], ["id","left-upper-img"]]);
            this.rightUpperImg = this.createNode("img", [["display", "none"], ["id","right-upper-img"]]);
            this.leftLowerImg = this.createNode("img", [["display", "none"], ["id","left-lower-img"]]);
            this.rightLowerImg = this.createNode("img", [["display", "none"], ["id","right-lower-img"]]);

            this.appendNodes(this.answerBox, [this.leftUpperAnswer, this.rightUpperAnswer, this.leftLowerAnswer, this.rightLowerAnswer, this.blockContainer]);
            this.appendNodes(this.leftUpperAnswer, [this.leftUpperImg]);
            this.appendNodes(this.rightUpperAnswer, [this.rightUpperImg]);
            this.appendNodes(this.leftLowerAnswer, [this.leftLowerImg]);
            this.appendNodes(this.rightLowerAnswer, [this.rightLowerImg]);

            this.multipleChoiceListener(checkAnswer);

        }else if(this.mode === "type-in-mode"){
            this.inputBar = this.createNode("input", [["type", "text"], ["id", "type-in-ipnut"]]);
            this.responseField = this.createNode("div", [["id", "type-in-response"]]);
            this.submitAnswer = this.createNode("button", [["id", "type-in-submit"]]);
            this.inputBarContainer = this.createNode("div", [["id", "input-bar-container"]]);
            this.appendNodes(this.answerBox, [this.inputBarContainer, this.responseField, this.blockContainer]);
            this.appendNodes(this.inputBarContainer, [this.inputBar, this.submitAnswer]);

            this.typeInListener(checkAnswer);
            this.typeInCheck();
        }

        this.blockContainer.addEventListener("click", ()=>{
            if(this.enabled){
                    this.blockContainer.style.display = "none";
                    checkAnswer("timeout", this.logic, "timeout");
            } 
        })
      
        this.correctQuestionsLabel.textContent = this.lang.quiz.correctQuestions;
        this.wrongQuestionsLabel.textContent = this.lang.quiz.wrongQuestions;
        this.blockContainer.textContent = "Click here to continue!";
        this.blockContainer.style.display = "none";       
    } 

    startTimer(logic){
        this.time.textContent = logic.getTime();
        const decrementor = logic.getDecrementor(logic.getTime());
        this.interval = setInterval(()=>{
            const currTime = decrementor();
            this.time.textContent = currTime;
            if(currTime === 0){
                clearInterval(this.interval);
                this.time.textContent = "Time Up!";
                this.handleTimeUp();
            }
        }, 1000)
    }

    stopTimer(){
        clearInterval(this.interval);
    }

    handleTimeUp(){
        this.blockContainer.style.display = "flex";
        this.blockContainer.style.width = getComputedStyle(this.answerBox).width;
        this.blockContainer.style.height = getComputedStyle(this.answerBox).height;
    }

    toggleEnabled = (b) => this.enabled = b;

    updateQuestion(logic){
        this.logic = logic;
        this.correctQuestions.textContent = logic.getNumCorrectQuestions();
        this.wrongQuestions.textContent = logic.getNumWrongQuestions();
        this.heading.textContent = this.lang.quiz.heading + logic.getQuestionNr();
        this.question.textContent = logic.getQuestion();
        if(logic.getTime() !== "no-limit") this.startTimer(logic);

        if(logic.getMode() === "multiple-choice"){
            const answers = [...logic.getWrongAnswers(), logic.getAnswer()];
            const randomizedAnswers = logic.randomizeAnswers(answers);
            if(logic.getAnswer().startsWith("http")){
                console.log(randomizedAnswers);
                this.leftUpperImg.src = randomizedAnswers[0], this.lu = randomizedAnswers[0];
                this.rightUpperImg.src= randomizedAnswers[1], this.ru = randomizedAnswers[1];
                this.leftLowerImg.src= randomizedAnswers[2], this.ll = randomizedAnswers[2];
                this.rightLowerImg.src = randomizedAnswers[3], this.rl = randomizedAnswers[3];
                Array.from(document.querySelectorAll("#answer-box img")).forEach(node=>{
                    const img = new Image();
                    img.onload = function(){
                        node.style.height = img.height;
                        node.style.width = img.width;
                        node.style.display = "block";
                    }
                 
                })
            }else{
                Array.from(document.querySelectorAll("#answer-box img")).forEach(node=>{node.display = "none";})
                this.leftUpperAnswer.textContent = randomizedAnswers[0], this.lu = randomizedAnswers[0];
                this.rightUpperAnswer.textContent = randomizedAnswers[1], this.ru = randomizedAnswers[1];
                this.leftLowerAnswer.textContent = randomizedAnswers[2], this.ll = randomizedAnswers[2];
                this.rightLowerAnswer.textContent = randomizedAnswers[3], this.rl = randomizedAnswers[3];
            }
        }else{
            console.log("Not Multiple Choice")
        }
    }

    multipleChoiceListener(checkAnswer){
        this.answerBox.addEventListener("click", (e)=>{
            if((e.target.id === "left-upper-answer" || e.target.id === "left-upper-img") && this.enabled){
                checkAnswer(this.lu, this.logic, "left-upper-answer");
            }else if((e.target.id === "right-upper-answer" || e.target.id === "right-upper-img") && this.enabled){
                checkAnswer(this.ru, this.logic, "right-upper-answer");
            }else if((e.target.id === "left-lower-answer" || e.target.id === "left-lower-img") && this.enabled){
                checkAnswer(this.ll, this.logic, "left-lower-answer");
            }else if((e.target.id === "right-lower-answer" || e.target.id === "right-lower-img") && this.enabled){
                checkAnswer(this.rl, this.logic, "right-lower-answer");
            }
        })
    }

    typeInCheck(){
        this.inputBar.addEventListener("input", ()=>{
            const isValid = this.logic.validateInput(this.inputBar.value);
            this.submitAnswer.style.backgroundColor = (isValid) ? "lightgreen" : "red";
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
                setTimeout(()=>{
                  if(corrAnswerNode) corrAnswerNode.style.backgroundColor = "lightgreen";
                },500);
            }
            setTimeout(()=>{
                answerNode.style.backgroundColor =  "transparent";
                answerNode.style.color = "black";
                if(corrAnswerNode) corrAnswerNode.style.backgroundColor = "transparent";
                resolve(this);
            }, 2000);
        })
    }

    quizEnd(logic){
        this.logic = logic;
        Array.from(this.answerBox.querySelectorAll("div")).forEach(node=>node.remove());
        this.pastQuestionsContainer.remove();
        this.heading.textContent = "Quiz Over!";
        this.question.textContent = (this.logic.correctQuestions.length / Number(this.logic.quiz.numQuestions) *100) + "% Correct!";
        this.answerBox.appendChild(this.createNewQuizButton);
        this.createNewQuizButton.addEventListener("click", ()=>{
            this.createQuiz();
        });
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