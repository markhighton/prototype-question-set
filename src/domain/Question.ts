abstract class QuestionEntity {
    public Text: string;
    public Type: string;
    public Options: Array<string>
    public SubQuestions: Array<QuestionEntity>

    constructor(text: string, type: string, options: Array<string>) {
        this.Text = text;
        this.Type = type;
        this.Options = options;
    }

    public AddSubQuestion(question: QuestionEntity) {
        this.SubQuestions.push(question);
    }

    public static Create(text: string, type: string, options: Array<string>): QuestionEntity {
        if(type === "FreeText")
            return new FreeTextQuestion(text, type, options);
        if(type === "MultiSelect")
            return new MultiSelectQuestion(text, type, options);

        return new FreeTextQuestion(text, type, options)
    }
}

class FreeTextQuestion extends QuestionEntity {
}

class MultiSelectQuestion extends QuestionEntity {
}

