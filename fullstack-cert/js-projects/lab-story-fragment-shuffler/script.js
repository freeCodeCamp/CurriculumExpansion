const shuffledFragments = [
  { id: 15,text: "and, after a time, passed the place where the Hare was sleeping.", },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare,", },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow.", },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise,", },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

const compactFragments = (fragments) => {
  let compacted = [];
  let numberOfUndefined = 0;

  for (const fragment of fragments) {
    if (fragment === undefined) {
      numberOfUndefined++;
    } else {
      compacted.push(fragment);
    }
  }

  if (numberOfUndefined > 0) {
    console.log(`[COMPACTED] Removed ${numberOfUndefined} undefined fragment(s).`);
  }

  return compacted;
};

const compactedShuffledFragments = compactFragments(shuffledFragments);

const sortFragments = (fragments) => {
  let sorted = [...fragments];

  for (let i = 0; i < sorted.length; i++) {
    for (let j = i; j > 0; j--) {
      if (sorted[j - 1].id > sorted[j].id) {
        swap(sorted, j - 1, j);
      }
    }
  }

  function swap(array, index1, index2) {
    [sorted[index1], sorted[index2]] = [sorted[index2], sorted[index1]];
  }

  return sorted;
};

const sortFragments2 = (fragments) => {
  let sorted = [...fragments];
  const n = sorted.length;

  for (let i = 0; i < sorted.length - 1; i++) {
    let indexOfMaxId = 0;
    for (let j = 1; j < sorted.length - i; j++) {
      if (sorted[j].id > sorted[indexOfMaxId].id) {
        indexOfMaxId = j;
      }
    }
    swap(sorted, indexOfMaxId, sorted.length - i - 1);
  }

  function swap(array, index1, index2) {
    [sorted[index1], sorted[index2]] = [sorted[index2], sorted[index1]];
  }

  return sorted;
};

const sortedFragments = sortFragments(compactedShuffledFragments);

const dedupeFragments = (sortedFragments) => {
  const shallowCopy = [...sortedFragments];
  let deduped = [shallowCopy.shift()];
  let duplicates = [];
  let currentIdOccurrence = 1;

  for (const fragmentToInsert of shallowCopy) {
    const previousFragment = deduped.at(-1);
    if (fragmentToInsert.id === previousFragment.id) {
      currentIdOccurrence++;
    } else {
      deduped.push(fragmentToInsert);

      if (currentIdOccurrence > 1) {
        duplicates.push({ id: previousFragment.id, occurrence: currentIdOccurrence });
      }

      currentIdOccurrence = 1;
    }
  }

  for (const duplicate of duplicates) {
    console.log(`[DEDUPED] Fragment #${duplicate.id} appeared ${duplicate.occurrence} times — kept first occurrence.`);
  }

  return deduped;
};

const dedupedFragments = dedupeFragments(sortedFragments);

const fillMissingFragments = (sortedFragments) => {
  const shallowCopy = [...sortedFragments];
  let filled = [shallowCopy.shift()];

  for (const fragmentToInsert of shallowCopy) {
    const previousFragment = filled.at(-1);
    const numberOfMissingIDs = fragmentToInsert.id - 1 - previousFragment.id;
    for (let i = 1; i <= numberOfMissingIDs; i++) {
      const missingId = previousFragment.id + i;
      filled.push({ id: missingId, text: "[...]" });
      console.log(`[FILLED] Fragment #${missingId} missing — placeholder inserted.`)
    }
    filled.push(fragmentToInsert);
  }

  return filled;
};

const filledFragments = fillMissingFragments(dedupedFragments);

const assembleStory = (sortedFragments) => {
  let assembled = "";
  for (const fragment of sortedFragments) {
    assembled += fragment.text + "\n";
  }
  return assembled;
};

console.log("\nHere is the assembled story:\n");
console.log(assembleStory(filledFragments));
