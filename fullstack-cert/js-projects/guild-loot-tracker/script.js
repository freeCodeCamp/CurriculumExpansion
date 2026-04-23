// Creating the "guild" object could be 2 or 3 Steps (creating "guild" object and adding the first "guild member" object as the first property - rest of the "guild members" can be filled out between the next steps)
let guild = {
  nemo: {
    gold: 31,
    silver: 48,
    reputation: 9,
    experience: 198,
  },
  shamin: {
    gold: 78,
    silver: 64,
    reputation: 12,
    experience: 111,
  },
  ahlerich: {
    gold: 41,
    silver: 7,
    reputation: 7,
    experience: 70,
  },
  corlandus: {
    gold: 81,
    silver: 2,
    reputation: 20,
    experience: 220,
  },
  pedro: {
    gold: 34,
    silver: 28,
    reputation: 10,
    experience: 179,
  },
  morgat: {
    gold: 36,
    silver: 81,
    reputation: 12,
    experience: 82,
  },
};

// `listMembers()` introduces `Object.entries()` static method (possibly also `Object.keys()` and `Object.values()`, depending on how long the description for each step is supposed to be)
function listMembers(guildObject) {
  const guildEntries = Object.entries(guildObject);

  console.log(guildEntries);
}

// 'getMemberTotals()` can be 4 steps (introduce `Object.keys()` method, write a guard clause using `if()/else` and `.includes()`, introduce `Object.values()`, return a string literal with the result) -
function getMemberTotals(guildObject, member) {
  const objectKeys = Object.keys(guildObject);

  if (!objectKeys.includes(member)) {
    return `"${member}" not found in the guild roster.`;
  } else {
    return `${member}'s totals\n gold: ${Object.values(guildObject[member])[0]},\n silver: ${Object.values(guildObject[member])[1]},\n reputation: ${Object.values(guildObject[member])[2]},\n experience: ${Object.values(guildObject[member])[3]}`;
  }
}

// "cloneGuildData" can be broken into multiple (3?) steps to show that using the spread syntax creates a shallow copy of the object, for example #3 write the function and log it #4 assign the returned data to a variable, and change some of its values, then log both original and the copy to the console, #5 remove the variable and console.log() calls to continue
function cloneGuildData(guildObject) {
  return { ...guildObject };
}

function addLootEntry(guildObject, entry) {
  const clonedGuildData = cloneGuildData(guildObject);
  const { member, ...memberData } = entry;

  if (typeof member !== "string") {
    console.log(`Entry must include a "gold" key, with a "number" value.`);
    return;
  }

  if (
    !Object.keys(memberData).includes("gold") ||
    typeof memberData["gold"] !== "number"
  ) {
    console.log('object must have a "gold" key!');
  } else if (
    !Object.keys(memberData).includes("silver") ||
    typeof memberData["silver"] !== "number"
  ) {
    console.log(`Entry must include a "silver" key, with a "number" value.`);
    return;
  } else if (
    !Object.keys(memberData).includes("reputation") ||
    typeof memberData["reputation"] !== "number"
  ) {
    console.log(
      `Entry must include a "reputation" key, with a "number" value.`,
    );
    return;
  } else if (
    !Object.keys(memberData).includes("experience") ||
    typeof memberData["experience"] !== "number"
  ) {
    console.log(
      `Entry must include a "experience" key, with a "number" value.`,
    );
    return;
  }

  clonedGuildData[member] = memberData;

  guild = clonedGuildData;
  console.log("Guild roster updated");
  return;
}

//Test listMembers
listMembers(guild);

console.log(getMemberTotals(guild, "morgat"));

addLootEntry(guild, {
  member: "morgat",
  gold: 1,
  silver: 2,
  reputation: 3,
  experience: 4,
});

console.log(getMemberTotals(guild, "morgat"));
