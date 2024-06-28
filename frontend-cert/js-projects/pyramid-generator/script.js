// teach these different variable types.
const symbol = "#"
const count = 8;
const rows = [];
// Remove this after #1 is done.
let done = 0;
// Add this only during #3
// note that this should be a const, but our tests need it to be a let :3
let inverted = true;

// This function will be built during the first loop.
// Explain scoping of `count` variable here.
// Then explain "variable shadowing"? Might be too complex. Will consider.
// teaching parameters here
function padRow(rowNumber, count) {
    // teach concatenation
    // then review replacing "#" with the symbol variable
    // return " ".repeat(count - rowNumber) + "#".repeat(rowNumber * 2 - 1) + " ".repeat(count - rowNumber);
    // template literals AFTER #2 is done
    return `${" ".repeat(count - rowNumber)}${symbol.repeat(rowNumber * 2 - 1)}${" ".repeat(count - rowNumber)}`
};

// real quick, let's learn a couple of array methods
// const array = ["Naomi", "Quincy", "CamperChan"];
// const pop = array.pop();
// console.log(pop);
// console.log(array);
// const push = array.push(pop);
// console.log(push);
// console.log(array);

// This loop teaches basic loop syntax, +=, ++, +
// for (let i = 0; i < count; /*i = i + 1, i+=1,*/ i++) {
// great opportunity to teach off by one errors
// also, we teach arguments here.
//   rows.push(padRow(i + 1, count))
// then refactor to initialise i to 1.
// }
// console.log(rows);

// quick b

// Let's do a while loop, first demonstrating true and false
// declare this variable at top
// let continueLoop = true;
// while (continueLoop) {
//   done++;
//   rows.push(padRow(done, count));
//   if (done === count) {
//     continueLoop = false;
//   }
// }

// break away from the loop stuff to do a quick demo on true vs "true";
// const testVariable = true;
// const testVariable = "true";
// const testVariable = false;
// const testVariable = "false";
// if (testVariable) {
//     console.log("I'm true!")
// }

// Refactor to show that condition can go directly in loop, no need for variables
// while (done < count) {
// improve condition to remove done variable too -- #1
// while (rows.length < count) {
//     rows.push(padRow(rows.length, count))
// }

// What if we do an UPSIDE-DOWN pyramid wowie zowie!
// for (let i = count; i > 0; /* woah it's a decrement time*/ /*i = i - 1, i -= 1*/ i--) {
//     rows.push(padRow(i, count));
// }

// New array methods!
// const array = ["Naomi", "Quincy", "CamperChan"];
// const shift = array.shift();
// console.log(shift);
// console.log(array);
// const unshift = array.unshift(shift);
// console.log(unshift);
// console.log(array);

// Kay but that loop kinda stimky - let's use our new unshift!
// for (let i = 1; i <= count; i++) {
//     rows.unshift(padRow(i, count))
// }

// WOAH what if we make a variable to toggle it???? -- #3
for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

// AFTER doing the first loop, this will be the very first next campers write
// We'll have them put something in the row array declaration just to see this work
// Gotta teach them functions
function getResult() {
    let result = "";
    // teach a for-of loop because they're neat
    for (const row of rows) {
        // refactor into template literal -- #2
        result += row + "\n";
    }
    // teach return keyword
    // This is really just going to be here so we can consume the console output in the tests
    return result;
}

// Teach them how functions are called without arguments
// getResult();

// Oh no, nothing happens! What if we *use* that return value?
// const string = getResult();
// console.log(string);

// Cool, did you know we can pass the call directly?
// console.log(getResult);
// Oh no! That broke. Because we didn't *call* it oopsie.
console.log(getResult());