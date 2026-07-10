const collection = [
  {
    id: 101,
    title: "Golden Mask",
    category: "Ceremonial",
    curator: {
      id: 201,
      name: "Earl Sinclair",
    },
    locations: [
      { gallery: "Hall A", year: 2020 },
      { gallery: "Hall C", year: 2024 },
    ],
    tags: ["gold", "egypt"],
    onDisplay: true,
  },
  {
    id: 102,
    title: "Bronze Tablet",
    category: "Inscription",
    curator: {
      id: 202,
      name: "Robert Sinclair",
    },
    locations: [{ gallery: "Archive Wing", year: 2019 }],
    tags: ["bronze", "writing"],
    onDisplay: false,
  },
];

console.log("FIRST ARTIFACT");
console.log(collection[0].title);
console.log(collection[0].curator.name);

console.log("---------");

function getArtifactTitle(id) {
  const artifact = collection.find((item) => item.id === id);
  return artifact ? artifact.title : "Artifact not found";
}

console.log("LOOKUP BY ID");
console.log(getArtifactTitle(102));

console.log("---------");

function addTag(id, tag) {
  const artifact = collection.find((item) => item.id === id);

  if (artifact && !artifact.tags.includes(tag)) {
    artifact.tags.push(tag);
  }
}

addTag(101, "royal");

console.log("UPDATED TAGS");
console.log(collection[0].tags);

console.log("---------");

function moveArtifact(id, gallery, year) {
  const artifact = collection.find((item) => item.id === id);

  if (artifact) {
    artifact.locations.push({ gallery, year });
  }
}

moveArtifact(102, "Hall B", 2026);

console.log("UPDATED LOCATIONS");
console.log(collection[1].locations);

console.log("---------");

function toggleDisplayStatus(id) {
  const artifact = collection.find((item) => item.id === id);

  if (artifact) {
    artifact.onDisplay = !artifact.onDisplay;
  }
}

console.log("DISPLAY STATUS");
console.log(collection[1].onDisplay);

toggleDisplayStatus(102);

console.log(collection[1].onDisplay);

console.log("---------");

function updateCurator(id, name) {
  const artifact = collection.find((item) => item.id === id);

  if (artifact) {
    artifact.curator.name = name;
  }
}

updateCurator(101, "Fran Sinclair");

console.log("UPDATED CURATOR");
console.log(collection[0].curator.name);

console.log("---------");

function buildSummary(id) {
  const artifact = collection.find((item) => item.id === id);

  if (!artifact) {
    return "Artifact not found";
  }

  const currentLocation = artifact.locations[artifact.locations.length - 1];

  return `${artifact.title}
Category: ${artifact.category}
Curator: ${artifact.curator.name}
Current Gallery: ${currentLocation.gallery}
On Display: ${artifact.onDisplay}`;
}

console.log("SUMMARY");
console.log(buildSummary(101));