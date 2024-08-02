const pattern = document.getElementById("pattern");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");
const result = document.getElementById("result");
const getFlags = () => {
    let flags = '';
    const flagArray = [caseInsensitiveFlag, globalFlag]
    flagArray.forEach((flag) => {
        if (flag.checked) flags += flag.id;
    })
    return flags
}
const testString = document.getElementById("test-string");
const testButton = document.getElementById("test-btn")
testButton.addEventListener(
    "click",
    () => {
        let matched;
        let flags = getFlags();
        const regex = new RegExp(pattern.value, flags)
        console.log(regex)
        if (flags.includes(globalFlag)) {
            testString.innerHTML = testString.innerText.replaceAll(regex, '<span class="highlight">$&</span>')
            matched = testString.innerText.matchAll(regex)
        } else {
            testString.innerHTML = testString.innerText.replace(regex, '<span class="highlight">$&</span>')
            matched = testString.innerText.match(regex);             
        }
        if (!matched) matched = 'no match';
        result.innerText = matched;
    }
)