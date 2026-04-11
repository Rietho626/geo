import getGeneralSettings  from "./settings/generalSettings.js";
import getCapitalSettings from "./settings/capitalSettings.js";
import getFlagSettings from "./settings/flagSettings.js";
import getAreaSettings from "./settings/areaSettings.js";
import getPopulationSettings from "./settings/populationSettings.js";

export default function getSettingsHandler(){
    return new SettingsHandler();
}

class SettingsHandler{
    constructor(){
        this.nav = document.querySelector("nav");
        this.createContainer = document.getElementById("create-quiz-container");
        this.form = document.getElementById("create-form")
    }

    enableListener(cb){
        this.nav.addEventListener("click", (e)=>{
            if(e.target.classList.contains("quiz-link")){
                Array.from(document.querySelectorAll("tbody > *"))
                    .forEach(node=>node.remove());
                this.configureSettings(e.target.id);
                this.form.addEventListener("submit", (e)=>{
                    this.createContainer.style.display = "none";
                    cb(this.processForm(e))
                });
            }
        })
    }

    createNode(type, attributes = [["class", "gneralContainer"]]){
        const node = document.createElement(type);
        attributes.forEach(attr=>node.setAttribute(attr[0], attr[1]));
        return node;
    }
    configureSettings(topic){
        const settings = SettingsHandler.getSettings("general", topic).concat(SettingsHandler.getSettings(topic)).concat(getSubmitButton(topic));
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

    processForm(e){
        e.preventDefault();
        const settings = {};
        const topic = document.querySelector("input[type=submit]").name;
        const nodes = Array.from(document.querySelectorAll("select."+topic+"-input")).concat(Array.from(document.querySelectorAll("input."+topic+"-input")));
        nodes.forEach(node=>settings[node.name] = node.value);
        settings["topic"] = topic;
        console.log(settings);
        return settings;
    }

    static continentSettingsCb(e){
        if(e.target.classList.contains("continent")){
            const continentInput = document.getElementById("continents-input");
            const cnt = document.getElementById(e.target.id);
            if(cnt.classList.contains("off")){
                continentInput.value += e.target.id;
                cnt.classList.remove("off");
                cnt.classList.add("on");
            }else{
                continentInput.value = continentInput.value.replaceAll(e.target.id, "");
                cnt.classList.remove("on");
                cnt.classList.add("off");
            }
        }
    }

    static showValueCbRange(){
        document.getElementById("num-questions-show").textContent = document.getElementById("num-questions").value;
    }
    
    static getSettings(topic, replaceGeneral = ""){
        switch(topic){
            case "general":
            return getGeneralSettings(replaceGeneral, SettingsHandler)
            case "capital":
            return getCapitalSettings(SettingsHandler);
            case "flag":
            return getFlagSettings(SettingsHandler);
            case "area":
            console.log(getAreaSettings(SettingsHandler));
            break;
            case "population":
            return getPopulationSettings(SettingsHandler);
        }
    }

    static enableMultipleChoiceCb(){
        //maybe
    }
}


function getSubmitButton(topic){
    return [{
        type: "input",
        attributes: [
            ["type", "submit"],
            ["class", topic+"-input"],
            ["name", topic],
            ["id", "submit-"+topic+"-quiz"],
            ["value", `Create ${topic[0].toUpperCase()+topic.slice(1)} Quiz`]
        ],
        text_content: false,
        listener: false,
        siblings: false,
        children: false
    }]
}

