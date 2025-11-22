# User Stories
In this lab, you will build a MotoShop - electronic motorcycle market.

- You should define a `Category` type that only allows the string values `""Sport"`, `"Crusier"` , `"Touring"`, `"Dirt"`, `"Adventure"`, `"Naked"` and `"Electric"`. 
- You should define `Motorcycle` type or interface that includes the following required properties:
 `id`, `name`, `manufactorer`, `category`, `price`, `image_url`, `description`, `year`, `engine_cc`, `created_at`. 
- All properties of the `Motorcycle` type except `category`, should use primitive TypeScript types (`string` or `number`).
- The `category` property should use the `Category` type.
- You should create a function named `fetchMotorcycles` that returns a `Promise` resolving to an array of `Motorcycle` objects.

- The `fetchMotorcycles` function should load motorcycle data from the following URL:  
  `https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json`

- The `fetchMotorcycles` function should ensure the returned value is typed as `Motorcycle[]`.

- You should create a function named `renderMotorcycleCard` that takes a single `Motorcycle` object as a parameter and returns a string containing the HTML for that motorcycle card.

- You should create a function named `renderMotorcycleGrid` that takes an array of `Motorcycle` objects and renders them inside the element with id `motorcycle-grid`.
