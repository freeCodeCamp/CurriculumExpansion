

const temps = [
  // --- NORMAL START ---
  { temp: 28, time: 1765861200000 },
  { temp: 29, time: 1765864800000 },
  // --- HEAT WAVE (Story #3) ---
  // Threshold idea: > 38
  { temp: 39, time: 1765868400000 },
  { temp: 42, time: 1765872000000 },
  { temp: 45, time: 1765875600000 },
  
  // --- INVALID DATA (Story #3: "continue to skip invalid") ---
  { temp: null, time: 1765879200000 },      // Sensor error
  { temp: "error", time: 1765882800000 },   // Malformed data
  
  // --- MISSING TIME GAP (Story #5) ---
  // We skip hours 7 and 8 entirely here.
  // The next entry jumps to hour 9.

  // --- COLD SNAP (Story #4) ---
  // Threshold idea: < 20
  { temp: 18, time: 1765893600000 },
  { temp: 12, time: 1765897200000 },
  { temp: 15, time: 1765900800000 },

  // --- RECOVERY/NORMAL ---
  { temp: 25, time: 1765904400000 },
  { temp: 27, time: 1765908000000 },
  { temp: 26, time: 1765911600000 }
]


function rollingAverage(readings) {
  let sum = 0;
  let count = 0;
  let average = 0;

  for (let i = 0; i < readings.length; i++) {
    if (typeof readings[i].temp === "number") {
      sum += readings[i].temp;
      count++;
    }
  }

  if (count > 0) {
    average = sum / count;
  }

  return average;
}


function detectHeatWave(readings, threshold) {
  const result = [];

  for (const reading of readings) {
    if (typeof reading.temp !== "number") {
      continue;
    }

    if (reading.temp > threshold) {
      result.push(reading);
    }
  }

  return result;
}



function detectColdSnap(readings, threshold) {
  const result = [];
  let i = 0;

  while (i < readings.length) {
    const reading = readings[i];

    if (typeof reading.temp === "number") {
      if (reading.temp < threshold) {
        result.push(reading);
      }
    }

    i++;
  }

  return result;
}


function findMissingTemps(readings) {
  if (readings.length < 2) {
    return [];
  }

  const HOUR = 60 * 60 * 1000;
  const missing = [];

  let current = readings[0].time;
  let end = readings[readings.length - 1].time;

  while (current <= end) {
    let found = false;

    for (let i = 0; i < readings.length; i++) {
      if (readings[i].time === current) {
        found = true;
        break;
      }
    }

    if (found === false) {
      missing.push(current);
    }

    current += HOUR;
  }

  return missing;
}
