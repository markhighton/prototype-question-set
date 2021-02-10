export interface ISpecifcation<T> {
    
    isSatisfiedBy(entity: T): boolean;
    and(other: ISpecifcation<T>) : AndSpecification<T>;
    not(): NotSpecification<T>;

}

export abstract class AbstractSpecification<T> implements ISpecifcation<T> {
    public abstract isSatisfiedBy(entity: T): boolean;
  
    public and(other: ISpecifcation<T>) : AndSpecification<T> {
      return new AndSpecification(this, other);
    }
  
    public not(): NotSpecification<T> {
      return new NotSpecification(this);
    }
  }
  
 export class AndSpecification<T> extends AbstractSpecification<T> {
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
  
 export class NotSpecification<T> extends AbstractSpecification<T> {
    private wrapped: ISpecifcation<T>;
  
    public constructor(wrapped: ISpecifcation<T>) {
      super();
      this.wrapped = wrapped;
    }
  
    public isSatisfiedBy(candidate: T) {
      return !this.wrapped.isSatisfiedBy(candidate);
    }
  }