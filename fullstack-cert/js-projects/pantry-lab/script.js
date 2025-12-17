function parseShipment(rawData) {
  if (!Array.isArray(rawData)) return [];

  var result = [];
  var seenSKUs = [];

  for (var i = 0; i < rawData.length; i++) {
    var parts = rawData[i].split("|");

    var sku = parts[0];
    var name = parts[1];
    var qty = Number(parts[2]);
    var expires = parts[3];

    var duplicate = false;
    for (var j = 0; j < seenSKUs.length; j++) {
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
  var actions = [];

  for (var i = 0; i < shipment.length; i++) {
    var item = shipment[i];

    if (item.qty <= 0) {
      actions.push({ type: "discard", item: item });
      continue;
    }

    var found = false;
    for (var j = 0; j < pantry.length; j++) {
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
  var zones = {};

  for (var i = 0; i < actions.length; i++) {
    var action = actions[i];
    var zone = action.item.zone || "general";

    if (!zones[zone]) {
      zones[zone] = [];
    }

    zones[zone].push(action);
  }

  return zones;
}

function clonePantry(pantry) {
  var copy = [];

  for (var i = 0; i < pantry.length; i++) {
    var item = pantry[i];
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

var pantry = [
  { sku: "A12", name: "Tomatoes", qty: 4, expires: "2025-01-10", zone: "fridge" },
  { sku: "B44", name: "Pasta", qty: 2, expires: "2026-03-02", zone: "pantry" }
];

var rawShipment = [
  "A12|Tomatoes|5|2025-01-10",
  "C77|Rice|3|2026-01-01",
  "C77|Rice|3|2026-01-01"
];

var shipment = parseShipment(rawShipment);
var pantryCopy = clonePantry(pantry);
var actions = planRestock(pantryCopy, shipment);
var grouped = groupByZone(actions);

console.log(grouped);