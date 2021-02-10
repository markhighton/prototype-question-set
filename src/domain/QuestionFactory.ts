import QuestionEntity from "./Question";
import FreeTextQuestion from "./questions/FreeTextQuestion";
import MultiSelectQuestion from "./questions/MultiSelectQuestion";
import QuestionCollectionBuilder from "../domain/QuestionCollectionBuilder";

export default class QuestionFactory {

    public static CompanyName: QuestionEntity = new FreeTextQuestion("What is your company name?", "FreeText", [""]);
    public static EmployeeCount: QuestionEntity = new MultiSelectQuestion("No. of Employees is fewer than 250 FTE", "MultiSelect", ["0-50", "50-250", "500-10000"]);
    public static Sector: QuestionEntity = new MultiSelectQuestion("Sector is eligible for ERDF support", "MultiSelect", ["ERDF", "Non-ERDF"]);
    public static Turnover: QuestionEntity = new MultiSelectQuestion("Turnover (less than €50m) OR Balance Sheet (less than €43m", "MultiSelect", ["Less than 10000", "Less than 1000000", "Less than 10000000"]);

    // Option 1: Normal list of questions
    public static CreateTriageQuestions(): Array<QuestionEntity> {
        return [this.CompanyName, this.EmployeeCount, this.Sector, this.Turnover];
    };

    // Option 2: Composite list of questions
    public static CreateHierarchyOfTriageQuestions(): QuestionEntity {
        let questionCollectionBuilder = new QuestionCollectionBuilder("Triage Questions")
        questionCollectionBuilder
            .AddSubQuestion("What is your company name?", "FreeText", [""])
            .AddQuestion("No. of Employees is fewer than 250 FTE", "MultiSelect", ["0-50", "50-250", "500-10000"])
            .AddSubQuestion("Sector is eligible for ERDF support", "MultiSelect", ["ERDF", "Non-ERDF"])
            .AddQuestion("Turnover (less than €50m) OR Balance Sheet (less than €43m", "MultiSelect", ["Less than 10000", "Less than 1000000", "Less than 10000000"]);
        return questionCollectionBuilder.Build();;
    }

}
