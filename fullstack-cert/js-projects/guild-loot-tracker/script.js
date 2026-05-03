// This will be a workshop for the Loops section, probably after the "Build a Profile Lookup" lab.
 
// Creating the "guild" object could be 2 or 3 Steps (creating "guild" object itself and adding the first "guild member" object as the first property - rest of the "guild members" can be filled out somewhere between the next steps to avoid too much repetition).
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
// 'listMemberNames()` introduces `Object.keys()` static method, and provides a list of current members of the guild. Could be 3 steps (1. create a function, 2. assign the array returned by the `Object.keys()` to a variable + explanation of the method, 3. for loop and `console.log()`s)
function listMemberNames(guildObject) {
  console.log("Current Guild Members:");
  const guildMembers = Object.keys(guildObject);
  for (const member in guildMembers) {
    console.log(`${parseInt(member) + 1}. ${guildMembers[member]}`);
  }
}

listMemberNames(guild);

// `listMembers()` introduces `Object.entries()` static method (possibly also `Object.keys()` and `Object.values()`, depending on how long the description for each step is supposed to be)
function listMembers(guildObject) {
  console.log("Guild Member's Resources:");
  for(const member in guildObject) {
    // Use Object.keys() and Object.resources() to get a list of resources of each guild member
    const resourceNames = Object.keys(guildObject[member]);
    const resourceValues = Object.values(guildObject[member]);
    console.log(`${member}:`);
    console.log(`${resourceNames[0]}\t${resourceNames[1]}\t${resourceNames[2]}\t${resourceNames[3]}`);
    console.log(`${resourceValues[0]}\t${resourceValues[1]}\t${resourceValues[2]}\t\t${resourceValues[3]}`);
  }
}

listMembers(guild);

//TODO: bring the listTopMembers method back (now that the workshop is in the Loops section, sorting should be viable. In Theory. need to double-check that.)

// 'getMemberTotals()` can be 4 steps (introduce `Object.keys()` method, write a guard clause using `if()/else` and `.includes()`, introduce `Object.values()`, return a string literal with the result) -
function getMemberTotals(guildObject, member) {
  const memberNames = Object.keys(guildObject);
  // TODO: Simplify the loop iteration
  for (const name in memberNames) {
    if (memberNames[name] === member) {
      return guildObject[member];
    }
  }
  return false;
}
// Checks if `getMemberTotals()` works correctly - can be one of the steps and removed later
console.log(getMemberTotals(guild, "natalie"));
console.log(getMemberTotals(guild, "francis"));

// "cloneGuildData" can be broken into multiple (3?) steps to show that using the spread syntax creates a shallow copy of the object, for example #3 write the function and log it #4 assign the returned data to a variable, and change some of its values, then log both original and the copy to the console, #5 remove the variable and console.log() calls to continue
function cloneGuildData(guildObject) {
  return { ...guildObject };
}

function addLootEntry(guildObject, entry) {
  // Use cloneGuildData() to prevent accidental mutations before committing the changes to the 'guild object'
  const clonedGuild = cloneGuildData(guildObject);
  // Use `Object.keys() to get the guild member's 
  const guildMemberNames = Object.keys(guildObject);
  // Use spread operator to get the member's name and resources out of the "entry" argument
  const { member: memberName, ...newMemberTotals} = entry;
  // Check if the member's name exists, and is a string 
  if (!memberName) {
    console.log("New entry must include a name of the guild member!");
    return;
  } else if (typeof memberName !== "string") {
    console.log("Member name must be a string!");
    return;
  }
  // Check if the guildObject includes a record of the provided member
  for (const guildMember in guildMemberNames) {
    if (guildMemberNames[guildMember] === memberName) {
        // Now, we assign the member from the cloned data to a variable to make the loops more readable (we're not making a copy of the object! it could be worth pointing out the difference in the steps).
      const currentMemberTotals = getMemberTotals(clonedGuild, memberName);
      // We could check if the entry includes all of the required fields (the same as the existing member)
      // First we check if the new entry has all of the required resources:
      for (const resource in currentMemberTotals) {
      if (!Object.hasOwn(newMemberTotals, resource)) {
        console.log(`Updated data is missing an entry for "${resource}"!`);
        return;
      } else if ( typeof newMemberTotals[resource] !== typeof currentMemberTotals[resource]){
        console.log(`"${resource}" must be a ${typeof currentMemberTotals[resource]}!`);
        return;
      }
      // Then, we check if the new entry has ONLY the required resources NOTE: (this one is probably unnecessary, I'm not sure if ALL of the resources should actually be required to make an update):
      for (const resource in newMemberTotals) {
        if (!Object.hasOwn(currentMemberTotals, resource)) {
          console.log(`Updated data has an unknown entry "${resource}!`);
          return;
        }
      }
      // Assigning new values could be done outside of the loop, but on the other hand, it might be how we can show how cloning the current data can prevent against accidental mutation on case where someone provides incorrect input data more clearly (maybe?).
      currentMemberTotals[resource] = newMemberTotals[resource];
      }
      // Finally, now we're sure our input was correct, we can overwrite the old data.
      guild = clonedGuild;
      console.log("Guild roster updated.");
      return;
    }
  }
  // In the case that the guildObject doesn't include a member with the given name, inform the user and return
  console.log(`${memberName} is not a member of this guild!`);
  return;
}

addLootEntry(guild, {
  member: "natalie",
  gold: 1,
  silver: 2,
  reputation: 3,
  experience: 4,
});

// Using `listMembers()` to check if the data has been updated
listMembers(guild);
