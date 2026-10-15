def max_earnings(pay):
    # best[i] holds the highest earnings possible using only the first i days
    best = [0] * (len(pay) + 1)

    for day in range(1, len(pay) + 1):
        skip_day = best[day - 1]
        # Working today means the day before must have been skipped
        work_day = pay[day - 1] + (best[day - 2] if day >= 2 else 0)
        best[day] = max(skip_day, work_day)

    # Walk back from the last day to find which days were worked
    days = []
    day = len(pay)
    while day > 0:
        if best[day] == best[day - 1]:
            day -= 1
        else:
            days.append(day - 1)
            day -= 2

    days.reverse()
    return best[len(pay)], days


print(max_earnings([60, 150, 40, 30, 200, 70]))
# Output: (350, [1, 4])

print(max_earnings([80, 120, 90, 60, 150]))
# Output: (320, [0, 2, 4])

print(max_earnings([50, 200, 40, 30, 180]))
# Output: (380, [1, 4])

print(max_earnings([100, 40, 40, 100]))
# Output: (200, [0, 3])

print(max_earnings([70, 90]))
# Output: (90, [1])

print(max_earnings([60]))
# Output: (60, [0])

print(max_earnings([]))
# Output: (0, [])
