// creating crew array
const crew = [];

// function that pushes a new astronaut, enforces unique id's, and logs confirmation
function addCrewMember(crew, astronaut) {

  // checking for duplicate IDs
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].id === astronaut.id) {
      throw new Error("Duplicate ID: " + astronaut.id);
    }
  }

  // mutating addition to crew array
  crew.push(astronaut);
  console.log(`Added ${astronaut.name} as ${astronaut.role}.`);
}

// function that reorders astronauts using splice/slice and logs resulting order
function swapCrewMembers(crew, fromIndex, toIndex) {

  // validate indices
  if (
    fromIndex < 0 || 
    toIndex < 0 ||
    fromIndex >= crew.length ||
    toIndex >= crew.length
  ) {
    throw new Error("Invalid crew indices");
  }

  // non-mutating copy using slice
  const updatedCrew = crew.slice();

  // remove one member using splice
  const removed = updatedCrew.splice(fromIndex, 1)[0];

  // insert member at new position
  updatedCrew.splice(toIndex, 0, removed);

  // manually log names
  for (let i = 0; i < updatedCrew.length; i++) {
    console.log(updatedCrew[i].name);
  }

  // non-mutated return of updated crew array
  return updatedCrew; 
}

// function that returns a filtered arrray of EVA-eligible astronauts, sorted by priority
function getEVAReadyCrew(crew) {

  // array to hold eligible members
  const eligible = [];
  // manual filter for EVA-eligible members
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].evaEligible === true) {
      eligible.push(crew[i]);
    }
  }

  // manual sort (bubble sort) by priority
  for (let i = 0; i < eligible.length - 1; i++) {
    for (let j = 0; j < eligible.length - 1 - i; j++) {
      if (eligible[j].priority > eligible[j + 1].priority) {
        const temp = eligible[j];
        eligible[j] = eligible[j + 1];
        eligible[j + 1] = temp;
      }
    }
  }

  return eligible;
}

// helper function that splits crew into shuttle-sized groups without mutating source array
function chunkCrew(crew, size) {

  // validating chunk size
  if (size < 1) {
    throw new Error("Chunk size must be >= 1");
  }

  // array to hold chunks
  const chunks = [];

  // looping in increments of size
  for (let i = 0; i < crew.length; i += size) {
    chunks.push(crew.slice(i, i + size)); // non-mutating slice into chunks
  }

  return chunks;
}

// function that maps crew members into readable strings and logs them in order of priority
function printCrewSummary(crew) {
  
  // copy of crew
  const sorted = crew.slice();

  // manual sort by priority (bubble sort)
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      if (sorted[j].priority > sorted[j + 1].priority) {
        const temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }

  // logging summary
  for (let i = 0; i < sorted.length; i++) {
    console.log(sorted[i].name);
  }
}

// potential seed data 
/*
// ----- Seed Data -----
const crew = [
  { id: 1, name: "Andy", role: "Commander", evaEligible: true,  priority: 3 },
  { id: 2, name: "Bart", role: "Pilot",     evaEligible: false, priority: 8 },
  { id: 3, name: "Caroline", role: "Engineer", evaEligible: true,  priority: 4 },
  { id: 4, name: "Diego", role: "Scientist",evaEligible: false, priority: 1 },
  { id: 5, name: "Elise",   role: "Medic",     evaEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", evaEligible: true,  priority: 6 },
  { id: 7, name: "Gertrude",   role: "Communications", evaEligible: false, priority: 4 },
  { id: 8, name: "Hank",  role: "Mechanic", evaEligible: true,  priority: 2 },
  { id: 9, name: "Irene",  role: "Specialist", evaEligible: true,  priority: 5 },
  { id: 10, name: "Joan", role: "Technician", evaEligible: false, priority: 1 },
]; 
 */