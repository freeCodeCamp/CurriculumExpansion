In this lab, you are helping debug a small online store checkout system.

The development team recently added new features to the checkout process, but they need clearer debugging information in the browser console to understand what is happening during checkout.

Your task is to use different browser console methods to log helpful information about the checkout process and observe the output.

Before starting, open your browser's developer tools by pressing `F12` (or `Ctrl + Shift + J` / `Cmd + Option + J` depending on your browser) and navigate to the **Console** tab.

1. Before logging any new information, clear the console so previous logs do not cause confusion. Use `console.clear()`.

2. Group the checkout logs together to keep the console organized. Create a collapsed console group called `"Checkout Process"` using `console.groupCollapsed()`.

3. Log the name of the user currently checking out using `console.log()`.

4. Display the `cart` array in a table format using `console.table()`.

5. Sometimes customers attempt to purchase more items than are available. If `requestedQuantity` is greater than `stock`, display a warning using `console.warn()`.

6. If the payment fails, display an error message in the console using `console.error()`.

7. After all checkout messages have been logged, close the console group using `console.groupEnd()`.