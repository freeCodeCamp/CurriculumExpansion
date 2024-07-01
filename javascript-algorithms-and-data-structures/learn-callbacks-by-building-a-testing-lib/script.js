
function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`✕ ${title}`)
    console.error(error)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}

function assert(actual) {
  return {
    deepEqual(expected) {
      for (let i = 0; i < actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
      }
    }
  }
}


function sum(num1, num2) {
  return num1 + num2;
}

const numToString = (num) => num.toString();

const isEven = (num) => num % 2 === 0;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('map fails to convert array to a different array', () => {
  const input = [1, 2, 3];
  const expectedOutput = ['1', '2', '3'];
  expect(input.map(numToString)).toBe(expectedOutput);
});

test('converts numbers to strings', () => {
  const input = [1, 2, 3];
  const output = input.map(numToString);
  const expectedOutput = ['1', '2', '3'];
  for (let i = 0; i < input.length; i++) {
    expect(output[i]).toBe(expectedOutput[i]);
  }
});

test('map fails to convert array to a different array', () => {
  const input = [1, 2, 3];
  const expectedOutput = ['1', '2', '3'];
  expect(input.map(numToString)).toBe(expectedOutput);
});


test("keeps only event numbers", () => {
  const input = [1, 2, 3, 4, 5, 6];
  const output = input.filter(isEven);
  const expectedOutput = [2, 4, 6];
  assert(output).deepEqual(expectedOutput);
});



