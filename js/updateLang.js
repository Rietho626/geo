
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
   
    dynamicIdTc = [
        {
            id: "num-questions-label",
            tc: pack.startingScreen.numQuestionsContainer
        },
        {
            id: "time-questions-label",
            tc: pack.startingScreen.timeLimitContainer
        },
        {
            id: "time-no-limit",
            tc: pack.startingScreen.noTimeLimit
        },
        {
            id: "time-limit-5",
            tc: "5s/"+pack.general.question
        },
        {
            id: "time-limit-10",
            tc: "10s/"+pack.general.question
        },
          {
            id: "time-limit-20",
            tc: "20s/"+pack.general.question
        },
          {
            id: "time-limit-30",
            tc: "30s/"+pack.general.question
        },
          {
            id: "time-limit-60",
            tc: "60s/"+pack.general.question
        },
          {
            id: "europe",
            tc: pack.continents.europe
        },
          {
            id: "asia",
            tc: pack.continents.aisa
        },
          {
            id: "north-america",
            tc: pack.continents["north-america"]
        },
          {
            id: "south-america",
            tc: pack.continents["south-america"]
        },
          {
            id: "africa",
            tc: pack.continents.africa
        },
          {
            id: "oceania",
            tc: pack.continents.ocania
        },
        {
            id: "continent-container",
            tc: pack.startingScreen.continentContainer
        },
         {
            id: "q-Type-container",
            tc: pack.startingScreen.questionTypeContainer
        },
        {
            id: "q-mode-container",
            tc: pack.startingScreen.questionModeContainer
        },
        {
            id: "multiple-choice-mode",
            tc: pack.startingScreen.questionTypeContainer
        },
        {
            id: "type-in-mode",
            tc: pack.startingScreen.questionTypeContainer
        },
        {
            id: "country-area-q-type",
            tc: pack.general.countryCapital + " -> " + pack.general.areaCapital
        },
        {
            id: "area-country-q-type",
            tc: pack.general.areaCapital + " -> " + pack.general.countryCapital
        },
        {
            id: "area-mixed-q-type",
            tc: pack.startingScreen.mixedQuestions
        },
        {
            id: "country-capital-q-type",
            tc: pack.general.countryCapital + " -> " + pack.general.capitalCapital
        },
        {
            id: "capital-country-q-type",
            tc: pack.general.capitalCapital + " -> " + pack.general.countryCapital
        },
        {
            id: "capital-mixed-q-type",
            tc: pack.startingScreen.mixedQuestions
        },
        {
            id: "country-flag-q-type",
            tc: pack.general.countryCapital + " -> " + pack.general.flagCapital
        },
        {
            id: "flag-country-q-type",
            tc: pack.general.flagCapital + " -> " + pack.general.countryCapital
        },
        {
            id: "flag-mixed-q-type",
            tc: pack.startingScreen.mixedQuestions
        },
        {
            id: "country-population-q-type",
            tc: pack.general.countryCapital + " -> " + pack.general.poplationCapital
        },
        {
            id: "population-country-q-type",
            tc: pack.general.populationCapital + " -> " + pack.general.countryCapital
        },
        {
            id: "population-mixed-q-type",
            tc: pack.startingScreen.mixedQuestions
        },
    ]

    dynamicIdTc.forEach(el=>{
        const node = document.getElementById(el.id);
        if(node) node.textContent = el.tc;
    })
    
}