1. You should have a function named `getAverage` that takes an array of test scores as a parameter and returns the average score.

1. You should have a function named `getGrade` that takes a student score as a parameter and returns a string representing a letter grade based on the score. Here are the scores and their corresponding letter grades:

    | Score Range | Grade   |
    | ----------- | ------- |
    | `100`       | `"A++"` |
    | `90 - 99`   | `"A"`   |
    | `80 - 89`   | `"B"`   |
    | `70 - 79`   | `"C"`   |
    | `60 - 69`   | `"D"`   |
    | `0 - 59`    | `"F"`   |

1. You should have a function named `hasPassingGrade` that takes a score as a parameter and returns either `true` or `false` depending on if the score corresponds to a passing grade. A passing grade is anything different from `"F"`. The function should use the `getGrade` function to determine the grade.

1. You should have a function named `studentMsg` that takes an array of scores and a student score as the parameters. The function should return a string with the format:

    - `"Class average: average-goes-here. Your grade: grade-goes-here. You passed the course."`, if the student passed the course.
    - `"Class average: average-goes-here. Your grade: grade-goes-here. You failed the course."`, if the student failed the course.

    Replace `average-goes-here` with the average of total scores and `grade-goes-here` with the student's grade.
    
    Use `getAverage` to get the average score and `getGrade` to get the student's grade.