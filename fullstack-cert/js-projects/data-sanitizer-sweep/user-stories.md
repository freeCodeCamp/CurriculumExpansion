In this lab, you will clean semi-structured log files by stripping disallowed tokens and tracking repair statistics.

Here are some examples:

```
  "DEBUG: Server started on port 3000",
  "INFO: user=admin token=abc123 connected",
  "WARN: High memory usage detected at 87%",
  "DEBUG: password=secret123 transmitted over wire",
  "INFO: Scheduled job triggered at 08:00",
  "ERROR: Failed to connect to db, retry=3",
  "DEBUG: api_key=XYZ789 used in request",
  "//INFO: Cache cleared successfully",
  "WARN: Disk usage at 92%, threshold=90%",
  "FATAL: System overload detected, shutting down",
  "DEBUG: token=def456$ refreshed for session",
  "ERROR: Null pointer exception in module auth",
```

For example, if the disallowed tokens are `e, o, r` and the replacement character is `#`, sanitizing the first line changes:

`DEBUG: Server started on port 3000` to `DEBUG: S##v## sta#t#d #n p##t 3000`

Fatal markers are characters that should stop parsing immediately. In this example, `$` is a fatal marker. If it appears (like in the second-to-last log line), the program should stop processing additional logs.

After processing, the program should print a repair summary such as:

`Total Entry: 12 Sanitized Entry Count: 10 finished sanitize logs process.`

The sanitized entry count includes both sanitized entries and entries that did not need sanitizing. If this count is lower than total entries, parsing stopped early because a fatal marker was found. If no fatal marker appears, sanitized entry count should equal total entries.

If sanitization fails, the output summary should also include a reason, such as:

`Sanitizing stopped Failure Reason: Fatal character occurred`

# User Stories

1: You should have a variable called `logs` which is an array of strings representing log entries.

2: You should implement `sanitizeLog(entry, blacklist)` that loops over characters and replaces banned patterns.
-- `entry`: The individual strings in the array
-- `blacklist`: Currently an array of characters

3: You should implement `cleanLogs(logs, blacklist)` that uses continue to skip informational lines and break on fatal markers.
-- `logs`: The array of log strings
-- `blacklist`: Currently an array of characters

4: You should track counts of sanitized vs untouched entries inside an accumulator object. This object stores running totals as you loop through `logs`, such as `{ sanitized: 0, untouched: 0 }`.

5: You should output a summary showing total entries, sanitized entries, and failure reasons.
