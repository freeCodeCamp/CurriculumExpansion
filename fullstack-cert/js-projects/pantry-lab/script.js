// --- parseShipment ---
// Returns an array of unique items parsed from "sku|name|qty|expires"
export function parseShipment(rawData = []) {
  if (!Array.isArray(rawData)) return [];

  const result = [];
  const seenSKUs = [];

  for (let i = 0; i < rawData.length; i++) {
    const line = rawData[i];
    const parts = line.split("|");

    const sku = parts[0];
    const name = parts[1];
    const qty = Number(parts[2]);
    const expires = parts[3];

    // check duplicates manually
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



// --- planRestock ---
// Uses manual loops and a basic string comparison for expiration
export function planRestock(pantry = [], shipment = []) {
  const actions = [];
  const now = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  for (let i = 0; i < shipment.length; i++) {
    const item = shipment[i];

    // qty <= 0 → discard
    if (item.qty <= 0) {
      actions.push({ type: "discard", item: item });
      continue;
    }

    // expired → discard (string compare works for YYYY-MM-DD)
    if (item.expires < now) {
      actions.push({ type: "discard", item: item });
      continue;
    }

    // check if SKU exists in pantry
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



// --- groupByZone ---
// NO reduce — uses simple loops
export function groupByZone(actions = []) {
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



// --- clonePantry ---
// Deep copy using manual loop
export function clonePantry(pantry = []) {
  const copy = [];

  for (let i = 0; i < pantry.length; i++) {
    const item = pantry[i];
    const newItem = {
      sku: item.sku,
      name: item.name,
      qty: item.qty,
      expires: item.expires,
      zone: item.zone
    };
    copy.push(newItem);
  }

  return copy;
}



// --- flagExpiring ---
// String-based date comparison + manual sort
export function flagExpiring(pantry = [], days = 0) {
  const results = [];

  const now = new Date();
  const limitDate = new Date(now.getTime() + days * 86400000);
  const limit = limitDate.toISOString().slice(0, 10);

  // get items within days
  for (let i = 0; i < pantry.length; i++) {
    const item = pantry[i];
    if (item.expires <= limit) {
      results.push(item);
    }
  }

  // sort by soonest expiration
  for (let a = 0; a < results.length; a++) {
    for (let b = a + 1; b < results.length; b++) {
      if (results[b].expires < results[a].expires) {
        const temp = results[a];
        results[a] = results[b];
        results[b] = temp;
      }
    }
  }

  return results;
}