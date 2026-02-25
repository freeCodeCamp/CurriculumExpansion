const manifests = [
  {
    containerId: 1,
    destination: "Monterey, California, USA",
    weight: 500,
    unit: "kg",
    hazmat: false
  },
  {
    containerId: 2,
    destination: "Austin, Texas, USA",
    weight: 200,
    unit: "lb",
    hazmat: true
  },
  {
    containerId: 3,
    destination: "Monterey, California, USA",
    weight: 300,
    unit: "kg",
    hazmat: true
  },
  {
    containerId: 4,
    destination: "Austin, Texas, USA",
    weight: 150,
    unit: "lb",
    hazmat: false
  },
  {
    containerId: 5,
    destination: "",
    weight: 400,
    unit: "kg",
    hazmat: false
  },
  {
    containerId: 6,
    weight: 250,
    unit: "kg",
    hazmat: true
  },
  {
    containerId: 7,
    destination: "Denver, Colorado, USA",
    weight: -100,
    unit: "kg",
    hazmat: false
  },
  {
    containerId: 8,
    destination: "Denver, Colorado, USA",
    weight: 180,
    unit: "lbs",
    hazmat: false
  },
  {
    containerId: 9,
    destination: "Monterey, California, USA",
    weight: 220,
    unit: "lb",
    hazmat: "yes"
  },
  {
    containerId: 10,
    destination: "Austin, Texas, USA",
    weight: 320,
    unit: "kg",
    hazmat: true
  }
];

function normalizeUnits(manifest) {
    const normalized = {...manifest}
    if (manifest.unit === "lb") {
        normalized.weight = normalized.weight * 0.45;
        normalized.unit = "kg";
    }
    return normalized;
}

function validateManifest(manifest) {
    let result = {}

    if (manifest.destination === undefined) {
        result.destination = "Missing";
    }
    else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
        result.destination = "Invalid";
    }
    if (manifest.weight === undefined) {
        result.weight = "Missing";
    }
    else if (typeof manifest.weight !== "number" || manifest.weight <= 0) {
        result.weight = "Invalid";
    }
    if (manifest.unit === undefined) {
        result.unit = "Missing";
    }
    else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
        result.unit = "Invalid";
    }
    if (manifest.hazmat === undefined) {
        result.hazmat = "Missing";
    }
    else if (typeof manifest.hazmat !== "boolean") {
        result.hazmat = "Invalid";
    }

    return result;
}


function summarizeByDestination(manifests) {
    let valid_manifests = [];
    for (const manifest of manifests) {
        const validation = validateManifest(manifest);
        if (Object.keys(validation).length === 0) {
            valid_manifests.push(normalizeUnits(manifest));
        }
    }
    
    const summary = {};
    for (const manifest of valid_manifests) {
        if (!summary[manifest.destination]) {
            summary[manifest.destination] = {
                totalWeight: 0,
                hazmatCount: 0
            };
        }
        summary[manifest.destination].totalWeight += manifest.weight;
        if (manifest.hazmat) {
            summary[manifest.destination].hazmatCount += 1;
        }
    }
    return summary;
}

function reportErrors(manifests) {
    for (const manifest of manifests) {
        const validation = validateManifest(manifest);
        if (Object.keys(validation).length > 0) {
            console.log(`Validation error at container: ${manifest.containerId}`);
        }
    }
}