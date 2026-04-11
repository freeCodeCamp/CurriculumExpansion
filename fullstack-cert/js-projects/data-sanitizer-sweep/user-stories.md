In this lab, you will clean semi-structured log files by stripping disallowed tokens and tracking repair statistics.

A log file is very useful for debugging issues of an application or backend services. An example is as below

```
  "INFO: Server started on port 3000",
  "DEBUG: user=admin token=abc123 connected",
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

Disallowed tokens are usually certain characters that causes error when being parsed. This can be any character depending on system. One example is ```$```. On the second last line in the above log file parsing that line with the disallow token should cause error.

**Objective**: Please complete the lab as per the user story.

**User story**

1: You should accept an array of log strings.

2: You should implement sanitizeLog(entry, blacklist) that loops over characters and replaces banned patterns.

3: You should implement cleanLogs(logs, blacklist) that uses continue to skip informational lines and break on fatal markers.

4: You should track counts of sanitized vs untouched entries inside an accumulator object.

5: You should output a CLI summary showing total entries, sanitized entries, and failure reasons.