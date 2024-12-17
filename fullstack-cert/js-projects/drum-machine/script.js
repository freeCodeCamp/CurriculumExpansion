const projectName = "drum-machine";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3"
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://cdn.freecodecamp.org/curriculum/drum/Chord_1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://cdn.freecodecamp.org/curriculum/drum/Chord_2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://cdn.freecodecamp.org/curriculum/drum/Chord_3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://cdn.freecodecamp.org/curriculum/drum/Give_us_a_light.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://cdn.freecodecamp.org/curriculum/drum/Dry_Ohh.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://cdn.freecodecamp.org/curriculum/drum/Bld_H1.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://cdn.freecodecamp.org/curriculum/drum/punchy_kick_1.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://cdn.freecodecamp.org/curriculum/drum/side_stick_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://cdn.freecodecamp.org/curriculum/drum/Brk_Snr.mp3"
  }
];

const state = {
  power: true,
  display: " ",
  currentPadBank: bankOne,
  currentPadBankId: "Heater Kit",
  sliderVal: 0.3
};

const display = document.getElementById("display");

const setDisplay = (text) => {
  state.display = text;
  display.innerText = text;
};

const adjustVolume = (e) => {
  if (state.power) {
    state.sliderVal = e.target.value;
    setDisplay(`Volume: ${Math.round(e.target.value * 100)}`);
    setTimeout(() => setDisplay(" "), 1000);
    document.querySelectorAll(".clip").forEach((sound) => {
      sound.volume = state.sliderVal;
    });
  }
};

const activatePad = (pad) => {
  pad.classList.add("active");
  setTimeout(() => pad.classList.remove("active"), 100);
};

const playSound = (id, name) => {
  if (!state.power) return;

  const sound = document.getElementById(id);
  sound.currentTime = 0;
  sound.play();
  activatePad(sound.parentNode);
  setDisplay(name);
};

const renderPadBank = () => {
  const padBank = document.querySelector(".pad-bank");
  padBank.innerHTML = "";

  state.currentPadBank.forEach((drum) => {
    const pad = document.createElement("div");
    pad.classList.add("drum-pad");
    pad.id = drum.id;
    pad.innerText = drum.keyTrigger;

    const audio = document.createElement("audio");
    audio.classList.add("clip");
    audio.id = drum.keyTrigger;
    audio.src = drum.url;
    pad.appendChild(audio);

    pad.addEventListener("click", () =>
      playSound(drum.keyTrigger, drum.id.replace(/-/g, " "))
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === drum.keyTrigger.toLowerCase())
        playSound(drum.keyTrigger, drum.id.replace(/-/g, " "));
    });

    padBank.appendChild(pad);
  });
};

const powerControl = () => {
  state.power = !state.power;
  document.getElementById("power-status").textContent = state.power
    ? "On"
    : "Off";

  setDisplay("");

  const powerSlider = document.querySelector(".power-control .select .inner");
  powerSlider.style.left = state.power ? "calc(100% - 18px)" : "0";
};

const selectBank = () => {
  if (!state.power) return;
  setDisplay(" ");
  state.currentPadBank =
    state.currentPadBankId === "Heater Kit" ? bankTwo : bankOne;
  state.currentPadBankId =
    state.currentPadBankId === "Heater Kit" ? "Smooth Piano Kit" : "Heater Kit";

  renderPadBank();
  document.getElementById("current-bank").textContent =
    state.currentPadBankId === "Heater Kit" ? "Heater Kit" : "Smooth Piano Kit";
  const bankControl = document.querySelector(".bank-control .select .inner");
  bankControl.style.left =
    state.currentPadBankId === "Heater Kit" ? "calc(100% - 18px)" : "0";
};

document
  .querySelector(".power-control")
  .addEventListener("click", powerControl);
document.querySelector(".bank-control").addEventListener("click", selectBank);
document
  .querySelector(".volume-slider input")
  .addEventListener("input", adjustVolume);

renderPadBank();
