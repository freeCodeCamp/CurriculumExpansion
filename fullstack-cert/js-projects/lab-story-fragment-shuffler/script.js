const shuffledStoryFragments = [
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
  { id: 4, text: '"and I get there sooner than you think.' },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise,", },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

const removeEmptyFragments = (fragments) => {
  // guards against sparse arrays by ignoring empty elements and logging warnings
  let fragmentsWithoutUndefinedElements = [];

  for (let i = 0; i < fragments.length; i++) {
    if (fragments[i] === undefined) {
      console.log(
        `WARNING: The array contains an undefined element at index ${i}.`,
      );
    } else {
      fragmentsWithoutUndefinedElements.push(fragments[i]);
    }
  }

  return fragmentsWithoutUndefinedElements;
};

const shuffledStoryFragmentsWithoutEmptyElements = removeEmptyFragments(shuffledStoryFragments);

const sortFragments = (fragments) => {
  // returns a new array ordered by id
  let sortedFragments = [fragments.shift()];

  for (const fragment of fragments) {
    for (let i = 0; i < sortedFragments.length; i++) {
      if (fragment.id < sortedFragments[i].id) {
        sortedFragments.splice(i, 0, fragment);
        break;
      } else if (i === sortedFragments.length - 1) {
        sortedFragments.push(fragment);
        break;
      }
    }
  }

  return sortedFragments;
};

const stortedStoryFragments = sortFragments(shuffledStoryFragmentsWithoutEmptyElements);

const validateFragments = (sortedFragments) => {
  // reports missing or duplicate IDs
  for (let i = 0; i < sortedFragments.length - 1; i++) {
    if (sortedFragments[i].id === sortedFragments[i + 1].id) {
      console.log(`The ID ${sortedFragments[i].id} has duplicates.`);
    } else if (sortedFragments[i].id + 1 !== sortedFragments[i + 1].id) {
      console.log(`The ID ${sortedFragments[i].id + 1} is missing.`);
    }
  }
};

validateFragments(stortedStoryFragments);

const patchFragments = (sortedFragments) => {
  // returns an array without duplicate IDs and inserted missing IDs
  let patchedFragments = [sortedFragments.shift()];
  for (const currentFragment of sortedFragments) {
    const previousFragment = patchedFragments.at(-1);
    if (currentFragment.id !== previousFragment.id) {
      const numberOfMissingIDs = currentFragment.id - 1 - previousFragment.id;
      for (let i = 1; i <= numberOfMissingIDs; i++) {
        patchedFragments.push({id: previousFragment.id + i, text: "~~~~~~~ Missing stroy fragment ~~~~~~~"})
      }
      patchedFragments.push(currentFragment);
    }
  }

  return patchedFragments;
}

const patchedStoryFragments = patchFragments(stortedStoryFragments);

const assembleStory = (sortedFragments) => {
  // reduces ordered fragments into a single string separated by blank lines
  let assembledStory = "";
  for (const fragment of sortedFragments) {
    assembledStory += fragment.text + "\n";
  }
  return assembledStory;
};

console.log("\nHere is the assembled story:\n")
console.log(assembleStory(patchedStoryFragments));
