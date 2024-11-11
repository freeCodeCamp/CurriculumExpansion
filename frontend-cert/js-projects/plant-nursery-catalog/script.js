// ask to create the first two objects and then provide the others
const ballerina = {
    commonName: "Spanish lavender",
    scientificName: "Lavandula stoechas",
    cultivar: "Ballerina",
}

const prettyPolly = {
    commonName: "Spanish lavender",
    scientificName: "Lavandula stoechas",
    cultivar: "Pretty Polly",
}

const willowVale = {
    commonName: "Spanish lavender",
    scientificName: "Lavandula stoechas",
    cultivar: "Willow Vale",
}

const hidcote = {
    commonName: "English lavender",
    scientificName: "Lavandula angustifolia",
    cultivar: "Hidcote",
}

const imperialGem = {
    commonName: "English lavender",
    scientificName: "Lavandula angustifolia",
    cultivar: "Imperial Gem",
}

const royalCrown = {
    commonName: "French lavender",
    scientificName: "Lavandula dentata",
    cultivar: "Royal Crown"
}

const catalog = new Map();
// show map size
// set method, use first a string as key, then show that objects can be used
catalog.set(ballerina, { small: 20, medium: 15, large: 12 });
catalog.set(prettyPolly, { small: 31, medium: 14, large: 24 });
catalog.set(willowVale, { small: 3, medium: 5, large: 0 });
catalog.set(hidcote, { small: 33, medium: 13, large: 18 });
catalog.set(imperialGem, { small: 19, medium: 35, large: 28 });
catalog.set(royalCrown, { small: 40, medium: 22, large: 9 });
// get method
const sellPlant = (plant, size, pots) => {
    const name = `${plant.scientificName} '${plant.cultivar}'`
    const currentPots = catalog.get(plant);
    if (currentPots[size] - pots < 0) {
        return `Not enough ${size} size pots for ${name}. Only ${currentPots[size]} left.`
    }
    const updatedPots = currentPots;
    updatedPots[size] -= pots;
    catalog.set(plant, updatedPots)
    return `catalog successfully updated.`
}
// delete method
const removePlant = (plant) => {
    catalog.delete(plant);
}

const displaycatalog = () => {
    // Show how to iterate over a map object: .keys(), .values(), .entries()
    let catalogString = "";
    catalog.forEach((val, key) => {
        catalogString += `
${key.scientificName} '${key.cultivar}'
Pots left: ${val.small} S, ${val.medium} M, ${val.large} L
`
    })
    return catalogString
}

const displayPlantsSet = () => {
    // Create a set, .add(), .size, .delete(), .has(), .clear() (mention that clear is valid for maps too)
    // Delete the set
    // Create an array from the catalog keys => catalog.keys()).map(key => key.commonName
    // Then create a set from that array and show how the set doesn't have repeated values
    const commonNames = Array.from(catalog.keys()).map(key => key.commonName);
    return new Set(commonNames)
}

console.log(displaycatalog())
console.log(displayPlantsSet())