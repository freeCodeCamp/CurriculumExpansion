document.getElementById("textInput").addEventListener("input", function () {
  let textInput = document.getElementById("textInput");
  let charCount = textInput.value.length;

  if (charCount > 50) {
    textInput.value = textInput.value.substring(0, 50);
    charCount = 50;
  }

  let charCountDisplay = document.getElementById("charCount");
  charCountDisplay.innerHTML = `Character Count: ${charCount}/50`;

  if (charCount === 50) {
    charCountDisplay.style.color = "red";
  } else {
    charCountDisplay.style.color = "darkslategray";
  }
});
