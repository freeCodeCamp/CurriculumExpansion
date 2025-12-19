### Commuting Decision Logic (Script)
**Objective:** Fulfil the user stories below and get all the tests to pass to complete the lab.
1. You should create the following variables:
   * `distance_mi` (a number representing the distance to travel)
   * `is_raining` (a boolean)
   * `has_bike` (a boolean)
   * `has_car` (a boolean)
   * `has_ride_share_app` (a boolean)
2. You should use conditional statements to determine whether commuting is possible based on the values of these variables.
3. If `distance_mi` is `0` or a falsy value:
   * You should print `False`.
4. If the distance is **less than or equal to 1 mile**:
   * You should print `True` only if it is **not raining**.
   * Otherwise, you should print `False`.
5. If the distance is **greater than 1 mile and less than or equal to 6 miles**:
   * You should print `True` only if the person has a bike **and** it is not raining.
   * Otherwise, you should print `False`.
6. If the distance is **greater than 6 miles**:
   * You should print `True` if the person has a car **or** has a ride-share app.
   * Otherwise, you should print `False`.
7. You should use `if`, `elif`, and `else` statements to evaluate the distance categories in order.