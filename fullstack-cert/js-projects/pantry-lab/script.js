// --- parseShipment ---
// rawData example: [
//   "A12|Tomatoes|5|2025-01-10",
//   "B44|Pasta|3|2026-03-02"
// ]
export function parseShipment(rawData = []) {
  if (!Array.isArray(rawData)) return [];

  const seenSKUs = new Set();

  return rawData
    .map(line => {
      const [sku, name, qty, expires] = line.split("|");

      // Skip duplicates
      if (seenSKUs.has(sku)) return null;
      seenSKUs.add(sku);

      return {
        sku,
        name,
        qty: Number(qty),
        expires
      };
    })
    .filter(Boolean); // Remove null items
}



// --- planRestock ---
// Returns actions like:
// { type: "restock", item }
// { type: "discard", item }
// { type: "donate", item }
export function planRestock(pantry = [], shipment = []) {
  const actions = [];

  for (const item of shipment) {
    // negative or zero quantity → discard
    if (item.qty <= 0) {
      actions.push({ type: "discard", item });
      continue;
    }

    const expiresTime = new Date(item.expires).getTime();
    const now = Date.now();

    // expired → discard
    if (expiresTime < now) {
      actions.push({ type: "discard", item });
      continue;
    }

    // if SKU exists in pantry → restock
    const exists = pantry.find(p => p.sku === item.sku);

    if (exists) {
      actions.push({ type: "restock", item });
    } else {
      // new SKU → donate
      actions.push({ type: "donate", item });
    }
  }

  return actions;
}



// --- groupByZone ---
// Buckets actions by item.zone using reduce
export function groupByZone(actions = []) {
  return actions.reduce((zones, action) => {
    const zone = action.item.zone || "general";

    if (!zones[zone]) zones[zone] = [];
    zones[zone].push(action);

    return zones;
  }, {});
}



// --- clonePantry ---
// Deep copy so planning never mutates original pantry
export function clonePantry(pantry) {
  return JSON.parse(JSON.stringify(pantry));
}



// --- flagExpiring ---
// Returns items expiring within X days, sorted by earliest expiration
export function flagExpiring(pantry = [], days = 0) {
  const now = Date.now();
  const limit = now + days * 24 * 60 * 60 * 1000;

  return pantry
    .filter(item => {
      const expiresTime = new Date(item.expires).getTime();
      return expiresTime <= limit;
    })
    .sort((a, b) => new Date(a.expires) - new Date(b.expires));
}
