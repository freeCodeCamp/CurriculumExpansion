In this lab, you will build a small pantry management program using basic JavaScript concepts like arrays, objects, loops, and conditionals.

You will simulate receiving a shipment of pantry items, deciding what to do with each item, and organizing the results for storage. 


1. You should implement parseShipment(rawData) that returns an array of { sku, name, qty, expires } objects.
2. You should implement planRestock(pantry, shipment) that compares arrays and returns actions: { type: "restock" | "discard" | "donate", item }.
3. You should implement groupByZone(actions) using reduce to bucket items into storage zones.
4. You should implement clonePantry(pantry) that returns a deep copy so planning never mutates the original list.