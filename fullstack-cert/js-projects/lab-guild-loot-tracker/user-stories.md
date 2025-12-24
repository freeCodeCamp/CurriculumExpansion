In this lab, you will aggregate resource totals per guild member inside nested objects.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should accept meal entries shaped like `{ member, gold, silver, reputation, experience }`.
2. You should implement `addLootEntry(object, entry)` that clones and updates cumulative resources per member.
3. You should implement `getMemberTotals(object, member)` with guard clauses for unknown members.
4. You should implement `listTopMembers(object, key, limit)` that sorts descending by a specific resource type (e.g., finding the member with the most `gold`).
5. You should implement `cloneGuildData(object)` to protect against accidental mutations.

Note: Use `Object.keys`, `Object.values`, and `Object.entries`. Include tests for aggregation accuracy and cloning behavior.
