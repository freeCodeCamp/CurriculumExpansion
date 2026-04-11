let logs = [];
let blacklistedStrings = [];

// This function parses each individual log string.
// This function will be repeatly called by cleanLogs until no strings left.
function sanitizeLog(entry, blacklist) {
  sanitizedEntry = [];

  for (let i = 0; i < entry.length; i++) {
    if (blacklist.includes(entry[i])) {
      sanitizedEntry.push("#");
    } else {
      sanitizedEntry.push(entry[i]);
    }
  }

  return sanitizedEntry.join("");
}

function printCustomMessage(entryCount, sanitizedCount, failureReason) {
  if (failureReason == "") {
    console.log(
      "Total Entry: " +
        entryCount +
        " Sanitized Entry Count: " +
        sanitizedCount +
        " finished sanitize logs process.",
    );
  } else {
    console.log("Sanitizing stopped Failure Reason: " + failureReason);
  }
}

// This function parses entire array of logs
function cleanLogs(logs, blacklist) {
    let accumulator = 0;
  let fatalError = "$";
  let informationalIndicator = "//";

  let sanitizedLogs = [];

  for (let i = 0; i < logs.length; i++) {
    if (logs[i].includes(fatalError)) {
      printCustomMessage(
        logs.length,
        accumulator,
        "Fatal character occurred",
      );
      break;
    } else if (logs[i].includes(informationalIndicator)) {
      accumulator += 1;
      continue;
    } else {
      tmpSanitized = sanitizeLog(logs[i], blacklist);
      sanitizedLogs.push(tmpSanitized);

      accumulator += 1;
    }
  }

  printCustomMessage(logs.length, accumulator, "");
}

logs = [
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
];

blacklistedStrings = ["a", "A", "c", "T"];

cleanLogs(logs, blacklistedStrings);
