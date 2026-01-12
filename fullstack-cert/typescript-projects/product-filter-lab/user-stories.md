For this lab, you have been provided with all the HTML and CSS. You will complete a product filter using TypeScript.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should create an interface named `Item` with:
   - A `type` property that can only be `"book"`, `"electronics"`, or `"clothing"`.
   - An `id` property of type `string`.
   - A `price` property of type `number`.

1. You should create an interface named `Book` that extends `Item`. Its `type` property should be set to the literal `"book"`. It should also have `title` and `author` properties of type `string`.

1. You should create an interface named `Electronics` that extends `Item`. Its `type` property should be set to the literal `"electronics"`. It should also have , `item` and `model` properties of type `string`, and an optional `warranty` property of type `number`.

1. You should create an interface named `Clothing` that extends `Item`. Its `type` property should be set to the literal `"clothing"`. It should also have `item` and `brand` properties of type `string`, and an optional `size` property that can only be `"S"`, `"M"`, or `"L"`.

1. You should create a union type named `Product` that combines the `Book`, `Electronics`, and `Clothing` interfaces.

1. You should create a generic class named `Collection` with a type parameter `T`. The constructor should accept an array of items of type `T` and store them in a property named `items`.

1. The `Collection` class should have a `getAll()` method that returns all items in the collection.

1. The `Collection` class should have a `filter()` method that accepts a parameter named `callback` and returns only the elements from the `items` array that satisfy the given condition. `callback` should be a function that receives an `item` of type `T` and returns a `boolean`.

1. You should create a function named `renderProduct` with a parameter of type `Product`. It should return an HTML string representing a product with:
   - An element with the class `item` and an ID with the value of the product `id`.
   - An element with the class `price` and the text of the product `price`.
   - An element containing additional product information.

1. The `renderProduct` function should use type narrowing to render different HTML depending on the product type:

   - For books, the rendered HTML should have the format `Book: [title] by [author]`, where `[title]` and `[author]` should be replaced by the title and the author, respectively.
   - For electronics, the rendered HTML should have the format `Electronics: [item] - [model]`. If the product has a warranty, append ` — Warranty: [warranty] year(s)` to the format. Replace `[item]`, `[model]`, and `[warranty]` with the item, the model, and the warranty, respectively.
   - For clothing, the rendered HTML should have the format `Clothing: [item] by [brand]`. If the product has a size, append ` — Size [size]` to the format. Replace `[item]`, `[brand]`, and `[size]` with the item, the brand, and the size, respectively.
   - If an invalid product type is encountered, throw an error with the format: `Unknown product type: [product]`, where `[product]` should be replaced by the invalid product object.

1. You should create a `Collection<Product>` instance that includes at least one item for each product type and assign the instance to a variable named `products`.

1. You should create a `showProducts` function that displays products in the `#output` element. It should accept an optional filter representing a product type; when omitted, show all products; when provided, show only products of that type.

1. You should render products by converting each product to an HTML string using the `renderProduct` function and injecting the combined result into the `#output` element.

1. Clicking the `#all`, `#books`, `#electronics`, and `#clothing` buttons should display the corresponding set of products in the `#output` element.

1. On page load, all products should be shown by default.