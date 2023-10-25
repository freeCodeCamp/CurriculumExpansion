const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");

/**
 * adding animation to visually show how recursion works
 * animation is only set to work with the number 5
 */
const animationData = [
  {
    inputVal: 1,
    marginTop: -200,
    addElDelay: 2000,
    msg: 'decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 5000,
    removeElDelay: 10000,
  },
  {
    inputVal: 2,
    marginTop: -200,
    addElDelay: 1500,
    msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000,
    removeElDelay: 15000,
  },
  {
    inputVal: 5,
    marginTop: 300,
    addElDelay: 1000,
    msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
    showMsgDelay: 15000,
    removeElDelay: 20000,
  }
];

const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return input.toString();
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

/**
 * This might be the first time where arrow functions are introduced.
 * We might have the campers first create a traditional function and then convert it to an arrow function
 *
 */
const showAnimation = () => {
  result.innerText = "Call Stack Animation";

  animationData.forEach((obj) => {
    // This is the first time setTimeout is introduced
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
  });

  setTimeout(() => {
    result.innerText = decimalToBinary(5);
  }, 20000);
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt)) {
    // This might be the first time where alert is introduced
    alert("Please provide a number");
    return;
  }

  if (inputInt === 5) {
    showAnimation();
    return;
  }

  result.innerText = decimalToBinary(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

/**
 * This is the first time we are introducing key events so we want to make sure to thoroughly explain it.
 * We also want to explain how the event parameter works and what e.key does.
 * Maybe have them console.log e so they can see the KeyboardEvent object?
 *
 */
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
