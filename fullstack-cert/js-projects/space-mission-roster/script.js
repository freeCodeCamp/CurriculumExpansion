// creating crew array
const crew = [];

// function that pushes a new astronaut, enforces unique id's, and logs confirmation
function addCrewMember(crew, astronaut) {
  // checking for duplicate IDs
  const existingId = crew.some(member => member.id === astronaut.id);

  // throw error if duplicate found
  if (existingId) {
    throw new Error(`Duplicate ID: ${astronaut.id}`);
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

  // using spread to create a non-mutating copy of array
  const updatedCrew = [...crew];
  // using mutating splice to remove one member
  const [member] = updatedCrew.splice(fromIndex, 1);s
  // inserting member back at new position
  updatedCrew.splice(toIndex, 0, member);

  console.log(
    "Resulting order:",
    updatedCrew.map(m => m.name).join(", ")
  );

  // non-mutated return of updated crew array
  return updatedCrew; 
}

// function that returns a filtered arrray of EVA-eligible astronauts, sorted by priority
function getEVAReadyCrew(crew) {
  return crew
    // filter will return a new array without mutating the original
    .filter(member => member.evaEligible)
    //sorting the copy by priority
    .sort((a, b) => a.priority - b.priority);  // non-mutating
}

// helper function that splits crew into shuttle-sized groups without mutating source array
function chunkCrew(crew, size) {

  // validating chunk size
  if (size < 1) {
    throw new Error("Chunk size must be >= 1");
  }

  // array to hold chunks
  const result = [];
  // non-mutated copy
  const copy = [...crew];

  // looping in increments of size
  for (let i = 0; i < copy.length; i += size) {
    // slicing chunks and pushing to result
    result.push(copy.slice(i, i + size));
  }

  return result;
}

// function that maps crew members into readable strings and logs them in order of priority
const printCrewSummary = crew =>
  [...crew]
    .sort((a, b) => a.priority - b.priority)
    .forEach(member => console.log(member.name));