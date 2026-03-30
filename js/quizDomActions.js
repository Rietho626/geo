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
    startingScreen(quiz){
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
            return string + (string) ? ", " : "" + this.lang.continents[continent];
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
            "south-america": "Sourth America",
            africa: "Africa",
            oceania: "Oceania"
        }
    }
}