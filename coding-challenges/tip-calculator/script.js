document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateBtn");
    const clearButton = document.getElementById("clearBtn");

    calculateButton.addEventListener("click", calculateTip);
    clearButton.addEventListener("click", clearFields);
});

function calculateTip() {
    let price = parseFloat(document.getElementById("price").value);
    let tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    let numPeople = parseInt(document.getElementById("numPeople").value);

    if (isNaN(price) || isNaN(tipPercentage) || isNaN(numPeople) || numPeople <= 0) {
        alert("Please enter valid values.");
        return;
    }

    let totalTip = (price * (tipPercentage / 100)).toFixed(2);
    let tipPerPerson = (totalTip / numPeople).toFixed(2);
    let totalAmount = (price + parseFloat(totalTip)).toFixed(2);
    let amountPerPerson = (totalAmount / numPeople).toFixed(2);

    document.getElementById("tipAmount").innerText = `$${totalTip}`;
    document.getElementById("tipPerPerson").innerText = `$${tipPerPerson}`;
    document.getElementById("totalAmount").innerText = `$${totalAmount}`;
    document.getElementById("amountPerPerson").innerText = `$${amountPerPerson}`;
}

function clearFields() {
    document.getElementById("price").value = "";
    document.getElementById("tipPercentage").value = "";
    document.getElementById("numPeople").value = "1";
    document.getElementById("tipAmount").innerText = "$0.00";
    document.getElementById("tipPerPerson").innerText = "$0.00";
    document.getElementById("totalAmount").innerText = "$0.00";
    document.getElementById("amountPerPerson").innerText = "$0.00";
}
