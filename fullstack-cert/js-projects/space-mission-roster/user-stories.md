1. You should create a `crew` array that stores astronaut objects with `id`, `name`, `role`, `evaEligible`, and `priority`.

2. You should create an `addCrewMember(crew, astronaut)` function that pushes a new astronaut, enforces unique `id`s, and logs `"Added [Name]` as `[Role]."`.

3. You should create a `swapCrewMembers(crew, fromIndex, toIndex)` function that reorders astronauts using `splice`/`slice` and logs the resulting order.

4. You should create a derived `getEVAReadyCrew(crew)` function that returns a filtered array of EVA-eligible astronauts sorted by `priority`.

5. You should create a `chunkCrew(crew, size)` helper that splits the crew into shuttle-sized groups without mutating the source array.

6. You should expose a `printCrewSummary` function that maps crew members into readable strings and logs them in order of priority.