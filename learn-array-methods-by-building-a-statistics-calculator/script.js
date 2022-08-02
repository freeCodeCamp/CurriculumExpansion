const getMean = (array) => {
  // // teach the reduce method
  // const mean = array.reduce((acc, el) => {
  //   return acc + el;
  // });

  // show how to use concise version here
  const mean = array.reduce((acc, el) => acc + el, 0) / array.length;
  return mean;
};

const getMedian = (array) => {
  // explain the need for a callback here!!
  const sorted = array.sort((a, b) => a - b);
  const median = sorted[Math.floor((sorted.length - 1) / 2)];
  return median;
};

const getMode = (array) => {
  const counts = {};
  // review the for each method
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  });
  const highest = Object.keys(counts).sort(
    (a, b) => counts[b] - counts[a]
  )[0][0];
  return parseInt(highest);
};

const getRange = (array) => {
  const min = Math.min(...array);
  const max = Math.max(...array);
  return max - min;
};

const getVariance = (array) => {
  /**
   * Getting variance takes 5 steps:
   * 1. Calculate the mean of the array
   * 2. Calculate the difference of each element from the mean
   * 3. Square the difference
   * 4. Sum the squared differences
   * 5. Divide that sum by the number of elements
   *
   * Have the camper write individual steps, then teach them complex
   * reduce use?
   */
  const mean = getMean(array);
  const squaredDifferences = array.reduce((acc, el) => {
    const difference = el - mean;
    const squared = difference ** 2;
    return acc + squared;
  }, 0);
  const variance = squaredDifferences / array.length;
  return variance;
};

const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  // teach how exponential roots are calculated
  // const standardDeviation = Math.pow(variance, 1/2);
  // math has a square root method, teach that
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
};

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  // // teach here that inputs are always strings
  // // also teaching the map method
  // const numbers = array.map((el) => parseInt(el));
  // // explain that values which don't parse to a number are NaN
  // // and NaN can't be compared to anything
  // // also teaching the filter method
  // const filtered = numbers.filter((el) => !isNaN(el));

  // teach method chaining
  const numbers = array.map((el) => parseInt(el)).filter((el) => !isNaN(el));

  // have campers use filtered first, then after chaining switch these to numbers
  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);
  const standardDeviation = getStandardDeviation(numbers);

  document.querySelector("#mean").innerHTML = mean;
  document.querySelector("#median").innerHTML = median;
  document.querySelector("#mode").innerHTML = mode;
  document.querySelector("#range").innerHTML = range;
  // teach toFixed to round to 3 decimal places
  document.querySelector("#variance").innerHTML = variance.toFixed(3);
  document.querySelector("#standardDeviation").innerHTML =
    standardDeviation.toFixed(3);
};
