# --description--

In this lab, you will build a voting system that would use `Map` to create a poll and `Set` to prevent duplicate voting.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab. 

**User Stories:**

1. You should initialize the `poll` variable to a new `Map` object.
   
2. You should have a function `addOption` that accepts a parameter `option`.
   
3. In the `addOption` function:
 
- If the `option` does not already exist in the poll, it should be added to the poll with an empty `Set` as its value to track voters. You should also return the message `Option "<option>" added to the poll.`

- If the `option` already exists, it should return the message `Option "<option>" already exists.`.

4. You should have a function `vote` that accepts two parameters, `option`(the option to vote for) and `voterId` (a unique ID for the voter).

5. In the `vote` function:
   
- If the `option` does not exist in the poll, the function should return the message `Option "<option>" does not exist.`;

- If the `option` exists, the function should check if the `voterId` has already voted for this `option`.

- If the voter has already voted, the function should display the message `Voter <voterId> has already voted for "<option>".`

- If the voter has not voted, `voterId` should be added to the `Set` of `voters` for this option. The function should return the message  `Voter <voterId> voted for "<option>".`

6. You should have a function `displayResults` that returns the poll results in the following format:

```
Poll Results:
Option A: N votes
Option B: N votes
.
.
```