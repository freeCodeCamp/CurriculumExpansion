You should define a object constant named `projectStatus` with the different project statuses you want to have such as `PENDING`, `SUCCESS`, or `FAILURE` with your preferred descriptions.

You should define a class named `ProjectIdea` with a `constructor` that takes a `title` and a `description`, both strings. The class should also have a property named `status` also of type string.

You should define a method named `updateProjectStatus` inside the `ProjectIdea` class that takes accepts a string `newStatus` as parameter and can update the project idea status.

You should define a `ProjectIdeaBoard` class with a `constructor` that accepts a string `title` and initializes an empty array named `ideas` to hold instances of the `ProjectIdea` class.

You should define a method named `pin` inside the `ProjectIdeaBoard` class that accepts an instance of the `ProjectIdea` class and pushes the given instance to the `ideas` array.

You should define a method named `unpin` inside the `ProjectIdeaBoard` class that accepts an instance of the `ProjectIdea` class and removes the given instance from the `ideas` array.

You should define a method named `count` that returns the number of project ideas in a given project idea board object.

You should define a method named `toString` that returns the name of the projects ideas, their description and status as a nicely formatted string.

You should create one or more instance of the `ProjectIdeaBoard` class.

You should create one or more instance of the `ProjectIdea` class and `pin` each of them to any one of the `ProjectIdeaBoard` instances.
