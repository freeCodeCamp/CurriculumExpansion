# User Stories

1. You should have an element with an `id` called `shopping-cart-container`.
2. Your `#shopping-cart-container` element should use the correct utility class for setting the element to a Flexbox layout.
3. Your `#shopping-cart-container` element should set the direction of flex items to column for smaller devices and row for larger devices. Remember that Tailwind CSS utilizes the mobile first approach and you will use the `lg` breakpoint prefix to target larger devices.
4. Inside your `#shopping-cart-container` element, you should have an element with an `id` called `products-container`.
5. Your `#products-container` element, should have at least two child elements each with a class called `card`.
6. Each `.card` element should have the following elements nested inside:
   - An `h2` element with text representing the product name and a utility class of your choosing that sets the font size.
   - An element with a class called `quantity` and text for the number of cart items for that product.
   - An element with a class called `price` and text for the price.
   - A link with a class called `remove-link` and the link text of `Remove`. Your link should have utility classes for red text or your choosing and an underline. The `href` value should be set to `#`.
7. Inside your `#shopping-cart-container` element, you should have an element with an `id` called `order-summary-container`.
8. Your `#order-summary-container` element should have the following styles:
   - A utility class of your choosing for rounded corners.
   - A utility class of your choosing for setting the border width.
9. Your `#order-summary-container` element should have the following elements nested inside:
   - An `h2` element with the text `Order Summary` and a utility class of your choosing that sets the font size.
   - An element with the text `Total:` and `id` set to `total`. This element should also use a utility classes to set the font weight and size of your choosing for the element.
   - An element to display the total for all items in the cart.
   - A link with the text `Checkout` and the correct utility class for centering the text. The `href` value should be set to `#`.
