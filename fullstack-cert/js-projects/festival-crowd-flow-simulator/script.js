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
// returns object with total throughput per gate
function createThroughputSummary(gates) {
  const summary = {};
  for (const gate of gates) {
    summary[gate.id] = 0;
  }
  return summary;
}

// process single tick per gate
// returns number of attendees processed and overflowed
function processTick(gate, tickIndex) {
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
    "  " + overflowAmount + " attendees rerouted to " +
    gates[nextGateIndex].id
  );
}

// process all ticks for one gate
function processGate(gates, gate, throughputSummary) {
  console.log("\nProcessing " + gate.id + "...");

  let tickIndex = 0;

  while (tickIndex < gate.queue.length) {
    console.log(
      " Tick " + (tickIndex + 1) + ": " +
      gate.queue[tickIndex] + " attendees arriving."
    );

    const result = processTick(gate, tickIndex);

    throughputSummary[gate.id] += result.processed;

    if (result.overflow > 0) {
      console.log(
        "  Overflow of " + result.overflow +
        " attendees. Rerouting..."
      );
      rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }

    tickIndex++;
  }
}

// log total throughput per gate
function displaySummary(summary) {
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

  const throughputSummary = createThroughputSummary(gates);

  for (const gate of gates) {
    processGate(gates, gate, throughputSummary);
  }

  displaySummary(throughputSummary);
}

simulateFestival(morningGates, "Morning");
simulateFestival(nightGates, "Night");