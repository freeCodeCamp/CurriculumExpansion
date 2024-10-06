const arrayContainer = document.getElementById("array-container");
const generateArrayBtn = document.getElementById("generate-btn");
const sortArrayBtn = document.getElementById("sort-btn");
const arrayLength = 5;
const minVal = 1;
const maxVal = 100;
const isStart = () => arrayContainer.children.length === 1;
const clearArrayContainer = () => { arrayContainer.innerHTML = '<div id="starting-array-container"></div>' };
const showSortBtn = () => {sortArrayBtn.style.display = "inline-block"};
const hideSortBtn = () => {sortArrayBtn.style.display = "none"};
const generateElement = () => Math.floor(Math.random() * maxVal + minVal);
const generateArray = () => Array.from({ length: arrayLength }, generateElement);
const fillArrContainer = (arr, container) => {
    container.innerHTML = "";
    arr.forEach(i => {
        const el = document.createElement("span");
        el.innerText = i;
        el.id = `number-${i}`
        container.appendChild(el);
    })
}
const isOrdered = (el1, el2) => el1 < el2;

const swapElements = (arr, n = 0) => {
    if (n < arr.length - 1 && !isOrdered(arr[n], arr[n + 1])) {
        const temp = arr[n];
        arr[n] = arr[n + 1];
        arr[n + 1] = temp;
    }
}
const getLastChildren = () => arrayContainer.lastElementChild;
const getLastArr = () => {
    const els = Array.from(getLastChildren().children);
    const arr = els.map(el => Number(el.id.replace("number-", "")));
    return arr;
}
const generateContainer = () => {
    const container = document.createElement("div");
    arrayContainer.appendChild(container);
    return container;
}
const highligthCurrentEls = (container, n = 0) => {
    const children = container.children;
    children[n].style.border = "2px dashed red";
    children[n + 1].style.border = "2px dashed red";
}

const highlightSorted = () => {
    getLastChildren().style.border = "4px solid green";
}

const bubbleSort = () => {
    let swapped = true;
    while (swapped) {
        const startingArr = getLastArr();
        startingArr.forEach((_, i) => {
            if (i + 1 < arrayLength) {
                highligthCurrentEls(getLastChildren(), i);
                const arr = getLastArr();
                swapElements(arr, i);
                fillArrContainer(arr, generateContainer());
            }
        })
        const lastArr = getLastArr()
        if (startingArr.every((el, i) => el === lastArr[i])) swapped = false;
    }
}


generateArrayBtn.addEventListener("click", () => {
    if (!isStart()) {
        clearArrayContainer();
    }
    fillArrContainer(generateArray(), document.getElementById("starting-array-container"));
    showSortBtn();
});

sortArrayBtn.addEventListener("click", () => {
    bubbleSort();
    highlightSorted();
    hideSortBtn();
})

