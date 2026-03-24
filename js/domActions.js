export default function getDomActions(){
    return new DomActions();
}


class DomActions{
    constructor(){
        this.nav = document.querySelector("nav");
        this.createContainer = document.getElementById("create-quiz-container");
        this.quizContainer = document.getElementById("quiz-container");
        this.form = document.getElementById("create-form")
    }

    enableListener(){
        this.nav.addEventListener("click", (e)=>{
            if(e.target.classList.contains("quiz-link")){
                this.appendQuizForm(e.target.id);
            }
        })
    }

    createNode(type, attributes = [["class", "gneralContainer"]]){
        const node = document.createElement(type);
        attributes.forEach(attr=>node.setAttribute(attr[0], attr[1]));
        return node;
    }

    appendQuizForm(mode){
        const generalSettings = getGeneralSettings(mode);
        generalSettings.forEach(obj=>{
            const td = this.createNode("td");
            const tr = this.createNode("tr");
            const node = this.createNode(obj.type, obj.attributes);
            if(obj.text_content){
                node.textContent = obj.text_content;
            }
            this.form.querySelector("tbody")
                .appendChild(tr)
                .appendChild(td)
                .appendChild(node);
            if(obj.children){
                obj.children.forEach(child=>{
                    const child = node.appendChild(this.createNode(child.type, child.attributes));
                    if(child.listener){
                        child.addEventListener(child.listener[0], (e)=>{
                            child.listener[1](e);
                        })
                    }
                })
            }
            if(obj.listener){
                node.addEventListener(obj.listener[0], (e)=>{
                    obj.listener[1](e);
                })
            }
        })
    }


    
}

function continentSettingsCb(e){

}

function getGeneralSettings(mode){
        return [
            {
                type: "input",
                attributes: [
                    ["class", mode+"-input"],
                    ["type", "range"],
                    ["min", "10"],
                    ["max", "50"],
                    ["id", "num-questions"],
                    ["name", "num-questions"]
                ],
                text_content: false,
                listener: false,
                children: false
            },
            {
                type: "textarea",
                attributes: [
                    ["class", mode+"-input"],
                    ["rows", "1"],
                    ["cols", "50"],
                    ["name", "continents"],
                    ["disabled", "true"],
                    ["placeholder", "Continents Here"]
                ],
                text_content: false,
                listener: false,
                children: false
            },
            {
                type: "div",
                attributes: [
                    ["class", mode+"-input"],
                    ["id", "continent-settings"],
                    ["cols", "50"],
                    ["name", "continents"],
                ],
                text_content: false,
                listener: ["click",continentSettingsCb()],
                children: [
                    {
                        type: "div",
                        attributes: [
                            ["class", mode+"-input continent"],
                            ["id", "europe"],
                        ],
                        text_content: "Europe",
                        listener: false,
                    },
                    {
                        type: "div",
                        attributes: [
                            ["class", mode+"-input continent"],
                            ["id", "asia"],
                        ],
                        text_content: "Asia",
                        listener: false,
                    },
                    {
                        type: "div",
                        attributes: [
                            ["class", mode+"-input continent"],
                            ["id", "north-america"],
                        ],
                        text_content: "North America",
                        listener: false,
                    },
                    {
                        type: "div",
                        attributes: [
                            ["class", mode+"-input continent"],
                            ["id", "south-america"],
                        ],
                        text_content: "South America",
                        listener: false,
                    },
                    {
                        type: "div",
                        attributes: [
                            ["class", mode+"-input continent"],
                            ["id", "africa"],
                        ],
                        text_content: "Africa",
                        listener: false,
                    },
                    {
                        type: "div",
                        attributes: [
                            ["class", mode+"-input continent"],
                            ["id", "oceania"],
                        ],
                        text_content: "Ozeanien",
                        listener: false,
                    },
                    {
                        type: "div",
                        attributes: [
                            ["class", mode+"-input continent"],
                            ["id", "antarctica"],
                        ],
                        text_content: "Antarcitca",
                        listener: false,
                    }
                ]
            },
        ]
    }