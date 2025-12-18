1. You should define a function named `can_commute`.
2. The `can_commute` function should accept the following five parameters:
   * `distance_mi` (a number representing the distance to travel)
   * `is_raining` (a boolean indicating whether it is raining)
   * `has_bike` (a boolean indicating whether the person has a bike)
   * `has_car` (a boolean indicating whether the person has a car)
   * `has_ride_share_app` (a boolean indicating whether the person can use a ride-share service)
3. If the distance is **less than or equal to 1 mile**:
   * The function should return `True` only if it is **not raining**.
   * Otherwise, it should return `False`.
4. If the distance is **greater than 1 mile and less than or equal to 6 miles**:
   * The function should return `True` only if the person has a bike **and** it is not raining.
   * Otherwise, it should return `False`.
5. If the distance is **greater than 6 miles**:
   * The function should return `True` if the person has a car **or** has a ride-share app.
   * Otherwise, it should return `False`.
6. The function should use conditional statements (`if`, `elif`, and `else`) to evaluate the distance categories in order.
7. If none of the conditions for commuting are met, the function should return `False`.
8. If distance is 0 or a falsy value, the function should return False without evaluating any other conditions.
