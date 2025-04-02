document.addEventListener("DOMContentLoaded", function () {

    const priceInput = document.getElementById("price");
    const tipPercentageInput = document.getElementById("tipPercentage");
    const numPeopleInput = document.getElementById("numPeople");

    const tipAmountDisplay = document.getElementById("tipAmount");
    const tipPerPersonDisplay = document.getElementById("tipPerPerson");
    const totalAmountDisplay = document.getElementById("totalAmount");
    const amountPerPersonDisplay = document.getElementById("amountPerPerson");

    const calculateButton = document.getElementById("calculateBtn");
    const clearButton = document.getElementById("clearBtn");

    calculateButton.addEventListener("click", function (event) {
        event.preventDefault();
        calculateTip();
    });

    clearButton.addEventListener("click", function (event) {
        event.preventDefault();
        clearFields();
    });

    function calculateTip() {
        let price = parseFloat(priceInput.value);
        let tipPercentage = parseFloat(tipPercentageInput.value);
        let numPeople = parseInt(numPeopleInput.value);

        if (isNaN(price) || isNaN(tipPercentage) || isNaN(numPeople) || numPeople <= 0) {
            alert("Please enter valid values.");
            return;
        }

        let totalTip = (price * (tipPercentage / 100)).toFixed(2);
        let tipPerPerson = (totalTip / numPeople).toFixed(2);
        let totalAmount = (price + parseFloat(totalTip)).toFixed(2);
        let amountPerPerson = (totalAmount / numPeople).toFixed(2);

        tipAmountDisplay.innerText = `$${totalTip}`;
        tipPerPersonDisplay.innerText = `$${tipPerPerson}`;
        totalAmountDisplay.innerText = `$${totalAmount}`;
        amountPerPersonDisplay.innerText = `$${amountPerPerson}`;
    }

    function clearFields() {
        priceInput.value = "";
        tipPercentageInput.value = "";
        numPeopleInput.value = "1";

        tipAmountDisplay.innerText = "$0.00";
        tipPerPersonDisplay.innerText = "$0.00";
        totalAmountDisplay.innerText = "$0.00";
        amountPerPersonDisplay.innerText = "$0.00";
    }
});
