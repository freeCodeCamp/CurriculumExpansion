1. You should create a variable named `currentDate` and assign it the current date and time using the `Date` object.
1. You should create a function named `formatDateMMDDYYYY` that takes a parameter. You can name this parameter whatever you like.
1. The function should use `getMonth`, `getDate`, and `getFullYear` methods to construct the date string. You will need to add 1 to the month method.
1. You should create a variable named `shortDateFormat` that holds the string `Formatted Date (MM/DD/YYYY): [formatted date]`. Replace `[formatted date]` with the result of calling your `formatDateMMDDYYYY` function with the `currentDate` variable.
1. You should create a function named `formatDateLong` that takes a parameter. You can name this parameter whatever you like.
1. Your `formatDateLong` function should return a string that uses the `toLocaleDateString` method to format the date in a `Month Day, Year` format. Remember that the `toLocaleDateString` method accepts `locales` and `options` parameters. (Ex `toLocaleDateString(locales, options)`) For the `locales`, you can pass in `undefined` and for the `options` parameter, you can pass in an object like you learned about in the lecture videos.
1. You should create a variable named `longDateFormat` that holds the string `Formatted Date (Month Day, Year): [formatted date]`. Replace `[formatted date]` with the result of calling your `formatDateLong` function with the `currentDate` variable.
1. You should log the value of current date, `shortDateFormat` and `longDateFormat` to the console.
