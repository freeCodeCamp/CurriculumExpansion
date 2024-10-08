const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const emailAddress = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaints = document.querySelectorAll('input[name="complaint"]');
const complaintDescription = document.getElementById("complaint-description");
const complaintTextAreaDiv = document.getElementById("complaint-description-container");
const solutions = document.querySelectorAll('input[name="solutions"]');
const solutionDescription = document.getElementById("solution-description");
const solutionTextAreaDiv = document.getElementById("solution-description-container");
const submitBtn = document.getElementById("submit-btn");
const messageBox = document.getElementById("message-box");
const clearBtn = document.getElementById("clear-btn");

const hideTextareas = () => {
    complaintTextAreaDiv.style.display = "none";
    solutionTextAreaDiv.style.display = "none";
}

hideTextareas();

const formFields = {
    "full-name": fullName,
    "email": emailAddress,
    "order-no": orderNo,
    "product-code": productCode,
    "quantity": quantity,
    "complaints-group": Array.from(complaints),
    "complaint-description": complaintDescription,
    "solutions-group": Array.from(solutions),
    "solution-description": solutionDescription
}

const clearForm = () => {
    Object.entries(formFields).forEach(entry => {
        const [key, val] = entry;
        if (Array.isArray(val)) {
            val.forEach(i => i.checked = false);
        } else {
            val.value = "";
        }
        hideTextareas();
        messageBox.innerText = "";
        document.getElementById(key).style.borderColor = "rgb(118, 118, 118)";
    })
}

const validateForm = () => {
    const complaintsArr = Array.from(complaints).map(i => i.checked);
    const solutionsArr = Array.from(solutions).map(i => i.checked);
    const validationObject = {
        "full-name": Boolean(fullName.value.trim()),
        "email": /^\S+@\S+\.\S+$/.test(emailAddress.value.trim()),
        "order-no": /^2024\d{6}$/.test(orderNo.value.trim()),
        "product-code": /[A-Z]{2}\d{2}-[A-Z]\d{3}-[A-Z]{2}\d/i.test(productCode.value.trim()),
        "quantity": Number(quantity.value.trim()) > 0,
        "complaints-group": complaintsArr.some(i => i),
        "complaint-description": null,
        "solutions-group": solutionsArr.some(i => i),
        "solution-description": null
    }

    if (complaintsArr[3]) {
        complaintTextAreaDiv.style.display = "block";
        const complaintsDescriptionVal = complaintDescription.value.trim();
        if (complaintsDescriptionVal.length < 20) {
            validationObject["complaint-description"] = false;
        } else {
            validationObject["complaint-description"] = true;
        }
    } else {
        complaintTextAreaDiv.style.display = "none";
    }
    if (solutionsArr[2]) {
        solutionTextAreaDiv.style.display = "block";
        const solutionDescriptionVal = solutionDescription.value.trim();
        if (solutionDescriptionVal.length < 20) {
            validationObject["solution-description"] = false;
        } else {
            validationObject["solution-description"] = true;
        }
    } else {
        solutionTextAreaDiv.style.display = "none";
    }
    if (validationObject["complaint-description"] === null) delete validationObject["complaint-description"];
    if (validationObject["solution-description"] === null) delete validationObject["solution-description"];

    return validationObject;
}

clearBtn.addEventListener("click", clearForm);

Object.keys(formFields).forEach(key => {
    document.getElementById(key).addEventListener("change", (e) => {
        const validationObject = validateForm();
        if (Object.values(validationObject).every(val => val)) messageBox.innerText = "";
        if (!validationObject[key]) {
            document.getElementById(key).style.borderColor = "red";
        } else {
            document.getElementById(key).style.borderColor = "green";
        }
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const validationObject = validateForm();
    const isValid = Object.values(validationObject).every(i => i);
    if (!isValid) {
        messageBox.innerText = "Please, fill out the required fields correctly before submitting.";
        Object.keys(validationObject).forEach(key => {
            if (!validationObject[key]) {
                document.getElementById(key).style.borderColor = "red";
            } else {
                document.getElementById(key).style.borderColor = "green";
            }
        });
    } else {
        messageBox.innerText = "";
        alert("Form successfully submitted.");
        location.reload()
    }
});
