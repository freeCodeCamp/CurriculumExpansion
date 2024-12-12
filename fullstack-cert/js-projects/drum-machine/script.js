const projectName = 'drum-machine';

const bankOne = [
  { keyCode: 81, keyTrigger: 'Q', id: 'Heater-1', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { keyCode: 87, keyTrigger: 'W', id: 'Heater-2', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { keyCode: 69, keyTrigger: 'E', id: 'Heater-3', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { keyCode: 65, keyTrigger: 'A', id: 'Heater-4', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { keyCode: 83, keyTrigger: 'S', id: 'Clap', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { keyCode: 68, keyTrigger: 'D', id: 'Open-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { keyCode: 90, keyTrigger: 'Z', id: "Kick-n'-Hat", url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { keyCode: 88, keyTrigger: 'X', id: 'Kick', url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { keyCode: 67, keyTrigger: 'C', id: 'Closed-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }
];

const bankTwo = [
  { keyCode: 81, keyTrigger: 'Q', id: 'Chord-1', url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },
  { keyCode: 87, keyTrigger: 'W', id: 'Chord-2', url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },
  { keyCode: 69, keyTrigger: 'E', id: 'Chord-3', url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },
  { keyCode: 65, keyTrigger: 'A', id: 'Shaker', url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },
  { keyCode: 83, keyTrigger: 'S', id: 'Open-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },
  { keyCode: 68, keyTrigger: 'D', id: 'Closed-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },
  { keyCode: 90, keyTrigger: 'Z', id: 'Punchy-Kick', url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },
  { keyCode: 88, keyTrigger: 'X', id: 'Side-Stick', url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
  { keyCode: 67, keyTrigger: 'C', id: 'Snare', url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' }
];

const state = {
  power: true,
  display: ' ',
  currentPadBank: bankOne,
  currentPadBankId: 'Heater Kit',
  sliderVal: 0.3
};

const display = document.getElementById('display');

const setDisplay = (text) => {
  if (state.power) {
    state.display = text;
    display.innerText = text;
  }
};

const adjustVolume = (e) => {
  if (state.power) {
    state.sliderVal = e.target.value;
    setDisplay(`Volume: ${Math.round(e.target.value * 100)}`);
    setTimeout(() => setDisplay(' '), 1000);
    document.querySelectorAll('.clip').forEach(sound => {
      sound.volume = state.sliderVal;
    });
  }
};

const activatePad = (pad) => {
  pad.classList.add('active');
  setTimeout(() => pad.classList.remove('active'), 100);
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
  const padBank = document.querySelector('.pad-bank');
  padBank.innerHTML = '';

  state.currentPadBank.forEach(drum => {
    const pad = document.createElement('div');
    pad.classList.add('drum-pad');
    pad.id = drum.id;
    pad.innerText = drum.keyTrigger;

    const audio = document.createElement('audio');
    audio.classList.add('clip');
    audio.id = drum.keyTrigger;
    audio.src = drum.url;
    pad.appendChild(audio);

    pad.addEventListener('click', () => playSound(drum.keyTrigger, drum.id.replace(/-/g, ' ')));
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === drum.keyCode) playSound(drum.keyTrigger, drum.id.replace(/-/g, ' '));
    });

    padBank.appendChild(pad);
  });
};

const powerControl = () => {
  state.power = !state.power;
  setDisplay(' ');
  document.querySelector('.power-control .inner').style.float = state.power ? 'right' : 'left';
};

const selectBank = () => {
  if (!state.power) return;
  state.currentPadBank = state.currentPadBankId === 'Heater Kit' ? bankTwo : bankOne;
  state.currentPadBankId = state.currentPadBankId === 'Heater Kit' ? 'Smooth Piano Kit' : 'Heater Kit';
  setDisplay(state.currentPadBankId);
  renderPadBank();
  document.querySelector('.bank-control .inner').style.float = state.currentPadBankId === 'Heater Kit' ? 'left' : 'right';
};

document.querySelector('.power-control').addEventListener('click', powerControl);
document.querySelector('.bank-control').addEventListener('click', selectBank);
document.querySelector('.volume-slider input').addEventListener('input', adjustVolume);

renderPadBank();