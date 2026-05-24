// This will be a workshop for the Loops section, probably after the "Build a Profile Lookup" lab. Probably around 32 steps.

// The "guild" object could be already provided, or created over 3 or so steps (creating "guild" object itself and adding the first "guild member" object as the first property - rest of the "guild members" can be filled out somewhere between the next steps to avoid too much repetition).
let guild = {
  ethan: {
    gold: 31,
    silver: 48,
    reputation: 9,
    experience: 198,
  },
  elara: {
    gold: 78,
    silver: 64,
    reputation: 12,
    experience: 111,
  },
  brandon: {
    gold: 41,
    silver: 7,
    reputation: 7,
    experience: 70,
  },
  dylan: {
    gold: 81,
    silver: 2,
    reputation: 20,
    experience: 220,
  },
  lucas: {
    gold: 34,
    silver: 28,
    reputation: 10,
    experience: 179,
  },
  natalie: {
    gold: 36,
    silver: 81,
    reputation: 12,
    experience: 82,
  },
};

/* NOTE:
This method seemed like a good addition before I refactored `listMembers()` - it still might be a good(?), isolated example of `Object.keys()` use, but otherwise seems slightly redundant.
*/
// 'listMemberNames()` introduces `Object.keys()` static method, and provides a list of current members of the guild. Could be 3 steps: 
//    1. create a function,
//    2. assign the array returned by the `Object.keys()` to a variable + explanation of the method,
//    3. for loop and `console.log()` methods for the name, 
function listMemberNames(guildObject) {
  console.log("Current Guild Members:");
  const guildMembers = Object.keys(guildObject);
  for (const member in guildMembers) {
    console.log(`${parseInt(member) + 1}. ${guildMembers[member]}`);
  }
}

listMemberNames(guild);

// `listMembers()` introduces `Object.values()`. Probably good for about 4 steps: 
//    1. Create a new function and add a `console.log()` with the function's description,
//    2. Create a `for()` loop, and log the `Object.values()`,
//    3. Replace the `console.log()` for the `Object.values()` with destructuring,
//    4. add the 3 `console.log()` for the member's name, value names and the destructured values
function listMembers(guildObject) {
  console.log("Guild Member's Resources:");
  for (const member in guildObject) {
    const [gold, silver, reputation, experience] = Object.values(
      guildObject[member],
    );

    console.log(`${member}:`);
    console.log("gold\tsilver\treputation\texperience");
    console.log(`${gold}\t${silver}\t${reputation}\t\t${experience}`);
  }
}

listMembers(guild);

// 'getMemberTotals()` introduces `Object.entries() method. 
//    1. Create a function and assign `Object.entries()` to a variable,
//    2. Use `console.log()` to see what has been assigned to the variable
//    3. Remove the `console.log()` and create a `for()` loop, add `return false` statement,
//    4. Destructure `guildMember` inside the `if()` conditional, add `return entry`
function getMemberTotals(guildObject, member) {
  const guildMembers = Object.entries(guildObject);

  for (const guildMember of guildMembers) {
    const [name, entry] = guildMember;
    if (member === name) {
      return entry;
    }
  }
  return false;
}

// Checks for validating `getMemberTotals()` is working correctly - can be one of the steps and removed later
console.log(getMemberTotals(guild, "natalie"));
console.log(getMemberTotals(guild, "francis"));

// "cloneGuildData()" can be broken into multiple (4?) steps, showing that using the spread syntax creates a shallow copy of the object (and explaining how it prevents accidental mutations) for example:
//    1. Write the function and assign the input parameter to one variable directly, and via the spread operator to a second variable, then call the function,
//    2. Modify the content of the first variable, then use `console.log()` to compare the original input parameter, and both variables, showing that modifying the direct copy modified the original as well,
//    3. Modify the shallow copy to show it didn't affect the original
//    4. Remove the variables and the function call, write the  final version of the function.
function cloneGuildData(guildObject) {
  return { ...guildObject };
}

function addLootEntry(guildObject, entry) {
  //    1. Use cloneGuildData() to get a copy of the first input parameter,
  const clonedGuild = cloneGuildData(guildObject);
  //    2. Use `Object.keys() to get a list of guild member's names, and use the spread operator to separate data from the second parameter 
  const guildMemberNames = Object.keys(guildObject);
  const { member: memberName, ...newMemberTotals } = entry;
  //    3, 4. Write conditional checking to validate the member's name exists, and is a string
  if (!memberName) {
    console.log("New entry must include a name of the guild member!");
    return;
  } else if (typeof memberName !== "string") {
    console.log("Member name must be a string!");
    return;
  }
  //    5. Add a `for()` loop iterating over the guild member's names, add the `console.log()` and a return statement after it (I just realized that `return` is kind of pointless...), Check if the guildObject includes a record of the provided member,
  for (const guildMember in guildMemberNames) {
    //    6. Write a `if()` statement for finding the name provided in the second input parameter, then get this guild member's data with `getMemberTotals()` and assign it to a variable for readability (we're not making a copy of the object! it could be worth pointing out the difference in the steps),
    if (guildMemberNames[guildMember] === memberName) {
      const currentMemberTotals = getMemberTotals(clonedGuild, memberName);
      //    7. Add a `for()` loop to iterate over the member's resources,
      for (const resource in currentMemberTotals) {
        //    8. Add a `if()` statement to check if the new data is missing one of the values - if it does, end the function execution if it does,
        if (!Object.hasOwn(newMemberTotals, resource)) {
          console.log(`Updated data is missing an entry for "${resource}"!`);
          return;
        } else if (
          //    9. Add the else if statement to check if the new value is of the same type as the current one, return early if it isn't
          typeof newMemberTotals[resource] !==
          typeof currentMemberTotals[resource]
        ) {
          console.log(
            `"${resource}" must be a ${typeof currentMemberTotals[resource]}!`,
          );
          return;
        }
        //    10., 11. Then, check if the new entry has ONLY the required resources (could be just one step, but it might be a bit too confusing),
        for (const resource in newMemberTotals) {
          if (!Object.hasOwn(currentMemberTotals, resource)) {
            console.log(`Updated data has an unknown entry "${resource}!`);
            return;
          }
        }
        //    12. Since at this point the new data passed all of the guard clauses, we can overwrite the old data
        currentMemberTotals[resource] = newMemberTotals[resource];
      }
      //    13. Finally, now we're sure our input was correct, we can overwrite the old data, inform the user the operation was successful, and exit the function.
      guild = clonedGuild;
      console.log("Guild roster updated.");
      return;
    }
  }
  console.log(`${memberName} is not a member of this guild!`);
  return;
}

// Last step: use `AddLootEntry() to change the guild member's resources, and use `listMembers()` to see if it worked.
addLootEntry(guild, {
  member: "natalie",
  gold: 1,
  silver: 2,
  reputation: 3,
  experience: 4,
});

listMembers(guild);
