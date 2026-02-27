const sampleManifest0 = 
  {
    containerId: 0,
    destination: "Monterey, California, USA",
    weight: 340.50,
    unit: "lb",
    hazmat: false
  }
const sampleManifest1 = 
  {
    containerId: 1,
    destination: "Miami, Florida, USA",
    weight: 200.75,
    unit: "pounds",
    hazmat: true
  }
const sampleManifest2 =
  {
    containerId: 2,
    destination: "Buenos Aires, Argentina",
    weight: -50,
    unit: "kilos"
  }
const sampleManifest3 =
  {
    containerId: 3,
    destination: "Montreal, Quebec, Canada",
    weight: 150.75,
    unit: "kg",
    hazmat: false
  }
const sampleManifest4 =
  {
    containerId: 4,
    destination: "Guadalajara, Jalisco, Mexico",
    weight: 5000.25,
    hazmat: "no"
  }
const sampleManifest5 = 
{
    containerId: 5,
    destination: "",
    weight: 350,
    unit: "kg",
    hazmat: 67
}

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


function processManifest(manifest) {
    const validation = validateManifest(manifest);

    if (Object.keys(validation).length > 0) {
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(validation);
    } else {
        const normalized = normalizeUnits(manifest);
        console.log(`Validation success: ${manifest.containerId}`);
        console.log(`Total weight: ${normalized.weight} kg`);
    }

}