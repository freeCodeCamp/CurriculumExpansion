const getMean = (array) => {
  const mean = array.reduce((acc, el) => acc + el, 0) / array.length;
  return mean;
};

const getMedian = (array) => {
  const median = array[Math.floor((array.length - 1) / 2)];
  return median;
};

const getMode = (array) => {
  const counts = {};
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
  const numbers = array.map((el) => parseInt(el));
  const filtered = numbers.filter((el) => !isNaN(el));

  const mean = getMean(filtered);
  const median = getMedian(filtered);
  const mode = getMode(filtered);

  document.querySelector("#mean").innerHTML = mean;
  document.querySelector("#median").innerHTML = median;
  document.querySelector("#mode").innerHTML = mode;
};
