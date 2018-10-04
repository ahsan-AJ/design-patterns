# Factory Pattern

Define an interface for creating an object, but let subclasses decide which class
to instantiate. Factory method lets a class defer instantiation to subclasses

Encapsulates everything we need to create a specific type of user
later on if we expand we can create different type of objects using the same method
for example : Shopper, Employee, Developer are all types of User but each have some different
attributes as well so we can create a userFactory method to encapsulates all common user 
properties from each user type Class 