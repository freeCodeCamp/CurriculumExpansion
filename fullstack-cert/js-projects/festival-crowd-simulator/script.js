//sample data
// gate object: { id, capacity, queue }
const morningGates = [
  { id: "North", capacity: 5, queue: [8, 3, 4, 10, 1, 0, 2] },
  { id: "East", capacity: 4, queue: [4, 6, 0, 2, 8, 3, 1] },
  { id: "West", capacity: 3, queue: [2, 5, 3, 1, 0, 0, 0] }
];

const eveningGates = [
  { id: "North", capacity: 4, queue: [2, 2, 2, 2, 2, 2] },
  { id: "East", capacity: 3, queue: [1, 1, 1, 5, 0, 0] },
  { id: "West", capacity: 2, queue: [0, 0, 3, 3, 3, 3] }
];

// backup routing config (per scenario)
const morningBackups = ["East", "West", "North"];
const eveningBackups = ["East", "West", "North"];

// dynamic capacity updates: gateId -> { tick: newCap }
const morningCapacityUpdates = { North: { 3: 3, 6: 2 }, East: { 4: 6 }, West: { 2: 1 } };
const eveningCapacityUpdates = { North: { 5: 2 }, East: { }, West: { 3: 4 } };

// helper functions
export function measureThroughput(gatesList) {
  return gatesList.map(gateData => ({
    id: gateData.id,
    totalServed: gateData.throughput,
    perTick: gateData.throughputPerTick.slice()
  }));
}

export function measureCongestion(gatesList) {
  return gatesList.map(gateData => ({
    id: gateData.id,
    peakQueue: gateData.peakQueue,
    reroutedOut: gateData.reroutedOut,
    reroutedIn: gateData.reroutedIn
  }));
}

export function nextTick(tick) { return tick + 1; }

function hasWork(gates, tick, maxTick) {
  return tick < maxTick || gates.some(gate => gate.pendingAttendees > 0);
}

function applyCapacityUpdate(gate, tick, capacityUpdates) {
  const updates = capacityUpdates[gate.id];
  if (updates?.[tick] != null) gate.capacity = updates[tick];
}

// congestion function
function handleCongestion(gate, gates, backups, tick) {
  if (gate.pendingAttendees <= gate.capacity) return;
  const overflow = gate.pendingAttendees - gate.capacity;
  // find first backup gate that is not over capacity
  for (const backupGateId of backups) {
    const backupGate = gates.find(g => g.id === backupGateId);
    if (backupGate && backupGate.pendingAttendees <= backupGate.capacity) {
      gate.pendingAttendees -= overflow;
      backupGate.pendingAttendees += overflow;
      gate.reroutedOut += overflow;
      backupGate.reroutedIn += overflow;
      console.log(`[T${tick}] reroute ${overflow} from ${gate.id} -> ${backupGate.id}`);
      return;
    }
  }
  // all backup gates are over capacity, do nothing
  console.log(`[T${tick}] congest at ${gate.id}, q=${gate.pendingAttendees}, all backups over capacity`);
}

// process gates function
function processGate(gate, gates, backups, tick) {
  gate.pendingAttendees += gate.queue[tick] ?? 0;
  if (gate.pendingAttendees > gate.peakQueue) gate.peakQueue = gate.pendingAttendees;
  let served = Math.min(gate.capacity, gate.pendingAttendees);
  gate.pendingAttendees -= served;
  gate.throughput += served;
  gate.throughputPerTick.push(served);
  handleCongestion(gate, gates, backups, tick);
}

// overall simulator function
export function simulateFestival(baseGates, options = {}) {
  const backups = options.backups ?? {};
  const capacityUpdates = options.capUpdates ?? {};
  const maxTick = baseGates.reduce((max, gate) => Math.max(max, gate.queue.length), 0);
  // clone and extend gates with runtime fields
  const gates = baseGates.map(gate => ({
    id: gate.id, capacity: gate.capacity, queue: gate.queue.slice(),
    pendingAttendees: 0, throughput: 0, throughputPerTick: [],
    peakQueue: 0, reroutedOut: 0, reroutedIn: 0
  }));
  let tick = 0;
  // main while loop: time + dynamic capacity
  while (hasWork(gates, tick, maxTick)) {
    gates.forEach(gate => applyCapacityUpdate(gate, tick, capacityUpdates));
    gates.forEach(gate => processGate(gate, gates, backups, tick));
    tick = nextTick(tick);
  }
  return { gates, totalTicks: tick };
}

// run tests
function summarize(result) {
  const { gates, totalTicks } = result;
  const throughput = measureThroughput(gates);
  const congestion = measureCongestion(gates);
  console.log("=== Summary ===");
  console.log(`ticks: ${totalTicks}`);
  console.log("Throughput:");
  throughput.forEach(d => console.log(` ${d.id}: total=${d.totalServed}, perTick=[${d.perTick.join(",")}]`));
  console.log("Congestion:");
  congestion.forEach(d => console.log(` ${d.id}: peak=${d.peakQueue}, out=${d.reroutedOut}, in=${d.reroutedIn}`));
  console.log("Queues empty:", gates.every(gate => gate.pendingAttendees === 0) ? "YES" : "NO");
}

function runTests() {
  console.log("== Morning ==");
  summarize(simulateFestival(morningGates, { backups: morningBackups, capUpdates: morningCapacityUpdates, congestionThreshold: 7 }));
  console.log("== Evening ==");
  summarize(simulateFestival(eveningGates, { backups: eveningBackups, capUpdates: eveningCapacityUpdates, congestionThreshold: 5 }));
}

//run tests
runTests();