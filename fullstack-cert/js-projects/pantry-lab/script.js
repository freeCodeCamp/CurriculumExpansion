function parseShipment(rawData) {
  if (!Array.isArray(rawData)) return [];

  const result = [];
  const seenSKUs = [];

  for (let i = 0; i < rawData.length; i++) {
    const parts = rawData[i].split("|");

    const sku = parts[0];
    const name = parts[1];
    const qty = Number(parts[2]);
    const expires = parts[3];

    let duplicate = false;
    for (let j = 0; j < seenSKUs.length; j++) {
      if (seenSKUs[j] === sku) {
        duplicate = true;
        break;
      }
    }
    if (duplicate) continue;

    seenSKUs.push(sku);

    result.push({
      sku: sku,
      name: name,
      qty: qty,
      expires: expires
    });
  }

  return result;
}

function planRestock(pantry, shipment) {
  const actions = [];

  for (let i = 0; i < shipment.length; i++) {
    const item = shipment[i];

    if (item.qty <= 0) {
      actions.push({ type: "discard", item: item });
      continue;
    }

    let found = false;
    for (let j = 0; j < pantry.length; j++) {
      if (pantry[j].sku === item.sku) {
        found = true;
        break;
      }
    }

    if (found) {
      actions.push({ type: "restock", item: item });
    } else {
      actions.push({ type: "donate", item: item });
    }
  }

  return actions;
}

function groupByZone(actions) {
  const zones = {};

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const zone = action.item.zone || "general";

    if (!zones[zone]) {
      zones[zone] = [];
    }

    zones[zone].push(action);
  }

  return zones;
}

function clonePantry(pantry) {
  const copy = [];

  for (let i = 0; i < pantry.length; i++) {
    const item = pantry[i];
    copy.push({
      sku: item.sku,
      name: item.name,
      qty: item.qty,
      expires: item.expires,
      zone: item.zone
    });
  }

  return copy;
}

const pantry = [
  { sku: "A12", name: "Tomatoes", qty: 4, expires: "2025-01-10", zone: "fridge" },
  { sku: "B44", name: "Pasta", qty: 2, expires: "2026-03-02", zone: "pantry" }
];

const rawShipment = [
  "A12|Tomatoes|5|2025-01-10",
  "C77|Rice|3|2026-01-01",
  "C77|Rice|3|2026-01-01"
];

const shipment = parseShipment(rawShipment);
const pantryCopy = clonePantry(pantry);
const actions = planRestock(pantryCopy, shipment);
const grouped = groupByZone(actions);

console.log(grouped);