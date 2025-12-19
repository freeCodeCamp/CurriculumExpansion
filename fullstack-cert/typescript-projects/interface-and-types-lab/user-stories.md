# User Stories
In this lab, you will build a MotoShop - electronic motorcycle market.

- You should define a `Category` type that only allows the string values `""Sport"`, `"Cruiser"` , `"Touring"`, `"Dirt"`, `"Adventure"`, `"Naked"` and `"Electric"`.
- You should define `Motorcycle` type or interface that includes the following required properties:
 `id`, `name`, `manufacturer`, `category`, `price`, `image_url`, `description`, `year`, `engine_cc`, `created_at`.
  - The `category` property should use the `Category` type.
- You should create a function named `fetchMotorcycles` that returns a `Promise` resolving to an array of `Motorcycle` objects.

- The `fetchMotorcycles` function should load motorcycle data from the following URL:  
  `https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json`

- The `fetchMotorcycles` function should ensure the returned value is typed as `Motorcycle[]`. Each Motorcycle should be sorted
  by `created_at` in ascending order.

- You should create a function named `renderMotorcycleCard` that takes a single `Motorcycle` object as a parameter and returns a string containing the HTML that contains a formatted HTML string for the motorcycle card.
  - Each motorcycle card component should have an `img` element with a valid image and have the id of `motorcycle-card-image`.

  - Each motorcycle card component should have an element with an id of `year-badge` listing the year in plain text.

  - Each motorcycle card component should have an element with an id of `motorcycle-name` containing the name of the motorcycle.

  - Each motorcycle card component should have an element with an id of `motorcycle-manufacturer` containing a description of the  motorcycle.

  - Each motorcycle card component should have an element with an id of `engine` and list the engine.

- You should create a function named `renderMotorcycleGrid` that takes an array of `Motorcycle` objects and renders the equivalent motorcycle card component inside the element with id `motorcycle-grid`.

- The `Motorcycle` elements inside of the grid can be filtered by name using an element with an id of `filter`. 

- The number of `Motorcycle` elements that are displayed should be listed inside of an element with an id of `results-number`.