
// task 1: create a kids menu with one item
let kidsMeal = ["Chicken Nuggets"];

// task 2: create an adults menu with one item
let adultsMeal = ["Salad"];

// task 3: add three more items to kids menu
kidsMeal.push("Pizza", "Burgers", "Tacos");

// task 4: add three more items to adults menu
adultsMeal.push("Wraps", "Hummus", "Rice");

// task: print both menus
console.log("Kids Menu:", kidsMeal);
console.log("Adults Menu:", adultsMeal);

// task 5: remove last item from kidsMeal using pop()
kidsMeal.pop();

// task 6: remove first item from adultsMeal using shift()
adultsMeal.shift();

// print both menus after removing items
console.log("Kids Menu After Removing Items: ", kidsMeal);
console.log("Adults Menu After Removing Items:", adultsMeal);

// task 7: create a random index for kidsMeal and adultsMeal
let randomIndexKids = Math.floor(Math.random() * kidsMeal.length);
let randomIndexAdults = Math.floor(Math.random() * adultsMeal.length);

// task 8: print a random item from each menu
console.log("Today kids should eat:", kidsMeal[randomIndexKids]);
console.log("Today adults should eat:", adultsMeal[randomIndexAdults]);
