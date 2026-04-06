In this lab, you will clean semi-structured log files by stripping disallowed tokens and tracking repair statistics.

**Objective**: Please complete the lab as per the user story.

**User story**

1: Please write 2 function `cleanLogs` and `sanitizeLog`.

2: Please create an `accumulator` class to track counts of sanitized vs untouched entries.

3: At the end of `cleanLogs` function, please print a CLI summary showing total entries, sanitized entries, and failure reasons.