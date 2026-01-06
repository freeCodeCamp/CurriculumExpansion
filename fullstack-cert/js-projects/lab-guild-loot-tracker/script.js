const guild = {
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

function cloneGuildData(object) {
  return { ...object };
}

function addLootEntry(object, entry) {
  const memberData = ["gold", "silver", "reputation", "experience"];

  if (
    !Object.keys(entry).includes("member") ||
    typeof entry["member"] !== "string"
  ) {
    return 'Entry must include a "member" key, with a "string" value (the guild member name).';
  }

  for (const value of memberData) {
    if (
      !Object.keys(entry).includes(value) ||
      typeof entry[value] !== "number"
    ) {
      return `Entry must include a "${value}" key, with a "number" value.`;
    }
  }

  const clonedGuildData = cloneGuildData(object);
  const { member } = entry;
  const { gold, silver, reputation, experience } = entry;

  clonedGuildData[member] = { gold, silver, reputation, experience };

  return clonedGuildData;
}

function getMemberTotals(object, member) {
  if (!Object.keys(object).includes(member)) {
    return `"${ingredient}" not found in the guild roster.`;
  } else {
    return `${member}'s totals - gold: ${Object.values(object[member])[0]}, silver: ${Object.values(object[member])[1]} reputation: ${Object.values(object[member])[2]}, experience: ${Object.values(object[member])[3]}`;
  }
}

function listTopMembers(object, key, limit) {
  const membersSortedByValue = Object.entries(object);
  let returnObject = {};

  membersSortedByValue.sort((a, b) => b[1][key] - a[1][key]);
  for (let member of membersSortedByValue.slice(0, limit)) {
    returnObject[member[0]] = member[1];
  }
  return returnObject;
}
