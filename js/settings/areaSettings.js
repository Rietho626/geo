export default function getAreaSettings(SettingsHandler){
    return  [
        {
            type: "select",
            attributes: [
                ["class", "area-input"],
                ["id", "area-quiz-q-type"],
                ["name", "quiz-q-type"]
            ],
            text_content: false,
            listener: false,
            siblings: [
                {
                    type: "label",
                    attributes: [
                        ["class", "input-label"],
                        ["for", "area-quiz-q-type"]
                    ],
                    text_content: "Choose Quiz Questions Type",
                    listener: false,
                    siblings: false,
                    children: false
                }
            ],
            children: [
                {
                    type: "option",
                    attributes: [
                        ["class", "area-input"],
                        ["id", "country-area-q-type"],
                        ["value", "country-area"],
                        ["selected", "true"]
                    ],
                    text_content: "Country -> Area",
                    listener: false,
                    siblings: false,
                    children: false
                },
                {
                    type: "option",
                    attributes: [
                        ["class", "area-input"],
                        ["id", "area-country-q-type"],
                        ["value", "area-country"]
                    ],
                    text_content: "Area -> Country",
                    listener: false,
                    siblings: false,
                    children: false
                },
                {
                    type: "option",
                    attributes: [
                        ["class", "area-input"],
                        ["id", "area-mixed-q-type"],
                        ["value", "mixed"]
                    ],
                    text_content: "Mixed Questions",
                    listener: false,
                    siblings: false,
                    children: false
                }
            ]
        },
        {
            type: "select",
            attributes: [
                ["class", "area-input"],
                ["id", "area-quiz-mode"],
                ["name", "quiz-mode"]
            ],
            text_content: false,
            listener: ["change", SettingsHandler.enableMultipleChoiceCb],
            siblings: [
                {
                    type: "label",
                    attributes: [
                        ["class", "input-label"],
                        ["for", "area-quiz-mode"]
                    ],
                    text_content: "Choose Quiz Mode",
                    listener: false,
                    siblings: false,
                    children: false
                }
            ],
            children: [
                {
                    type: "option",
                    attributes: [
                        ["class", "area-input"],
                        ["id", "multiple-choice-mode"],
                        ["value", "multiple-choice"],
                        ["selected", "true"]
                    ],
                    text_content: "Multiple Choice",
                    listener: false,
                    siblings: false,
                    children: false
                },
                {
                    type: "option",
                    attributes: [
                        ["class", "area-input"],
                        ["id", "search-mode"],
                        ["value", "search-mode"]
                    ],
                    text_content: "Search Mode",
                    listener: false,
                    siblings: false,
                    children: false
                },
                {
                    type: "option",
                    attributes: [
                        ["class", "area-input"],
                        ["id", "type-in-mode"],
                        ["value", "type-in-mode"]
                    ],
                    text_content: "Type-in Mode",
                    listener: false,
                    siblings: false,
                    children: false
                }
            ]
        },
        
    ];
}

