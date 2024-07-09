const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C"
    "#616A6B"
    "#4A235A"
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
  ];
  
  function getRandomIndex() {
    const randomIndex = darkColorsArr.length * math.random();
    return randomIndex;
  }

  console.log(getRandomIndex())
  
  const body = document.queryselector("body");
  const bgHexCodeSpanElement = document.querySelector("bg-hex-code");
  console.log(bgHexCodeSpanElement)
  
  function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex];
  
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  const btn = document.querySelector("#click-btn");
  
  btn.onclick = changeBackgroundColor;