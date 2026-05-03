import updateLang from "./updateLang.js";

const settingsLink = document.getElementById("theme-settings");
const settingsUl = document.getElementById("settings-ul");
const themesUl = document.getElementById("themes-ul");
const languagesUl = document.getElementById("languages-ul");
const expandTopics = document.getElementById("expand-topics");
const navUl = document.querySelector("#cover > ul");
const settings = document.getElementById("settings");
settingsLink.href = "./css/" + (localStorage.getItem("theme") || "baseTheme.css")


function settingsListener(e, languagePack){
    if(e.target.id === "settings-button"){
        settingsUl.classList.toggle("invisible");
    }else if(e.target.id === "themes-button"){
        themesUl.classList.toggle("invisible");
    }else if(e.target.id === "languages-button"){
        languagesUl.classList.toggle("invisible");
    }else if(e.target.id.endsWith("-theme")){
        activateTheme(e.target.id.split("-")[0]);
        settingsUl.classList.toggle("invisible");
        themesUl.classList.toggle("invisible");
    }else if(e.target.id.startsWith("lang-")){
        updateLang(languagePack, (languages.get(e.target.id) ?? "english"));
        settingsUl.classList.toggle("invisible");
        languagesUl.classList.toggle("invisible");
    }
}

function topicsListener(e){
    navUl.classList.toggle("covered");
}

function bodyListener(e){
    if(!e.target.closest("#topics-ul") && e.target.id != "expand-topics" ){
        navUl.classList.add("covered");
    }
    if(!e.target.closest("#settings-ul") && e.target.id != "settings-button"){
        settingsUl.classList.add("invisible");
    }
}

function activateTheme(theme){
    settingsLink.href = "./css/" + themes.get(theme);
    localStorage.setItem("theme", themes.get(theme));
}

const themes = new Map([
    ["base", "baseTheme.css"],
    ["sunset", "sunsetTheme.css"]
])

const languages = new Map([
    ["lang-en", "english"],
    ["lang-de", "german"]
])

export default function applyMenuListeners(languagePack){
    settings.addEventListener("click", (e)=>{
        settingsListener(e, languagePack);
    })
    expandTopics.addEventListener("click", topicsListener);
    document.body.addEventListener("click", bodyListener);
}