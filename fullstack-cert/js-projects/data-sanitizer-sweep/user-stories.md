# Summary

In this lab, you will clean semi-structured log files by stripping disallowed tokens and tracking repair statistics.

An example is as below.

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

For example if the disallowed tokens are ```e, o, r``` and the character replaced with instead = ```#```, when sanitizing first line

```DEBUG: Server started on port 3000``` becomes ```DEBUG: S##v## sta#t#d #n p##t 3000```

Fatal markers are usually certain characters that causes error when being parsed. One example is ```$```. On the second last line in the above log file parsing that line with the disallow token should cause error and the program should stop parsing.

After parsing the entire log file without errors the program should print a repair statistic like below

```Total Entry: 12 Sanitized Entry Count: 10 finished sanitize logs process.``` 

where sanitized entry is the number of entries that are either sanitized or not required to be sanitized. If the sanitized entry count is lower than total entry then this means fatal marker was detected and not all logs were sanitized. If no fatal marker appeared and program completed successfully then sanitized entry count should equal to total entry.

If sanitization of logs failed then output summary should also include a reason like below.

```Sanitizing stopped Failure Reason: Fatal character occurred```

# User story

1: You should accept an array of log strings.

2: You should implement sanitizeLog(entry, blacklist) that loops over characters and replaces banned patterns.

3: You should implement cleanLogs(logs, blacklist) that uses continue to skip informational lines and break on fatal markers.

4: You should track counts of sanitized vs untouched entries inside an accumulator object.

5: You should output a summary showing total entries, sanitized entries, and failure reasons.