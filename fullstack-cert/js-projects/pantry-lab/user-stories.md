1. You should implement parseShipment(rawData) that returns an array of { sku, name, qty, expires } objects.
2. You should implement planRestock(pantry, shipment) that compares arrays and returns actions: { type: "restock" | "discard" | "donate", item }.
3. You should implement groupByZone(actions) using reduce to bucket items into storage zones.
4. You should implement clonePantry(pantry) that returns a deep copy so planning never mutates the original list.