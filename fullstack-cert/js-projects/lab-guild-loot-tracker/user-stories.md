You are creating a set of functions that help a group of role-playing game players (a guild) keep track of, and update their character's resources. The guild is represented as an object containing entries with each of the guild members' resources. These entries are also objects, with properties describing amounts of gold, silver, reputation, and experience belonging to that member.

All functions take a `guild` object containing records of the guild member's resources as their first parameter.

The `cloneGuildData` function returns a copy of the object passed into it as its parameter. It is used in the other functions to prevent accidentally overwriting values in the original object.

The `addLootEntry` function takes an object shaped like `{ member, gold, silver, reputation, experience }` as its second parameter.

- If the `guild` object contains an entry with the same name as the `member` value in its second parameter, it updates the resources of that member.
- If it does not contain that entry, it adds the member entry to the object.

The `listMembers` function takes only one parameter (the `guild` object) It prints out the object entries to the console.

The `getMemberTotals` function takes a `member` string with a name of one of the guild members as the second parameter.

- If the `member` is not listed in the guild, the function should return a message: `[member] is not a member of the guild`
- Otherwise, the function should return the `guild[member]` object

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should accept loot entries shaped like `{ member, gold, silver, reputation, experience }`.
2. You should implement `addLootEntry(object, entry)` that clones and updates cumulative resources per member.
3. You should implement `listMembers(object)` that prints out a list of guild members.
4. You should implement `getMemberTotals(object, member)` with guard clauses for unknown members.
5. You should implement `cloneGuildData(object)` to protect against accidental mutations by creating a copy of the object, and making changes only to that copy.

Note: Use `Object.keys`, `Object.values`, and `Object.entries`. Include tests for aggregation accuracy and cloning behavior.
