interface ISpecifcation<T> {
    
    isSatisfiedBy(entity: T);
    and(other: ISpecifcation<T>) : ISpecifcation<T>;
    not(): ISpecifcation<T>;

}

abstract class AbstractSpecification<T> implements ISpecifcation<T> {
    public abstract isSatisfiedBy(entity: T): boolean;
  
    public and(other) {
      return new AndSpecification(this, other);
    }
  
    public not() {
      return new NotSpecification(this);
    }
  }
  
  class AndSpecification<T> extends AbstractSpecification<T> {
    private one: ISpecifcation<T>;
    private other: ISpecifcation<T>;
  
    public constructor(one: ISpecifcation<T>, other: ISpecifcation<T>) {
      super();
      this.one = one;
      this.other = other;
    }
  
    public isSatisfiedBy(candidate: T) {
      return this.one.isSatisfiedBy(candidate) && this.other.isSatisfiedBy(candidate);
    }
  }
  
  class NotSpecification<T> extends AbstractSpecification<T> {
    private wrapped: ISpecifcation<T>;
  
    public constructor(wrapped: ISpecifcation<T>) {
      super();
      this.wrapped = wrapped;
    }
  
    public isSatisfiedBy(candidate: T) {
      return !this.wrapped.isSatisfiedBy(candidate);
    }
  }