function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

function assert(actual) {
  return {
    deepEqual(expected) {
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
          throw new Error(
            `Element at index ${i} is different: ${actual[i]} is not equal to ${expected[i]}`
          );
        }
      }
    },
  };
}

function multipleBy2(num) {
  return num * 2;
}

test("[1, 2, 3].map(multipleBy2) returns new array of [2,4,6]", () => {
  const input = [1, 2, 3];
  const expectedOutput = [2, 4, 6];
  assert(input.map(multipleBy2)).deepEqual(expectedOutput);
});

// have campers write tests on their own
// and have two steps that deal with trying to call 
// the callback directly to demonstrate why it doesn't work.  


test("[12, 6, 8, 24].map(multipleBy2) returns new array of [ 24, 12, 16, 48 ]", () => {
  const input = [12, 6, 8, 24];
  const expectedOutput = [24, 12, 16, 48];
  assert(input.map(multipleBy2)).deepEqual(expectedOutput);
});

test("[12, 6].map(multipleBy2) should not equal [1, 2, 3, 4]", () => {
  const input = [12, 6];
  const expectedOutput = [1, 2, 3, 4];
  assert(input.map(multipleBy2)).deepEqual(expectedOutput);
});



