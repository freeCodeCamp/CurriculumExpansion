const shuffledStoryFragments = [
  {
    id: 7,
    text: "The Tortoise meanwhile kept going slowly but steadily, and, after a time, passed the place where the Hare was sleeping.",
  },
  {
    id: 6,
    text: "1The Hare was soon far out of sight, and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare, he lay down beside the course to take a nap until the Tortoise should catch up.",
  },
  ,
  {
    id: 1,
    text: "A Hare was making fun of the Tortoise one day for being so slow.",
  },
  {
    id: 4,
    text: "The Hare was much amused at the idea of running a race with the Tortoise, but for the fun of the thing he agreed.",
  },
  {
    id: 8,
    text: "But the Hare slept on very peacefully; and when at last he did wake up, the Tortoise was near the goal.",
  },
  {
    id: 6,
    text: "The Hare was soon far out of sight, and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare, he lay down beside the course to take a nap until the Tortoise should catch up.",
  },
  {
    id: 5,
    text: "So the Fox, who had consented to act as judge, marked the distance and started the runners off.",
  },
  {
    id: 4,
    text: "The Hare was much amused at the idea of running a race with the Tortoise, but for the fun of the thing he agreed.",
  },
  {
    id: 3,
    text: '"Yes," replied the Tortoise, "and I get there sooner than you think. I\'ll run you a race and prove it."',
  },
  {
    id: 9,
    text: "The Hare now ran his swiftest, but he could not overtake the Tortoise in time.",
  },
  {
    id: 4,
    text: "The Hare was much amused at the idea of running a race with the Tortoise, but for the fun of the thing he agreed.",
  },
];

function removeUndefinedFragments(fragments) {
  let numberOfUndefinedElements = 0;
  let fragmentsWithoutUndefinedElements = [];

  for (const fragment of fragments) {
    if (fragment === undefined) {
      numberOfUndefinedElements++;
    } else {
      fragmentsWithoutUndefinedElements.push(fragment);
    }
  }

  if (numberOfUndefinedElements > 0) {
    console.log(
      `Warning: The fragments array contains ${numberOfUndefinedElements} undefined element(s).\n`,
    );
  }

  return fragmentsWithoutUndefinedElements;
}

const sortFragments = (fragments) => {
  // returns a new array ordered by id using a custom comparator
  fragments = removeUndefinedFragments(fragments);
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

const validateFragments = (fragments) => {
  // reports missing or duplicate IDs
  fragments = removeUndefinedFragments(fragments);
  const sortedFragments = sortFragments(fragments);
  for (let i = 0; i < sortedFragments.length - 1; i++) {
    if (sortedFragments[i].id === sortedFragments[i + 1].id) {
      console.log(`The ID ${sortedFragments[i].id} has duplicates.`);
    } else if (sortedFragments[i].id + 1 !== sortedFragments[i + 1].id) {
      console.log(`The ID ${sortedFragments[i].id + 1} is missing.`);
    }
  }
};

const assembleStory = (fragments) => {
  // reduces ordered fragments into a single string separated by blank lines
  fragments = removeUndefinedFragments(fragments);
  let assembledStory = "";
  const sortedFragments = sortFragments(fragments);
  for (const fragment of sortedFragments) {
    assembledStory += fragment.text + "\n";
  }
  return assembledStory;
};
