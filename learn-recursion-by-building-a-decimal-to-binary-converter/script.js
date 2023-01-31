const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert");
const result = document.getElementById("result");
const showAnimationDiv = document.getElementById("show-animation");

// adding animation to visually show how recursion works
// animation is only set to work with the number 5
const animationValues = [
    {
        number: 5,
        delay: 1000,
        margin: 300
    },
    {
        number: 2,
        delay: 1500,
        margin: -150
    },
    {
        number: 1,
        delay: 2000,
        margin: -150
    },
    {
        number: 0,
        delay: 2500,
        margin: -150
    }
];

const animationMsgs = [
    {
        number: 0,
        msg:
            'decimalToBinary(0) returns "" and will give that return value to the stack below. It will then pop off the stack',
        delay1: 5000,
        delay2: 10000
    },
    {
        number: 1,
        msg:
            'decimalToBinary(1) returns "" + 1 and will give that return value to the stack below. It will then pop off the stack',
        delay1: 10000,
        delay2: 15000
    },
    {
        number: 2,
        msg:
            'decimalToBinary(2) returns "1" + 0 and will give that return value to the stack below. It will then pop off the stack',
        delay1: 16000,
        delay2: 20000
    },
    {
        number: 5,
        msg: 'decimalToBinary(2) returns "10" + 1. It will then pop off the stack',
        delay1: 21000,
        delay2: 26000
    }
];

const showAnimation = () => {
    result.textContent = "Call Stack animation";
    result.style.width = "40%";
    animationValues.map((val) =>
        setTimeout(() => {
            showAnimationDiv.innerHTML += `<p id="${val.number}" style="margin-top:${val.margin}px;" class='show-animation'>decimalToBinary(${val.number})</p>`;
        }, val.delay)
    );
    animationMsgs.map(
        (val) => (
            setTimeout(() => {
                document.getElementById(val.number).textContent = val.msg;
            }, val.delay1),
            setTimeout(() => {
                document.getElementById(val.number).remove();
            }, val.delay2)
        )
    );
    setTimeout(() => (result.textContent = "101"), 26000);
};

const decimalToBinary = (input) => {
    if (input === 0) {
        return "";
    } else {
        return (result.innerText =
            decimalToBinary(Math.floor(parseInt(input, 10) / 2)) + (input % 2));
    }
};

const checkUserInput = () => {
    if (numberInput.value === "") {
        alert("Please provide a number");
        return;
    }
    if (numberInput.value === "5") {
        showAnimation();
        return;
    }
    decimalToBinary(numberInput.value);
    numberInput.value = "";
};

convertBtn.addEventListener("click", () => checkUserInput());

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});
