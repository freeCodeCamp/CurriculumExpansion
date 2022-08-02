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
  const median = array[Math.floor((array.length - 1) / 2)];
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

  document.querySelector("#mean").innerHTML = mean;
  document.querySelector("#median").innerHTML = median;
  document.querySelector("#mode").innerHTML = mode;
};
