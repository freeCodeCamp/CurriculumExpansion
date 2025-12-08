// US-1: Creating a ledger per Github issue requirements
const equipmentLedger = {
    1: {
        type: "PC",
        status: "CheckedOut",
        borrower: {
            name: "John Smith",
            email: "john@acme.org",
        },
        dueDate: "11/30/2025"
    },
    2: {
        type: "Laptop",
        status: "CheckedIn",
        borrower: {
            name: "",
            email: "",
        },
        dueDate: ""
    },
    3: {
        type: "Laptop",
        status: "CheckedOut",
        borrower: {
            name: "Quincy Larson",
            email: "quincy@freecodecamp.org",
        },
        dueDate: "10/31/2025"
    },
    4: {
        type: "iPad",
        status: "CheckedIn",
        borrower: {
            name: "",
            email: "",
        },
        dueDate: ""
    }
}

// US-2: This updates ledger item status to "CheckedOut" and updates user's name and email, logs result
function checkoutDevice(ledger, assetTag, borrower) {
    ledger[assetTag].status = 'CheckedOut';
    ledger[assetTag].borrower.name = borrower.name;
    ledger[assetTag].borrower.email = borrower.email;

    console.log(`${ledger[assetTag].type} with an asset tag of ${assetTag} has been checked out to ${ledger[assetTag].borrower.name}`);
};

// US-3: This clears out all the borrower data and resets the status to "Checked In", logs result
function checkinDevice(ledger, assetTag) {
    ledger[assetTag].status = "CheckedIn";
    ledger[assetTag].borrower.name = "";
    ledger[assetTag].borrower.email = "";
    ledger[assetTag].dueDate = "";

    console.log(`${ledger[assetTag].type} with an asset tag of ${assetTag} has been checked in.`);
}

// US-4: Returns an array of overdue ledger entries sorted by the latest first
function listOverdueDevices(ledger, today) {
    let overdueDevicesArray = [];
    let todaysFormattedDate = reformatDate(today);

    for (let assetTag in ledger) {
        if (ledger[assetTag].status === "CheckedOut") {
            const item = ledger[assetTag];
            
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
    ledger.stringify();
    return 0;
}

function loadLedger(json) {
    json.parse();
    return 0;
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