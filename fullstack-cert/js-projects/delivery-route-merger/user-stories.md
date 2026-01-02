You should load three arrays of stop objects: `{ address, distance, windowStart, windowEnd }`.
You should implement `mergeRoutes(...routes)` that concatenates routes and removes duplicate addresses while preserving the earliest time window.
You should implement `sortByWindow(stops)` that sorts by `windowStart` and uses `distance` as a tiebreaker.
You should implement `rebalanceRoutes(stops, drivers)` that chunks the sorted list into mileage-balanced arrays.
You should implement `printAssignments(assignments)` that logs driver names followed by ordered stops.