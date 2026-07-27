// This will be a workshop for the Loops section, probably after the "Build a Profile Lookup" lab. Probably around 28 steps.

// The "guild" object could be already provided to skip unnecessary padding, or created in 1 or more steps (creating "guild" object and adding the first "guild member" entry - rest of the "guild members" can be filled out somewhere between the next steps to avoid too much repetition).

let guild = {
  ethan: {
    gold: 31,
    reputation: 9,
  },
  elara: {
    gold: 78,
    reputation: 12,
  },
  brandon: {
    gold: 41,
    reputation: 7,
  },
  dylan: {
    gold: 81,
    reputation: 20,
  },
};

// 'listMembers()' introduces 'Object.keys()' static method, and provides a list of current members of the guild. It can be broken down into 3 steps:
//  1. create a function, and a function call below it,
//  2. add `console.log` and a `members` variable, assign Object.keys() to the variable,
//  3. explain the 'Object.keys()' method, add the for(...of) loop inside the function. Inside the `for` loop, log the loop iterator.

function listMembers(guildObject) {
  console.log("Current Guild Members:");

  const members = Object.keys(guildObject);

  for (const member of members) {
    console.log(member);
  }
}

listMembers(guild);

console.log("");

// `countMembers` can emphasize that `Object.keys` returns an array, properties of which can be accessed the same way as any other array. It can take 2 steps:
//  1. log an empty string to the console to space out the output, create a new function returning the keys array length,
//  2. log the function's output with a string literal, log an empty string for spacing.

function countMembers(guildObject) {
  return Object.keys(guildObject).length;
}

console.log(`Guild Members: ${countMembers(guild)}`);

console.log("");

// 'listGold()' introduces `Object.entries() method.
//  1. create the function, log 'Gold Totals:', call the function and log the empty string,
//  2. explain the 'Object.entries()` method, and assign 'Object.entries()' output to a variable,
//  3. create 'for()' loop with destructured 'memberEntries' (show an example of destructuring arrays as a refresher?),
//  4. inside the loop, add a console.log with a template literal to log each stat.

function listGold(guildObject) {
  console.log("Gold Totals:");

  const memberEntries = Object.entries(guildObject);

  for (const [name, stats] of memberEntries) {
    console.log(`${name}: ${stats.gold} gold`);
  }
}

listGold(guild);

console.log("");

// 'getTotalGold()' introduces 'Object.values()' method:
//  1. create a function, log the function and an empty string to the console,
//  2. create `totalGold` variable, and an empty `for(...of)` loop iterating over the values of `guildObject`,
//  3. explain Object.values returning an array of values with an example, create a `for(...of) loop iterating over `guildObject`'s values,
//  4. add member.gold to totalGold on each iteration, return `totalGold`.


function getTotalGold(guildObject) {
  let totalGold = 0;

  for (const member of Object.values(guildObject)) {
    totalGold += member.gold;
  }

  return totalGold;
}

console.log(`Total gold: ${getTotalGold(guild)}`);

console.log("");

// `getRichestMember` can be 4 or 5 steps, depending on how the workshop's pacing turns out:
//  1. explain the function's purpose, create the `getRichestMember` function, and `console.log`s with function call and an empty string,
//  2. create `richestName` and `highestGold` variables and the return statement,
//  3. create a `for(...of)` loop iterating over object's entries,
//  4. explain the purpose of `if` statement inside the loop, create the statement and the statement's body (alternatively, break down the statement and statement's body creation into 2 steps).

function getRichestMember(guildObject) {
  let richestName = "";
  let highestGold = 0;

  for (const [name, stats] of Object.entries(guildObject)) {
    if (stats.gold > highestGold) {
      highestGold = stats.gold;
      richestName = name;
    }
  }

  return richestName;
}

console.log(`Richest Member: ${getRichestMember(guild)}`);

console.log("");

// Since `listVeterans` and `getRichestMember` are built similarly (for loop + if statement), this will probably have very similar list of instructions (around 3 steps):
//  1. explain the purpose of `listVeterans` function, create a function, function call and log an empty string,
//  2. add a console.log statement and for loop inside the function,
//  3. create the if statement and log the name the if stats.reputation if passes the check.

function listVeterans(guildObject) {
  console.log("Veteran Members:");

  for (const [name, stats] of Object.entries(guildObject)) {
    if (stats.reputation >= 10) {
      console.log(name);
    }
  }
}

listVeterans(guild);

console.log("");

// `awardGold` can be 3 steps:
//  1. create the function,
//  2. add a for(...of) loop, add the specified amount to each member's gold entry,
//  3. test the `awardGold` function by calling it, and then calling `listGold` again, add an empty string for readability. 

function awardGold(guildObject, amount) {
  for (const member of Object.values(guildObject)) {
    member.gold += amount;
  }
}

awardGold(guild, 10);

console.log("After awarding 10 gold");

listGold(guild);

console.log("");

// `guildReport` can be broken down into 4 steps:
//  1. create a new function,
//  2. add the first 2 console logs with the strings,
//  3. log outputs of the 3 earlier functions using string literals,
//  4. call the `guild` report function.

function guildReport(guildObject) {
  console.log("Guild Report:");
  console.log("-------------");
  console.log(`Members: ${countMembers(guildObject)}`);
  console.log(`Total Gold: ${getTotalGold(guildObject)}`);
  console.log(`RichestMember: ${getRichestMember(guildObject)}`);
}

guildReport(guild);