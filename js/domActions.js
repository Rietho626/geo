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
                Array.from(document.querySelectorAll("tbody > *"))
                    .forEach(node=>node.remove());
                this.configureSettings(e.target.id);
            }
        })
    }

    createNode(type, attributes = [["class", "gneralContainer"]]){
        const node = document.createElement(type);
        attributes.forEach(attr=>node.setAttribute(attr[0], attr[1]));
        return node;
    }
    configureSettings(mode){
        const settings = getSettings("general", mode).concat(getSettings(mode));
        this.appendQuizForm(settings);
    }
    appendQuizForm(settings){
        settings.forEach(obj=>{
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
            if(obj.siblings){
                obj.siblings.forEach(sibling=>{
                    const sib = this.createNode(sibling.type, sibling.attributes);
                    if(sibling.text_content){
                        sib.textContent = sibling.text_content;
                    }
                    if(sibling.listener){
                        sib.addEventListener(sibling.listener[0], sibling.listener[1])
                    }
                    td.appendChild(sib);
                })
            }
            if(obj.children){
                obj.children.forEach(child=>{
                    const kind = node.appendChild(this.createNode(child.type, child.attributes));
                    if(child.text_content){
                        kind.textContent = child.text_content;
                    }
                    if(child.listener){
                        kind.addEventListener(child.listener[0], (e)=>{
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
    if(e.target.classList.contains("continent")){
       const continentInput = document.getElementById("continents-input");
        continentInput.value += e.target.id;
        document.getElementById(e.target.id).style.backgroundColor = "blue";
    }
}

function showValueCbRange(){
  document.getElementById("num-questions-show").textContent = document.getElementById("num-questions").value;
}

function getGeneralSettings(mode){
        return 
    }

function getSettings(mode, replaceGeneral = ""){
    switch(mode){
        case "general":
        return getGeneralSettings.replaceAll('"{mode}"', replaceGeneral);
        case "capitals":
        return capitalSettings;
        case "flags":
        return flagSettings;
    }
}

const getGeneralSettings = [
    {
        type: "input",
        attributes: [
            ["class", "{mode}"+"-input"],
            ["type", "range"],
            ["min", "10"],
            ["max", "50"],
            ["id", "num-questions"],
            ["name", "num-questions"]
        ],
        text_content: false,
        listener: ["change", showValueCbRange],
        siblings: [
            {
                type: "span",
                attributes: [
                    ["class", "show-value"],
                    ["id", "num-questions-show"]
                ],
                text_content: false,
                listener: false,
                children: false
            },    
            {
                type: "label",
                attributes: [
                    ["class", "input-label"],
                    ["id", "num-questions-label"],
                    ["for", "num-questions"]
                ],
                text_content: "Choose Number Of Questions",
                listener: false,
                children: false
            }
        ],
        children: false
    }, 
    {
        type: "select",
        attributes: [
            ["class", "{mode}"+"-input"],
            ["id", "time-questions"],
            ["name", "time-questions"]
        ],
        text_content: false,
        listener: false,
        siblings: [
            {
                type: "label",
                attributes: [
                    ["class", "input-label"],
                    ["id", "time-questions-label"],
                    ["for", "time-questions"]
                ],
                text_content: "Choose Time-Limit per Question",
                listener: false,
                children: false
            }
        ],
        children: [
                {
                type: "option",
                attributes: [
                    ["id", "time-no-limit"],
                    ["value", "no-limit"],
                    ["selected", "true"]
                ],
                text_content: "No Time Limit"
            },
            {
                type: "option",
                attributes: [
                    ["id", "time-limit-5"],
                    ["value", "5"],
                ],
                text_content: "5s/Question"
            },
            {
                type: "option",
                attributes: [
                    ["id", "time-limit-10"],
                    ["value", "10"],
                ],
                text_content: "10s/Qestion"
            },
            {
                type: "option",
                attributes: [
                    ["id", "time-limit-20"],
                    ["value", "20"],
                ],
                text_content: "20s/Question"
            },
            {
                type: "option",
                attributes: [
                    ["id", "time-limit-30"],
                    ["value", "30"],
                ],
                text_content: "30s/Question"
            },
            {
                type: "option",
                attributes: [
                    ["id", "time-limit-60"],
                    ["value", "60"],
                ],
                text_content: "60s/Question"
            }
        ]
    }, 
    {
        type: "input",
        attributes: [
            ["class", "{mode}"+"-input"],
            ["type", "text"],
            ["name", "continents"],
            ["disabled", "true"],
            ["placeholder", "Continents Here"],
            ["id", "continents-input"],
            ["hidden", "true"]
        ],
        text_content: false,
        listener: false,
        siblings: false,
        children: false
    },
    {
        type: "div",
        attributes: [
            ["class", "{mode}"+"-input"],
            ["id", "continent-settings"],
            ["cols", "50"],
            ["name", "continents"],
        ],
        text_content: false,
        listener: ["click",continentSettingsCb],
        siblings: [
            {
                type: "span",
                attributes: [],
                text_content: "Add Continent to Quiz (no continent = all continents)"
            }
        ],
        children: [
            {
                type: "div",
                attributes: [
                    ["class", "{mode}"+"-input continent"],
                    ["id", "europe"],
                ],
                text_content: "Europe",
                listener: false,
            },
            {
                type: "div",
                attributes: [
                    ["class", "{mode}"+"-input continent"],
                    ["id", "asia"],
                ],
                text_content: "Asia",
                listener: false,
            },
            {
                type: "div",
                attributes: [
                    ["class", "{mode}"+"-input continent"],
                    ["id", "north-america"],
                ],
                text_content: "North America",
                listener: false,
            },
            {
                type: "div",
                attributes: [
                    ["class", "{mode}"+"-input continent"],
                    ["id", "south-america"],
                ],
                text_content: "South America",
                listener: false,
            },
            {
                type: "div",
                attributes: [
                    ["class", "{mode}"+"-input continent"],
                    ["id", "africa"],
                ],
                text_content: "Africa",
                listener: false,
            },
            {
                type: "div",
                attributes: [
                    ["class", "{mode}"+"-input continent"],
                    ["id", "oceania"],
                ],
                text_content: "Ozeanien",
                listener: false,
            },
            {
                type: "div",
                attributes: [
                    ["class", "{mode}"+"-input continent"],
                    ["id", "antarctica"],
                ],
                text_content: "Antarcitca",
                listener: false,
            }
        ]
    }
];
const capitalSettings = [];
const flagSettings = []
