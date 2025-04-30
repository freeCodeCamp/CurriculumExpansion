The bisection method is a technique for finding the roots of a real-valued function. It works by narrowing down an interval where the square root lies until it converges to a value within a specified tolerance.

For example, if the tolerance is `0.01`, the bisection method will keep halving the interval until the difference between the upper and lower bounds is less than or equal to `0.01`.

In this lab, you will create a function that uses the bisection method to find the square root of a number.

**User stories**

1. You should define a function named `square_root_bisection` that takes three parameters:
   - The number for which you want to find the square root.
   - The tolerance being the acceptable error margin for the result. You should set a default tolerance value.
   - The maximum number of iterations to perform.

2. Within the `square_root_bisection` function, you should first check the following conditions:
    - If the number is negative, you should raise a `ValueError` with the message `"Square root of negative number is not defined in real numbers"`.
    - For numbers `0` and `1`, you should simply print the message: `The square root of [number] is [number]` and return the number itself as the square root.

3. If the number is positive(other than `0` and `1`), you should initialize higher and lower bounds for the bisection method. You should crate the variables `low` and `high` to represent the lower and upper bounds of the search space. The lower bound should be `0` and the upper bound should the maximum of either `1` or the number itself.

4. Within the `square_root_bisection` function, you should create a bisection loop that repeats up to the maximum number of iteration. Within the loop:

- Calculate the midpoint between lower and upper bound. Square the mid value and compare it to the target number:

    - If it's close enough (within tolerance), the loop should end.
    - If it's too low, the algorithm should shift lower bound up to the mid value.
    - If it's too high, the algorithm should shift the higher bound down to the mid value.

5. Within the `square_root_bisection` function, after the bisection loop, if no value meets the tolerance condition, it should print a failure message: `Failed to converge within the [maximum] iterations`.
Otherwise, it should print the approximate square root with the message: `The square root of [square_target] is approximately [root]`

6. At the end, the `square_root_bisection` function should return the computed root value.
