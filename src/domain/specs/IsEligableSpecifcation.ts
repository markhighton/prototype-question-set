class IsEligableSpecification extends AbstractSpecification<QuestionEntity[]> {

    // Eligability logic to determine if eligable (DRY and SRP enforced here) - this lifts the domain logic from question entities and places
    // in one source of truth that can be reused
    public isSatisfiedBy(entity: QuestionEntity[]): boolean {

        
        return true;
    }
    
}

export default IsEligableSpecification;