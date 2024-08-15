1. You should create a variable named `currentDate` and assign it the current date and time using the `Date` object.
1. You should create a function named `formatDateMMDDYYYY` that takes a parameter. You can name this parameter whatever you like.
1. The function should use `getMonth`, `getDate`, and `getFullYear` methods to construct the date string. You will need to add 1 to the month method.
1. You should create a function named `formatDateLong` that takes a parameter. You can name this parameter whatever you like.
1. Your `formatDateLong` function should return a string that uses the `toLocaleDateString` method to format the date in a `Month Day, Year` format. Remember that the `toLocaleDateString` method accepts `locales` and `options` parameters. (Ex `toLocaleDateString(locales, options)`) For the `locales`, you can pass in `undefined` and for the `options` parameter, you can pass in an object like you learned about in the lecture videos.
1. You should print the current date and the results of the above functions to the console.
