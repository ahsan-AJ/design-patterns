# Builder Pattern

Seperate the construction of a complex objects from its representation 
so that the same construction process can create different representations

## Anti Pattern: Telescoping Constructor  
Whenever we have a constructor with too many arguments 
it becomes difficult to keep them in check;

To overcome this anti-pattern we can use builder pattern, that is, by building a Builder class with 
methods that will set the values of the Original class's constructor so that the developer can have an idea of what to set for each constructor parameter of the object.