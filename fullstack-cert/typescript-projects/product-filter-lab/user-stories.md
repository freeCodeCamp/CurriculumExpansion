For this lab, you have been provided with all the HTML and CSS. You will complete a product filter using TypeScript.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should create an interface named `Book` with a `type` property set to the literal `"book"`, and `title` and `author` properties of type `string`.

1. You should create an interface named `Electronics` with a `type` property set to the literal `"electronics"`, a `model` property of type `string`, and a `warranty` property of type `number`.

1. You should create an interface named `Clothing` with a `type` property set to the literal `"clothing"`, a `brand` property of type `string`, and a `size` property that can only be `"S"`, `"M"`, or `"L"`.

1. You should create a union type named `Product` that combines the `Book`, `Electronics`, and `Clothing` interfaces.

1. You should create a generic class named `Collection` with a type parameter `T`. The constructor should accept an array of items of type `T` and store them in a property named `items`.

1. The `Collection` class should have a `getAll()` method that returns all items in the collection.

1. The `Collection` class should have a `filter()` method that accepts a parameter named `callback` and returns only the elements from the `items` array that satisfy the given condition. `callback` should be a function that receives an `item` of type `T` and returns a `boolean`.

1. You should create a function named `renderProduct` with a parameter of type `Product` that returns a string representing an element with the class `item` containing the formatted product information.

1. The `renderProduct` function should use type narrowing to render different HTML for each product type:

   - For books, the rendered HTML should have the format `Book: [title] by [author]`, where `[title]` and `[author]` should be replaced by the title and the author, respectively.
   - For electronics, the rendered HTML should have the format `Electronics: [model] — Warranty: [warranty] year(s)`, where `[model]` and `[warranty]` should be replaced by the model and the warranty value, respectively.
   - For clothing, the rendered HTML should have the format `Clothing: [brand] — Size [size]`, where `[brand]` and `[size]` should be replaced by the brand and the size, respectively.
   - If an invalid product type is encountered, throw an error with the format: `Unknown product type: [product]`, where `[product]` should be replaced by the invalid product object.

1. You should create a `Collection<Product>` instance that includes at least one item for each product type and assign the instance to a variable named `products`.

1. You should create a `showProducts` function that displays products in the `#output` element. It should accept an optional filter representing a product type; when omitted, show all products; when provided, show only products of that type.

1. You should render products by converting each product to an HTML string using the `renderProduct` function and injecting the combined result into the `#output` element.

1. Clicking the `#all`, `#books`, `#electronics`, and `#clothing` buttons should display the corresponding set of products in the `#output` element.

1. On page load, all products should be shown by default.