class Question {
    text: string;
    type: string;
    options: Array<string>;

    constructor(questionText: string, answerType: string, answerOptions: Array<string> )
    {
        this.text = questionText;
        this.type = answerType;
        this.options = answerOptions;
    }
}

