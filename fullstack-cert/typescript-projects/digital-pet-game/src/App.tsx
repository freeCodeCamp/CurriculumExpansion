import { useState, useEffect, useRef } from "react";
import "./App.css";

const StomachIconFULL = "./assets/stomach/stomach_FULL.svg";
const StomachIconHIGH = "./assets/stomach/stomach_HIGH.svg";
const StomachIconHALF = "./assets/stomach/stomach_HALF.svg";
const StomachIconLOW = "./assets/stomach/stomach_LOW.svg";
const StomachIconEMPTY = "./assets/stomach/stomach_EMPTY.svg";

const BatteryIconFULL = "./assets/battery/battery-100-svgrepo-com.svg";
const BatteryIconHIGH = "./assets/battery/battery-75-svgrepo-com.svg";
const BatteryIconHALF = "./assets/battery/battery-50-svgrepo-com.svg";
const BatteryIconLOW = "./assets/battery/battery-25-svgrepo-com.svg";
const BatteryIconEMPTY = "./assets/battery/battery-0-svgrepo-com.svg";

const AUDIO_ENABLED = false;

let audioError: HTMLAudioElement | null = null;
let audioBoop: HTMLAudioElement | null = null;

if (AUDIO_ENABLED) {
  const audioError = new Audio("http://localhost:8000/Error.mp3");
  const audioBoop = new Audio("http://localhost:8000/Boop.mp3");
}

const playAudio = (audio: HTMLAudioElement | null): void => {
  if (!AUDIO_ENABLED || audio === null) return;

  audio.currentTime = 0;
  audio.play();
};

type EnumDictionary<T extends string | symbol | number, U> = {
  [K in T]: U;
};

enum BatteryThreshold {
  FULL = 100,
  HIGH = 75,
  HALF = 50,
  LOW = 25,
  EMPTY = 0,
}

const BatteryIconDict: EnumDictionary<BatteryThreshold, React.JSX.Element> = {
  [BatteryThreshold.FULL]: <img src={BatteryIconFULL} />,
  [BatteryThreshold.HIGH]: <img src={BatteryIconHIGH} />,
  [BatteryThreshold.HALF]: <img src={BatteryIconHALF} />,
  [BatteryThreshold.LOW]: <img src={BatteryIconLOW} />,
  [BatteryThreshold.EMPTY]: <img src={BatteryIconEMPTY} />,
};

interface BatteryIconProps {
  batteryThreshold: BatteryThreshold;
}

const BatteryIcon: React.FC<BatteryIconProps> = ({
  batteryThreshold,
}): React.ReactElement => {
  return <div>{BatteryIconDict[batteryThreshold]}</div>;
};

enum HungerThreshold {
  FULL = 100,
  HIGH = 75,
  HALF = 50,
  LOW = 25,
  EMPTY = 0,
}

const HungerIconDict: EnumDictionary<HungerThreshold, React.JSX.Element> = {
  [HungerThreshold.FULL]: <img src={StomachIconFULL} />,
  [HungerThreshold.HIGH]: <img src={StomachIconHIGH} />,
  [HungerThreshold.HALF]: <img src={StomachIconHALF} />,
  [HungerThreshold.LOW]: <img src={StomachIconLOW} />,
  [HungerThreshold.EMPTY]: <img src={StomachIconEMPTY} />,
};

interface HungerIconProps {
  hungerThreshold: HungerThreshold;
}

const HungerIcon: React.FC<HungerIconProps> = ({
  hungerThreshold,
}): React.ReactElement => {
  return <div>{HungerIconDict[hungerThreshold]}</div>;
};

//TODO: I've got to study up on typescript more. I'd like to show off a more complex example
//  of how to represent a CSS type with typescript, so my initial thought was to create something
//  like colour. Long story short, this is a nightmare, and if it becomes a significant challenge
//  for me, I imagine it would be far too much for the learners at this point in their journey.
//  I'm leaving this for the time being while I sit on it, maybe there's an elegant, teachable
//  solution that I just haven't worked out yet, but I'm likely going to omit this entirely.
//  Note that the primary sisue with this example is that if we make a type that tries to encompass
//  all valid input for this type, Typescript states the union type is too complex to represent.
type RGB = `rbg(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number})`;
type HEX = `#${string}`;

// Turns out I'm able to teach this with CSS units, if this is something we'd like to include.
//  I'm of the opinion that this is simple enough conceptually to understand, and if we'd
//  like to make it appear less imposing we could of course reduce the number of units covered.
//  An example involving px, %, and possible vw/vh would be sufficient, without appearing to
//  be as complex as the complete (I think) example of all css units.
type CSSUnitAbsolute = "cm" | "mm" | "in" | "px" | "pt" | "pc";
type CSSUnitRelative =
  | "em"
  | "ex"
  | "ch"
  | "rem"
  | "vw"
  | "vh"
  | "vmin"
  | "vmax"
  | "%";
type CSSUnit = CSSUnitAbsolute | CSSUnitRelative;
type CSSDimension = `${number}${CSSUnit}`;

interface HeartPathProps {
  fill: string;
  transform?: string;
}

const HeartPath: React.FC<HeartPathProps> = ({
  fill,
  transform,
}): React.ReactElement => (
  <path
    fill={fill}
    transform={transform}
    d="M12 21s-6-4.35-9.33-8.22C-.5 7.39 3.24 1 8.4 4.28 10.08 5.32 12 7.5 12 7.5s1.92-2.18 3.6-3.22C20.76 1 24.5 7.39 21.33 12.78 18 16.65 12 21 12 21z"
  />
);

// Enumerators notably do not support being `extended`. It may be a good idea to have
//  the learners start with a base `StatusThreshold` enum, and then have them modify
//  one later into the lab such that they need to create a new enum to account for that
//  case, and the new enum will, of course, need to be written from scratch.
enum HappinessThreshold {
  FULL = 100,
  HIGH = 75,
  HALF = 50,
  LOW = 25,
  EMPTY = 0,
}

interface HappinessIconProperties {
  scale: number;
  color: string;
}

const happinessIconPropertiesDict: Record<
  HappinessThreshold,
  HappinessIconProperties
> = {
  [HappinessThreshold.FULL]: { scale: 1, color: "red" },
  [HappinessThreshold.HIGH]: { scale: 0.8, color: "red" },
  [HappinessThreshold.HALF]: { scale: 0.5, color: "red" },
  [HappinessThreshold.LOW]: { scale: 0.2, color: "red" },
  [HappinessThreshold.EMPTY]: { scale: 0.1, color: "red" },
};

interface HappinessIconProps {
  happinessThreshold: HappinessThreshold;
}

const getTransformForScale = (
  scale: number,
  width: number,
  height: number,
): string => {
  let translateX: number = (width * (1 - scale)) / 2;
  let translateY: number = (height * (1 - scale)) / 2;

  return `translate(${translateX}, ${translateY}) scale(${scale})`;
};

const HappinessIcon: React.FC<HappinessIconProps> = ({
  happinessThreshold,
}): React.ReactElement => {
  const { scale, color } = happinessIconPropertiesDict[happinessThreshold];
  return (
    <div id="happiness-icon">
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill={"red"}>
        <HeartPath fill={"black"} />
        <g transform={getTransformForScale(scale, 24, 24)}>
          <HeartPath fill={color} />
        </g>
      </svg>
    </div>
  );
};

type Size = "Tiny" | "Small" | "Medium" | "Large" | "Huge" | "Gargantuan";
type Type = any;

enum PetAction {
  NONE,
  EAT,
  PLAY,
  SLEEP,
  HALT,
}

enum MiscAction {
  FACT,
}

enum PetState {
  IDLE = "Idle",
  DEATH = "Death",
  SLEEP = "Sleep",
  WAKE = "Wake",
  WALK = "Walk",
  TURN = "Turn",
  JUMP = "Jump",
  BITE = "Attack_Bite",
}

interface MonsterImages {
  Idle: string;
  Death: string;
  Sleep: string;
  Wake: string;
  Walk: string;
  Turn: string;
  Jump: string;
  Attack_Bite: string;
}

interface MonsterDetail {
  index: string;
  name: string;
  size: Size;
  type: Type;
  alignment: string;
  armor_class: any[];
  images: MonsterImages;
}

interface MonsterSummary {
  index: string;
  name: string;
  url: string;
}

interface MonstersList {
  count: number;
  results: MonsterSummary[];
}

// TODO: swap with Freecodecamp's api
const monstersBaseUri = "https://www.dnd5eapi.co/api/2014/monsters/";

const handleFetchErrors = (response: Response) => {
  if (!response.ok) {
    throw new Error("Error retrieving data: " + response.statusText);
  }
};

const getMonsters = async () => {
  const response = await fetch(monstersBaseUri);
  handleFetchErrors(response);
  return (await response.json()) as MonstersList;
};

const getMonsterDetail = async (monsterName: string) => {
  const response = await fetch(`${monstersBaseUri}${monsterName}`);
  handleFetchErrors(response);
  return (await response.json()) as MonsterDetail;
};

const loadMonsterArt = (): MonsterImages => ({
  Idle: "assets/mimic/Idle.webp",
  Death: "assets/mimic/Death.webp",
  Sleep: "assets/mimic/Hide.webp",
  Wake: "assets/mimic/Reveal.webp",
  Walk: "assets/mimic/Walk.webp",
  Turn: "assets/mimic/Turn.webp",
  Jump: "assets/mimic/Jump.webp",
  Attack_Bite: "assets/mimic/Attack_Bite.webp",
});

interface Pet {
  name: string;
  happiness: number;
  hunger: number;
  energy: number;
  species: string;
  action: PetAction;
  images: MonsterImages;
  state: PetState;
}

const saveKey = "pet";

enum Button {
  LEFT,
  CENTER,
  RIGHT,
}

interface PetActionCarouselProps {
  options: { name: string; action: PetAction | MiscAction }[];
  buttonPressRegistrar: (callback: (buttonType: Button) => void) => void;
  doAction: (action: PetAction | MiscAction) => void;
}

const PetActionCarousel: React.FC<PetActionCarouselProps> = ({
  options,
  buttonPressRegistrar,
  doAction,
}): React.JSX.Element => {
  const VISIBLE_TIMEOUT = 5 * 1000;

  const [selectedActionIdx, setSelectedActionIdx] = useState<number>(0);
  const selectedActionIdxRef = useRef(selectedActionIdx);
  useEffect(() => {
    selectedActionIdxRef.current = selectedActionIdx;
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const visibleRef = useRef<boolean>(isVisible);
  useEffect(() => {
    visibleRef.current = isVisible;
  });
  const visibilityTimerRef = useRef<number>(-1);

  const createVisibilityTimer = () => {
    setIsVisible(true);
    clearTimeout(visibilityTimerRef.current);
    visibilityTimerRef.current = setTimeout(() => {
      setIsVisible(false);
      visibilityTimerRef.current = -1;
    }, VISIBLE_TIMEOUT);
  };

  useEffect(() => {
    buttonPressRegistrar((buttonType: Button) => {
      createVisibilityTimer();
      if (!visibleRef.current) {
        return;
      }
      console.log(Button[buttonType]);

      if (buttonType === Button.CENTER) {
        doAction(options[selectedActionIdxRef.current].action);
      }
      setSelectedActionIdx((idx) => {
        switch (buttonType) {
          case Button.LEFT:
            let newLIdx = idx - 1;
            if (newLIdx < 0) newLIdx = options.length - 1;
            return newLIdx;
          case Button.RIGHT:
            let newRIdx = idx + 1;
            if (newRIdx >= options.length) newRIdx = 0;
            return newRIdx;
          case Button.CENTER:
            return idx;
        }
      });
    });
  }, []);

  if (options?.length === 0) return <></>;

  return (
    <div className="action-carousel">
      <p>{isVisible ? options[selectedActionIdx].name : ""}</p>
    </div>
  );
};

export function App() {
  //TODO: The pet has a lot of functionality tied to it that's currently
  //  just inlined with the rest of the App. Do we want to break it into
  //  a hook? Are learner's already expected to have enough React knowledge
  //  to consider this or should we keep it simple with in-lines?
  let [pet, setPet] = useState<Pet>({
    name: "",
    happiness: 100,
    hunger: 0,
    energy: 100,
    species: "",
    action: PetAction.NONE,
    images: loadMonsterArt(),
    state: PetState.IDLE,
  });
  let petRef = useRef<Pet>(pet);
  useEffect(() => {
    petRef.current = pet;
  }, [pet]);

  const [fact, setFact] = useState<string | null>("");
  const [factVisible, setFactVisible] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  //TODO: I think this is almost definitely too complicated. I imagine we'll
  //  revert and have each button assigned to a particular action if I can't
  //  figure out a simpler implementation. We'll be one short of the "fun fact"
  //  functionality, but we can just add a fourth button to the device.
  const [buttonSubscribers, setButtonSubscribers] = useState<
    ((button: Button) => void)[]
  >([]);
  const registerButtons = (callback: (button: Button) => void) => {
    setButtonSubscribers([...buttonSubscribers, callback]);
  };
  const emitButtonPress = (button: Button) => {
    buttonSubscribers.forEach((callback) => callback(button));
  };

  //TODO: Integrate with the FCC API once it's ready.
  useEffect(() => {
    getMonsterDetail("mimic").then((monster: MonsterDetail) => {
      setPet({
        ...pet,
        species: monster.name,
      });
      setFact(
        "Mimics have an size of " +
          monster.size +
          " according to the DND 5E rule book.",
      );
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPet((pet) => ({
        ...pet,
        happiness: Math.max(pet.happiness - 5, 0),
        hunger: Math.min(pet.hunger + 5, 100),
      }));
    }, 30 * 1000); // TODO : These things use minutes but it's taking too long

    return () => clearInterval(interval);
  }, []);

  const setPetActionTimeout = () => {
    setTimeout(() => {
      setPet((pet) => ({
        ...pet,
        state: PetState.IDLE,
        action: PetAction.NONE,
      }));
    }, 2 * 1000);
  };

  const setMiscFactTimeout = () => {
    setTimeout(() => {
      setPet((pet) => ({
        ...pet,
        state: PetState.IDLE,
        action: PetAction.NONE,
      }));
      setFactVisible(false);
    }, 10 * 1000);
  };

  function doAction(action: PetAction | MiscAction) {
    if (petRef.current.action !== PetAction.NONE) {
      playAudio(audioError);
      return;
    }
    playAudio(audioBoop);
    switch (action) {
      case PetAction.EAT:
        setPetActionTimeout();
        feedPet();
        break;
      case PetAction.SLEEP:
        setPetActionTimeout();
        restPet();
        break;
      case PetAction.PLAY:
        setPetActionTimeout();
        playWithPet();
        break;
      case MiscAction.FACT:
        setMiscFactTimeout();
        setPet((pet) => ({
          ...pet,
          action: PetAction.HALT,
        }));
        setFactVisible(true);
        break;
    }
  }

  function feedPet() {
    //TODO: consider multiple food types if time permits
    //  The options here off the top of my head are a random
    //  food item for each feeding, or another sub menu that
    //  lets you choose the type of food.
    const myFoodFill = 10;
    setPet((pet) => ({
      ...pet,
      hunger: Math.max(pet.hunger - myFoodFill, 0),
      state: PetState.BITE,
      action: PetAction.EAT,
    }));
    pet.hunger -= myFoodFill;
  }

  function playWithPet() {
    const myHappinessIncrease = 5;
    const energyDecrease = 5;
    setPet((pet) => ({
      ...pet,
      happiness: Math.min(pet.happiness + myHappinessIncrease, 100),
      energy: Math.max(pet.energy - energyDecrease, 0),
      state: PetState.JUMP,
      action: PetAction.PLAY,
    }));
  }

  function restPet() {
    const hungerIncrease = 5;
    const energyIncrease = 5;
    setPet((pet) => ({
      ...pet,
      hunger: Math.min(pet.hunger + hungerIncrease, 100),
      energy: Math.min(pet.energy + energyIncrease, 100),
      state: PetState.SLEEP,
      action: PetAction.SLEEP,
    }));
  }

  function getEnergyThreshold() {
    if (pet.energy >= 90) return BatteryThreshold.FULL;
    if (pet.energy >= 75) return BatteryThreshold.HIGH;
    if (pet.energy >= 50) return BatteryThreshold.HALF;
    if (pet.energy > 10) return BatteryThreshold.LOW;
    return BatteryThreshold.EMPTY;
  }

  function getHungerThreshold() {
    if (pet.hunger > 90) return HungerThreshold.EMPTY;
    if (pet.hunger >= 75) return HungerThreshold.LOW;
    if (pet.hunger >= 50) return HungerThreshold.HALF;
    if (pet.hunger > 10) return HungerThreshold.HIGH;
    return HungerThreshold.FULL;
  }

  function getHappinessThreshold() {
    if (pet.happiness >= 90) return HappinessThreshold.FULL;
    if (pet.happiness >= 75) return HappinessThreshold.HIGH;
    if (pet.happiness >= 50) return HappinessThreshold.HALF;
    if (pet.happiness > 10) return HappinessThreshold.LOW;
    return HappinessThreshold.EMPTY;
  }

  function pressLeft() {
    playAudio(audioBoop);
    emitButtonPress(Button.LEFT);
  }

  function pressCenter() {
    emitButtonPress(Button.CENTER);
  }

  function pressRight() {
    playAudio(audioBoop);
    emitButtonPress(Button.RIGHT);
  }

  function savePetData() {
    localStorage.setItem(saveKey, JSON.stringify(pet));
  }

  function loadPetData() {
    pet = JSON.parse(localStorage.getItem(saveKey) || "");
    if (typeof pet !== "undefined") {
      setPet(pet);
      setGameStarted(true);
    }
  }

  function startGame() {
    const petName = (document.getElementById("pet-name") as HTMLInputElement)
      .value;

    setPet({
      ...pet,
      name: petName,
    });
    setGameStarted(true);
  }

  return (
    <>
      <header>
        <h1>Digital Pet Game</h1>
        <p>Take care of your virtual companion!</p>
      </header>
      <div className="start-game-container">
        <div className="pet-shell">
          <div className="pet-screen">
            <div
              className="pet-fact"
              style={{ visibility: factVisible ? "visible" : "hidden" }}
            >
              {fact}
            </div>
            <div className="pet-hud">
              <div id="pet-species">MIMIC</div>
              <HappinessIcon happinessThreshold={getHappinessThreshold()} />
              <HungerIcon hungerThreshold={getHungerThreshold()} />
              <BatteryIcon batteryThreshold={getEnergyThreshold()} />
            </div>
            <div className="pet-sprite">
              <img src={pet.images[pet.state]} />
            </div>
            <PetActionCarousel
              buttonPressRegistrar={registerButtons}
              doAction={doAction}
              options={[
                { name: "FEED", action: PetAction.EAT },
                { name: "PLAY", action: PetAction.PLAY },
                { name: "NAP", action: PetAction.SLEEP },
                { name: "FACT", action: MiscAction.FACT },
              ]}
            />
          </div>
          <div className="pet-buttons">
            <button
              onClick={pressLeft}
              className="pet-button pet-buttons-left"
            ></button>
            <button
              onClick={pressCenter}
              className="pet-button pet-buttons-center"
            ></button>
            <button
              onClick={pressRight}
              className="pet-button pet-buttons-right"
            ></button>
          </div>
        </div>

        {!gameStarted ? (
          <div id="start-questions">
            <form>
              <p>
                What is your pet's name?{" "}
                <input
                  id="pet-name"
                  required={true}
                  pattern="[A-Za-z0-9]{1,20}"
                />
              </p>
              <button id="set-name-btn" onClick={startGame}>
                Start Game
              </button>
            </form>
          </div>
        ) : (
          <div id="hud">
            <h2>Pet Name: {pet.name}</h2>
            <p id="pet-species">Species: {pet.species}</p>
            <p id="happiness-meter">Happiness: {pet.happiness}</p>
            <p id="hunger-meter">Hunger: {pet.hunger}</p>
            <p id="energy-meter">Energy: {pet.energy}</p>
          </div>
        )}
        <p id="pet-fact">Pet Fact: {fact}</p>
        <button id="save-game" onClick={savePetData}>
          Save
        </button>
        <button id="load-game" onClick={loadPetData}>
          Load
        </button>
        <p>Hint: Double click each button to perform its action</p>
      </div>
    </>
  );
}
