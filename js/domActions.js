export default function getDomActions(){
    return new DomActions();
}

class DomActions{
    constructor(){
        this.nav = document.querySelector("nav");
        this.createContainer = document.getElementById("create-quiz-container");
        this.quizContainer = document.getElementById("quiz-container");
    }

    enableListener(){
        this.nav.addEventListener("click", (e)=>{
            if(e.target.classList.contains("quiz-link")){
                this.appendQuizForm(e.target.id);
            }
        })
    }
    appendQuizForm(mode){
        this.createContainer.textContent = mode;
    }
}