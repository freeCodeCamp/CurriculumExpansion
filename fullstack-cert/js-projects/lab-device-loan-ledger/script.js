const equipmentLedger = `{
    "1": {
        "type": "PC",
        "status": "CheckedOut",
        "borrower": {
            "name": "John Smith",
            "email": "john@acme.org"
        },
        "dueDate": "11/30/2025"
    },
    "2": {
        "type": "Laptop",
        "status": "CheckedIn",
        "borrower": {
            "name": "",
            "email": ""
        },
        "dueDate": ""
    },
    "3": {
        "type": "Laptop",
        "status": "CheckedOut",
        "borrower": {
            "name": "Jane Doe",
            "email": "jane@acme.org"
        },
        "dueDate": "10/31/2025"
    },
    "4": {
        "type": "iPad",
        "status": "CheckedIn",
        "borrower": {
            "name": "",
            "email": ""
        },
        "dueDate": ""
    }
}`

// US-2: This updates ledger item status to "CheckedOut" and updates user's name and email, logs result
function checkoutDevice(ledger, assetTag, borrower) {
    const loadedLedger = loadLedger(ledger);

    loadedLedger[assetTag].status = "CheckedOut";
    loadedLedger[assetTag].borrower.name = borrower.name;
    loadedLedger[assetTag].borrower.email = borrower.email;

    serializeLedger(loadedLedger);

    `${loadedLedger[assetTag].type} with an asset tag of ${assetTag} has been checked out to ${loadedLedger[assetTag].borrower.name}`;
};

checkoutDevice(equipmentLedger, 2, {"name": "Aaron", "email": "aaron@gmail.com"});
// US-3: This clears out all the borrower data and resets the status to "Checked In", logs result
function checkinDevice(ledger, assetTag) {
    const loadedLedger = loadLedger(ledger);

    loadedLedger[assetTag].status = "CheckedIn";
    loadedLedger[assetTag].borrower.name = "";
    loadedLedger[assetTag].borrower.email = "";
    loadedLedger[assetTag].dueDate = "";

    serializeLedger(loadedLedger);

    return `${loadedLedger[assetTag].type} with an asset tag of ${assetTag} has been checked in.`;
}

// US-4: Returns an array of overdue ledger entries sorted by the latest first
function listOverdueDevices(ledger, today) {
    const loadedLedger = loadLedger(ledger);

    let overdueDevicesArray = [];
    let todaysFormattedDate = reformatDate(today);

    for (let assetTag in loadedLedger) {
        if (loadedLedger[assetTag].status === "CheckedOut") {
            const item = loadedLedger[assetTag];
            
            if (item.status !== "CheckedOut" || !item.dueDate) {
                continue;
            }
        
            const dueDateFormatted = reformatDate(item.dueDate);
        
            if (dueDateFormatted < todaysFormattedDate) {
                overdueDevicesArray.push(item);
            }
        }    
    }

    let flag = true;
    while (flag === true) {
        flag = false;
        for (let i = 0; i < overdueDevicesArray.length - 1; i++) {
            let current = overdueDevicesArray[i];
            let next = overdueDevicesArray[i + 1];
            let placeholder = current;
            if (reformatDate(current.dueDate) > reformatDate(next.dueDate)) {
                overdueDevicesArray[i] = next;
                overdueDevicesArray[i + 1] = placeholder;
                flag = true;
            }
        }
    }

    return overdueDevicesArray
}

/*********************** 
 --- HELPER FUNCTIONS ---
************************/ 
// US-5: Helper functions that turn a JSON into a JS Object and vise-versa
function serializeLedger(ledger) {
    return JSON.stringify(ledger);
}

function loadLedger(json) {
    return JSON.parse(json);
}

// Helper function to format date in a comparable way. Used in listOverdueDevices().
function reformatDate(date) {
    const datePartsArray = date.split("/");
    let month = datePartsArray[0];
    let day = datePartsArray[1];
    const year = datePartsArray[2];

    if (month < 10) { month = "0" + month; }
    if (day < 10) { day = "0" + day; }

    const formattedDate = year + month + day;
    return parseInt(formattedDate, 10);
}