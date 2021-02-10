class QuestionRepository {

    // Repo method to get the data (seperate concerns from db/api) if we need one. Looks like hard baking the 
    // questions is the most viable solution so will point to the factory instead
    public getTriageQuestions(): Array<QuestionEntity> {
        return QuestionFactory.CreateTriageQuestions();
    }
}