# --description--

In this lab you will implement breadth first search (BFS) by building a small app that generates all combinations of balanced parentheses for a given number of pairs.

For example, for 3 pairs of parentheses, the valid combinations are: `['((()))', '(()())', '(())()', '()(())', '()()()']`.

Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a function named `gen_parentheses`.
2. The function should accept exactly one argument: the number of pairs of parentheses to generate.
3. Within the `gen_parentheses` function, you should validate the input:

   - If the argument is not an integer, the function should return `The number of pairs should be an integer`.
   - If the integer is less than 1, the function should return `The number of pairs should be at least 1`.

4. If validation passes, the function should return a list of strings, each string a valid combination of that many pairs.

5. Each returned string must:

   - Be exactly twice as long as the integer argument.
   - Contain exactly the specified number of opening `(` and closing `)` parentheses.
   - Never have a prefix in which the count of `)` exceeds the count of `(`.

6. The list should include all unique valid combinations and should be generated in breadth-first order.

7. `gen_parentheses(1)` should return `['()']`.
8. `gen_parentheses(2)` should return `['(())', '()()']`.
9. `gen_parentheses(3)` should return `['((()))', '(()())', '(())()', '()(())', '()()()']`.
10. `gen_parentheses(0)` should return `The number of pairs should be at least 1`.
11. `gen_parentheses("3")` should return `The number of pairs should be an integer`.
