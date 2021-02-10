class QuestionRepository {

    public getTriageQuestionRoot(): QuestionEntity {

        let questionCollectionBuilder = new QuestionCollectionBuilder()
        questionCollectionBuilder
            .AddSubQuestion("What is your company name?", "FreeText", [""])
            .AddQuestion("No. of Employees is fewer than 250 FTE", "MultiSelect", ["0-50", "50-250", "500-10000"])
            .AddQuestion("Sector is eligible for ERDF support", "MultiSelect", ["ERDF", "Non-ERDF"])
            .AddQuestion("Turnover (less than €50m) OR Balance Sheet (less than €43m", "MultiSelect", ["Less than 10000", "Less than 1000000", "Less than 10000000"]);

        let root = QuestionEntity.Create("", "", [])
        let companyName = QuestionEntity.Create("What is your company name?", "FreeText", [""]);
        let numberOfEmployees = QuestionEntity.Create("What is your company name?", "FreeText", [""]);
        companyName.AddSubQuestion(numberOfEmployees);

        return questionCollectionBuilder.Build();;
    }
}