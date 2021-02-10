class QuestionCollectionBuilder {

    private _root: QuestionEntity;
    private _current: QuestionEntity;

    constructor() {
        this._root = QuestionEntity.Create("", "", []);
        this._current = this._root;
    }

    public AddQuestion(text: string, type: string, options: Array<string>): QuestionCollectionBuilder {
        let question = QuestionEntity.Create(text, type, options);
        this._current.AddSubQuestion(question);
        return this;
    }

    public AddSubQuestion(text: string, type: string, options: Array<string>): QuestionCollectionBuilder {
        let question = QuestionEntity.Create(text, type, options);
        this._root.AddSubQuestion(question);
        this._current = question;
        return this;
    }

    public Build(): QuestionEntity {
        return this._root;
    }

}
