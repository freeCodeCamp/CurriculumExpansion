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

const logs = [];
const blacklistedStrings = [];

// This function parses each individual log string.
// This function will be repeatly called by cleanLogs until no strings left.
function sanitizeLog(entry, blacklist){
    sanitizedEntry = [];

    for(let i = 0; i< entry.length; i++){
        if(blacklist.includes(entry[i])){
            sanitizedEntry.push('#');
        }
        else{
            sanitizedEntry.push(entry[i]);
        }
    }

    console.log("Before clean:" + entry + " | After clean:" + sanitizedEntry.join(''));
};

// This function parses entire array of logs
function cleanLogs(logs, blacklist){

};

sanitizeLog('Basketball plays',['a','B']);