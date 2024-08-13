1. You should create a variable named `currentDate` using `let` and assign it the current date and time using the `Date` object.
1. You should create a function named `formatDateMMDDYYYY` that takes a date object as a parameter and returns the date formatted as `MM/DD/YYYY`.
1. Inside the `formatDateMMDDYYYY` function, you should create variables named `month`, `day`, and `year` using `let`.
1. The `month` variable should be assigned a String value of the month from the date object using the `getMonth` method and adding 1 to the result.
1. The `day` variable should be assigned a String value of the day from the date object using the `getDate` method.
1. The `year` variable should be the date object's full year using the `getFullYear` method.
1. You should return a template literal string that uses the `month`, `day`, and `year` variables to format the date as `MM/DD/YYYY`.
1. You should create a function named `formatDateLong` that takes a date object as a parameter.
1. Inside the `formatDateLong` function, you should create a variable named `options` using `let`.
1. Assign `options` an object with a `year` property set to `numeric`, a `month` property set to `long`, and a `day` property set to `numeric`.
1. You should return a string that uses the `toLocaleDateString` method on the date object with the `options` object as an argument.
1. You should print the current date and the results of the above functions to the console.
