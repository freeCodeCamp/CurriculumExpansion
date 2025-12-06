const squad = [];

const firstAstronaut = {
  id: 1,
  name: "Andy",
  role: "Commander",
  isEVAEligible: true,
  priority: 3
};

function addCrewMember(crew, astronaut) {
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].id === astronaut.id) {
      throw new Error("Duplicate ID: " + astronaut.id);
    }
  }

  crew.push(astronaut);
  console.log(`Added ${astronaut.name} as ${astronaut.role}.`);
}

addCrewMember(squad, firstAstronaut);

const remainingCrew = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
  { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
  { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
  { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
  { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
  { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
  { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
]; 

for (let i = 0; i < remainingCrew.length; i++) {
  addCrewMember(squad, remainingCrew[i]);
}

function swapCrewMembers(crew, fromIndex, toIndex) {
  if (
    fromIndex < 0 || 
    toIndex < 0 ||
    fromIndex >= crew.length ||
    toIndex >= crew.length
  ) {
    throw new Error("Invalid crew indices");
  }

  // non-mutating copy of crew array
  const updatedCrew = crew.slice();

  // swapping using splice
  const temp = updatedCrew[fromIndex];
  updatedCrew.splice(fromIndex, 1, updatedCrew[toIndex]);
  updatedCrew.splice(toIndex, 1, temp);

  for (let i = 0; i < updatedCrew.length; i++) {
    console.log(updatedCrew[i].name);
  }
  return updatedCrew; 
}

updatedSquad = swapCrewMembers(squad, 2, 5);

function getEVAReadyCrew(crew) {
  const eligible = [];

  // manual filter for EVA-eligible members
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].isEVAEligible) {
      eligible.push(crew[i]);
    }
  }

  // manual sort (bubble sort) by priority
  for (let i = 0; i < eligible.length - 1; i++) {
    for (let j = 0; j < eligible.length - 1 - i; j++) {
      if (eligible[j].priority < eligible[j + 1].priority) {
        const temp = eligible[j];
        eligible[j] = eligible[j + 1];
        eligible[j + 1] = temp;
      }
    }
  }
  return eligible;
}

const EVAReadySquad = getEVAReadyCrew(updatedSquad);

console.log("EVA-Ready Crew:");
for (let i = 0; i < EVAReadySquad.length; i++) {
  console.log(EVAReadySquad[i].name);
}

function chunkCrew(crew, size) {
  if (size < 1) {
    throw new Error("Chunk size must be >= 1");
  }

  const chunks = [];

  for (let i = 0; i < crew.length; i += size) {
    chunks.push(crew.slice(i, i + size)); // non-mutating slice into chunks
  }

  return chunks;
}

const EVAChunks = chunkCrew(EVAReadySquad, 3);
console.log("EVA-Ready Crew Chunks:");
for (let i = 0; i < EVAChunks.length; i++) {
  console.log(`Chunk ${i + 1}:`);
  for (let j = 0; j < EVAChunks[i].length; j++) {
    console.log(EVAChunks[i][j].name);
  }
}

function printCrewSummary(crew) {
  const sorted = crew.slice();

  // manual sort by priority descending (bubble sort)
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      if (sorted[j].priority < sorted[j + 1].priority) {
        const temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }

  for (let i = 0; i < sorted.length; i++) {
    console.log(sorted[i].name);
  }
}

console.log("Crew Summary:");
printCrewSummary(updatedSquad);