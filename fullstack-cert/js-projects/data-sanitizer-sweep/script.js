// This falls under javascript loop block
class accumulator{
    #sanitizedEntryCount;
    constructor(entryCount){
        this.entryCount = entryCount;
        this.#sanitizedEntryCount = 0;
    };

    sanitizedEntryInc(){
        this.#sanitizedEntryCount += 1;
    }

    get sanitizedEntryCount(){
        return this.#sanitizedEntryCount;
    }
}

let logs = [];
let blacklistedStrings = [];

// This function parses each individual log string.
// This function will be repeatly called by cleanLogs until no strings left.
function Func_sanitizeLog(entry, blacklist){
    sanitizedEntry = [];

    for(let i = 0; i< entry.length; i++){
        if(blacklist.includes(entry[i])){
            sanitizedEntry.push('#');
        }
        else{
            sanitizedEntry.push(entry[i]);
        }
    };

    return(sanitizedEntry.join(''));
    //console.log("Before clean:" + entry + " | After clean:" + sanitizedEntry.join(''));
};

// This function parses entire array of logs
function cleanLogs(logs, blacklist){
    let fatalError = '$'
    let informationalIndicator = '//';
    let instanceAccumulator = new accumulator(logs.length);

    let sanitizedLogs = [];
    
    for(let i = 0; i < logs.length; i++){
        //console.log(logs[i]);
        if(logs[i].includes(fatalError)){
            console.log((instanceAccumulator.sanitizedEntryCount/logs.length)*100)
            break;
        }
        else if(logs[i].includes(informationalIndicator)){
            instanceAccumulator.sanitizedEntryInc();
            console.log("Information entry");
        }
        else{
            tmpSanitized = Func_sanitizeLog(logs[i],blacklist);
            sanitizedLogs.push(tmpSanitized);

            instanceAccumulator.sanitizedEntryInc();
        };
    };

    //console.log(instanceAccumulator.sanitizedEntryCount/logs.length);
    console.log(sanitizedLogs);
};

//sanitizeLog('Basketball plays',['a','B']);

logs = [
  "INFO: Server started on port 3000",
  "DEBUG: user=admin token=abc123 connected",
  "WARN: High memory usage detected at 87%",
  "DEBUG: password=secret123 transmitted over wire",
  "INFO: Scheduled job triggered at 08:00",
  "ERROR: Failed to connect to db, retry=3",
  "DEBUG: api_key=XYZ789 used in request",
  "INFO: Cache cleared successfully",
  "WARN: Disk usage at 92%, threshold=90%",
  "FATAL: System overload detected, shutting down",
  "DEBUG: token=def456$ refreshed for session",
  "ERROR: Null pointer exception in module auth",
];

blacklistedStrings = ['a','A','c','T'];

cleanLogs(logs,blacklistedStrings);

// Think I see how it goes I'm not suppose to complete all.
/**
 * The way I see it is sanitizeLog is a very simple function.
 * It's suppose to be simple 
 * 
 * 1: Grab length of entire logs
 * 2: define fatal markers and informational lines
 * 3: cleanlogs repeatly run sanitizelog function to clean existing log.
 * 4: sanitizelog need to check for fatal marker and informational lines.
 */