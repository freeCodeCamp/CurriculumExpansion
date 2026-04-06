const morningGates = [
  { id: "North", capacity: 5, queue: [3, 6, 2, 4] },
  { id: "East", capacity: 3, queue: [2, 4, 3, 5] },
  { id: "South", capacity: 4, queue: [1, 2, 3, 1] },
  { id: "West", capacity: 2, queue: [4, 1, 2, 3] },
];

const nightGates = [
  { id: "North", capacity: 4, queue: [6, 2, 5, 1] },
  { id: "East", capacity: 2, queue: [3, 3, 4, 2] },
  { id: "South", capacity: 5, queue: [2, 1, 2, 3] },
  { id: "West", capacity: 3, queue: [5, 2, 1, 4] },
];

// step 1
// initializes tracking object to store total processed attendees per gate
function initializeThroughput(gates) {
  const summary = {};
  for (const gate of gates) {
    summary[gate.id] = 0;
  }
  return summary;
}

// process a single gate at a single tick
// returns number of attendees processed and overflowed
function processGateFlow(gate, tickIndex) {
  let currentTickQueue = gate.queue[tickIndex];
  let processed = 0;

  // allow attendees through until capacity is reached
  // or until queue becomes empty
  while (currentTickQueue > 0 && processed < gate.capacity) {
    currentTickQueue--;
    processed++;
  }
  return {
    processed: processed,
    overflow: currentTickQueue
  };
}

// reroutes overflow attendees to next gate in dataset
function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
  const currentIndex = gates.indexOf(currentGate);
  const nextGateIndex = (currentIndex + 1) % gates.length;
  gates[nextGateIndex].queue[tickIndex] += overflowAmount;
  console.log(
    overflowAmount + " attendees rerouted to " +
    gates[nextGateIndex].id
  );
}

// orchestrates all actions for one gate during one simulation tick
// controller that ties processing and routing together
function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
  console.log("\nProcessing " + gate.id + "...");
  console.log(
    gate.queue[tickIndex] + " attendees arriving."
  );
  const result = processGateFlow(gate, tickIndex);
  throughputSummary[gate.id] += result.processed;
  if (result.overflow > 0) {
    console.log(
      "Overflow of " + result.overflow +
      " attendees. Rerouting..."
    );
    rerouteOverflow(gates, gate, tickIndex, result.overflow);
  }
}

// log total throughput per gate
function printSummary(summary) {
  console.log("\nThroughput Summary");
  for (const gateId in summary) {
    console.log(
      gateId + ": " + summary[gateId] +
      " attendees processed"
    );
  }
}

function simulateFestival(gates, timeBlock) {
  console.log("\n" + timeBlock + " Simulation");
  const throughputSummary = initializeThroughput(gates);
  const maxTicks = gates[0].queue.length;
  let tickIndex = 0;
  while (tickIndex < maxTicks) {
    console.log("\nTick " + (tickIndex + 1));
    for (const gate of gates) {
      handleGateAtTick(gates, gate, tickIndex, throughputSummary);
    }
    tickIndex++;
  }
  printSummary(throughputSummary);
}

simulateFestival(morningGates, "Morning");
simulateFestival(nightGates, "Night");
