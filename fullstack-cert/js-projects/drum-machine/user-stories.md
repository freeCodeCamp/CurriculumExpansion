1. You should have a `div` element with an id of `drum-machine` that contains all other elements.

2. Inside the `#drum-machine` element you should have another `div` with an id of `pad-bank`.

3. You should have a `p` element with an id of `display`.

4. You should have 9 clickable drum pad elements each with a class of `drum-pad`, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`. The drum pads MUST be in this order.

5. Each `.drum-pad` should have an audio element which has a class of `clip`, a `src` attribute that points to an audio clip, and an id corresponding to the inner text of its parent `.drum-pad` element (e.g. `id="Q"`, `id="W"`, `id="E"` etc.).

6. When you click on a `.drum-pad` element, the audio clip contained in its child audio element should be triggered.

7. When you press the trigger key associated with each `.drum-pad`, the audio clip contained in its child audio element should be triggered (e.g. pressing the `Q` key should trigger the drum pad which contains the string `Q`, pressing the `W` key should trigger the drum pad which contains the string `W`, etc.).

8. When a `.drum-pad` is triggered, you should display a string describing the associated audio clip as the inner text of the `#display` element (each string must be unique).

9. When you press the power button, the text inside the `#display` element should be replaced with a string indicating the power is off.

Here are some audio samples you can use for your drum machine:

[Heater 1](https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3)
[Heater 2](https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3)
[Heater 3](https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3)
[Heater 4](https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3)
[Clap](https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3)
[Open-HH](https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3)
[Kick-n'-Hat](https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3)
[Kick](https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3)
[Closed-HH](https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3)
