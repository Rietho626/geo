
export default function updateLang(languagePackFull, language){
    localStorage.setItem("langPref", language);
    const pack = languagePackFull[language];
    const idTc = [
        {
            id: "settings-button",
            tc: pack.settings.settings
        },
         {
            id: "themes-button",
            tc: pack.settings.themes
        },
         {
            id: "base-theme",
            tc: pack.settings.baseTheme
        },
         {
            id: "sunset-theme",
            tc: pack.settings.sunsetTheme
        },
         {
            id: "languages-button",
            tc: pack.settings.languages
        },
         {
            id: "lang-en",
            tc: pack.settings.english
        },
         {
            id: "lang-de",
            tc: pack.settings.german
        },
         {
            id: "flag",
            tc: pack.nav.flags
        },
         {
            id: "capital",
            tc: pack.nav.capitals
        },
         {
            id: "population",
            tc: pack.nav.population
        },
         {
            id: "area",
            tc: pack.nav.area
        },
         {
            id: "topic-desc",
            tc: pack.nav.chooseQuizTopic
        },
         {
            id: "create",
            tc: pack.main.createQuiz
        },
         {
            id: "select-above",
            tc: pack.main.chooseAboveMsg
        }

    ];
    
    idTc.forEach(el=>{
            document.getElementById(el.id).textContent = el.tc;
    })
   

    
}