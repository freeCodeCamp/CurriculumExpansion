const sensorBurst = [
[52,77], 
[65,99], 
[8,72,68], 
[25,6], 
[93,42,23], 
[48,33,9], 
[0,0], 
[84,3,23], 
[0,0,0], 
[0,0], 
[0,0,0], 
[51,16], 
[7,71,47], 
[16], 
[0,0,0], 
[99,53], 
[0,0], 
[74,9], 
[22,11], 
[55,14,39], 
[0,0,0]                                 
]



function analyzeBurst(burst, windowSize) {
  //start by calculating the lenght of the burst
  let num = burst.length;
  
  let windowSum = 0;
  let windowAverage = 0;

  let currentMin = burst[0]; //currentMin is set to the first value of the burst array and not 0 because the numers on the array could be all larger than 0.  
  let currentMax = burst[0]; //currentMax is set to the first value of the burst array.


  //First case: if there is an edge case. In this scenario a burst smaller than a window size, return an error message.
  if (num < windowSize) {
    
    console.log("Invalid: burst smaller than windowSize");
    return [null, null, null];
  }

  //Second case: if the burst is the same size of the window size, run a normal for loop, with a O(n) complexity (linear)
  if (num == windowSize) {
  
    for (let i = 0; i < windowSize; i++) {
      windowSum += burst[i];
      currentMax = Math.max(currentMax, burst[i])
      currentMin = Math.min(currentMin, burst[i])
  }
  windowAverage = (windowSum / num) // at the end of the for loop windowSum is divided by num set at the begining
  return [currentMin,currentMax,windowAverage];
}

//Other cases, if the burst larger than window size, run a normal for loop for the starting subarray, annd then continue in a separated for loop. All the loops have a O(n) complexity (linear)

//calculate the min, max and sum of the starting subarray.
  for (let i = 0; i < windowSize; i++) {
    windowSum += burst[i];
    currentMax = Math.max(currentMax, burst[i])
    currentMin = Math.min(currentMin, burst[i])
  }

  //apply sliding window to the rest of the subarray
  for (let j = windowSize; j < num; j++) {

    windowSum += burst[j];
    currentMax = Math.max(currentMax, burst[j])
    currentMin = Math.min(currentMin, burst[j])
}
  windowAverage = (windowSum/num);

  return [currentMin,currentMax,windowAverage];
  
}



function detectSpikes(burst, threshold) {
//You should create detectSpikes(burst, threshold) that uses some/every to flag bursts exceeding thresholds.

let num = burst.length;
let exceed = 0;

for (let i = 0; i < num ; i++) {

  if (burst[i] <= threshold) {
  } else {
    exceed += 1;
  }
}

if (exceed == num) {
  return "every";
}
  return "some";
}



function detectSilence(burst, windowSize) {
//You should create detectSilence(burst, windowSize) that returns true if a full window contains zero readings.


  //start by calculating the lenght of the burst
  let num = burst.length;

  //First case: if there is an edge case. In this scenario a burst smaller than a window size, return an error message.
  if (num < windowSize) {
    return "Invalid: burst smaller than windowSize";
  }

  let silence = 0;
  for (let i = 0; i < windowSize ; i++) {

    if (burst[i] > 0) {
    } else {
      silence += 1;
    }
  }

  if (silence == windowSize) {
    return true;
  }
    return false;

}



function summarizeSensorData(bursts){
//You should create summarizeSensorData(bursts) that maps through all bursts, aggregates stats, and returns an array of summary objects.
let num = bursts.length;
let summarizedData = [[],[],[]]

for (let i=0; i < num; i++) {

  let burstLength = bursts[i].length;
  let numbers = bursts[i];
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);

  let sum = numbers.reduce((a, b) => a + b);

  let avg = sum / burstLength

  summarizeData[0].push(min);
  summarizeData[1].push(max);
  summarizeData[2].push(avg);

}
return summarizedData
}