// Initialize the poll with a Map
const poll = new Map();

function addOption(option) {
  if (!poll.has(option)) {
    poll.set(option, new Set()); // Each option has a Set to track unique voters
    return `Option "${option}" added to the poll.`;
  } else {
    return `Option "${option}" already exists.`;
  }
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  const voters = poll.get(option);
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  } else {
    voters.add(voterId); // Add voterId to the Set for this option
    return `Voter ${voterId} voted for "${option}".`;
  }
}

// Display poll results
function displayResults() {
  console.log("Poll Results:");
  for (let [option, voters] of poll.entries()) {
    return `${option}: ${voters.size} votes`;
  }
}

// Example usage

// add options
console.log(addOption("Turkey"));
console.log(addOption("Morocco"));
console.log(addOption("Qatar"));

// vote
console.log(vote("Turkey", "traveler1"));
console.log(vote("Morocco", "traveler2"));
console.log(vote("Turkey", "traveler2")); // A second unique voter for Option A
console.log(vote("Qatar", "traveler3"));
console.log(vote("Turkey", "traveler1")); // Duplicate vote attempt for voter1 on Option A

console.log(displayResults());
