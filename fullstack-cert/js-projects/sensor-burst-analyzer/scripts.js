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
// sensorBurst includes bursts with inconsistent lengths. If the sample should be more consistent please let me know.

function getWindow(burst, start, windowSize) {
// uses slice to extract a window of readings
  const sample = [...burst]
  
  if (sample.length <= windowSize){
    return "lecture is smaller than the window size"
  } if (sample.length == 0){
    return "lecture is empty"
  }else {
    return sample.slice(start, windowSize)
  }

}


function detectSilence(burst) {
// uses includes to check for zero readings
  const sample = [...burst]
  
  if (sample.includes(0)== false){
    return "all the readings are bigger than zero"
  }else {
    return sample.includes(0)
  }
}

function findReading(burst, value) {
//uses indexOf to locate a specific reading  
  const sample = [...burst]
  
  if (sample.indexOf(value)== -1){
    return "value does not exist"
  }else {
    return sample.indexOf(value)
  }
}

function replaceFaultyReading(burst, index, newValue) { 
// uses splice to replace a reading
  const sample = [...burst]
  sample.splice(index, 1, newValue)

  return sample

}

function mergeSensorData(dataset1, dataset2) { 
// uses concat to combine two datasets
  const array1 = [...dataset1]
  const array2 = [...dataset2]
  
  return array1.concat(array2)

}