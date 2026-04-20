export default function getGeneralSettings(topic, SettingsHandler, lang){
   return [
        {
            type: "input",
            attributes: [
                ["class", topic+"-input"],
                ["type", "range"],
                ["min", "10"],
                ["max", "50"],
                ["id", "num-questions"],
                ["name", "num-questions"]
            ],
            text_content: false,
            listener: ["change", SettingsHandler.showValueCbRange],
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
                    text_content: lang.startingScreen.numQuestionsContainer,
                    listener: false,
                    children: false
                }
            ],
            children: false
        }, 
        {
            type: "select",
            attributes: [
                ["class", topic+"-input"],
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
                    text_content: lang.startingScreen.timeLimitContainer,
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
                    text_content: lang.startingScreen.noTimeLimit
                },
                {
                    type: "option",
                    attributes: [
                        ["id", "time-limit-5"],
                        ["value", "5"],
                    ],
                    text_content: "5s/"+lang.general.question
                },
                {
                    type: "option",
                    attributes: [
                        ["id", "time-limit-10"],
                        ["value", "10"],
                    ],
                    text_content: "10s/"+lang.general.question
                },
                {
                    type: "option",
                    attributes: [
                        ["id", "time-limit-20"],
                        ["value", "20"],
                    ],
                    text_content: "20s/"+lang.general.question
                },
                {
                    type: "option",
                    attributes: [
                        ["id", "time-limit-30"],
                        ["value", "30"],
                    ],
                    text_content: "30s/"+lang.general.question
                },
                {
                    type: "option",
                    attributes: [
                        ["id", "time-limit-60"],
                        ["value", "60"],
                    ],
                    text_content: "60s/"+lang.general.question
                }
            ]
        }, 
        {
            type: "input",
            attributes: [
                ["class", topic+"-input"],
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
                ["class", topic+"-input"],
                ["id", "continent-settings"],
                ["name", "continents"],
            ],
            text_content: false,
            listener: ["click",SettingsHandler.continentSettingsCb],
            siblings: [
                {
                    type: "span",
                    attributes: [],
                    text_content: lang.startingScreen.continentContainer
                }
            ],
            children: [
                {
                    type: "div",
                    attributes: [
                        ["class", topic+"-input continent off"],
                        ["id", "europe"],
                    ],
                    text_content: lang.continents.europe,
                    listener: false,
                },
                {
                    type: "div",
                    attributes: [
                        ["class", topic+"-input continent off"],
                        ["id", "asia"],
                    ],
                    text_content: lang.continents.asia,
                    listener: false,
                },
                {
                    type: "div",
                    attributes: [
                        ["class", topic+"-input continent off"],
                        ["id", "north-america"],
                    ],
                    text_content: lang.continents["north-america"],
                    listener: false,
                },
                {
                    type: "div",
                    attributes: [
                        ["class", topic+"-input continent off"],
                        ["id", "south-america"],
                    ],
                    text_content: lang.continents["south-america"],
                    listener: false,
                },
                {
                    type: "div",
                    attributes: [
                        ["class", topic+"-input continent off"],
                        ["id", "africa"],
                    ],
                    text_content: lang.continents.africa,
                    listener: false,
                },
                {
                    type: "div",
                    attributes: [
                        ["class", topic+"-input continent off"],
                        ["id", "oceania"],
                    ],
                    text_content: lang.continents.oceania,
                    listener: false,
                }
            ]
        }
    ];
}