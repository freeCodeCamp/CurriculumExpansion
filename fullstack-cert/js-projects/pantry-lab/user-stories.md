In this lab, you will build a small pantry management program using basic JavaScript concepts like arrays, objects, loops, and conditionals.

You will simulate receiving a shipment of pantry items, deciding what to do with each item, and organizing the results for storage. 

1. You should implement a parseShipment(rawData) function that takes an array of strings and returns an array of { sku, name, qty, expires } objects.

2. You should implement a planRestock(pantry, shipment) function that compares the current pantry with the incoming shipment and returns an array of actions in the form { type: "restock" | "discard" | "donate", item }.

3. You should implement a groupByZone(actions) function that groups the actions into storage zones based on each item’s zone property.

4. You should implement a clonePantry(pantry) function that returns a deep copy of the pantry so planning changes do not affect the original list.
A deep copy means creating a new array with new objects, so modifying the copy does not change the original pantry.

5. You should use all of the functions together to process a shipment and log the final grouped result to the console.