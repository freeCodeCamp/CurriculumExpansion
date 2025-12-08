/*
USER STORIES

1. You should model the ledger as { [assetTag]: { type, status, borrower: { name, email }, dueDate } }.
2. You should implement checkoutDevice(ledger, assetTag, borrower) that clones state, sets borrower info, and logs confirmations.
3. You should implement checkinDevice(ledger, assetTag) that clears borrower info and updates status.
4. You should implement listOverdueDevices(ledger, today) that returns an array of overdue entries sorted by due date.
5. You should implement serializeLedger(ledger) and loadLedger(json) helpers for persistence.

Status' can be: "checked out", "checked in"

*/

const equipmentLedger = {
    1: {
        type: "PC",
        status: "Checked Out",
        borrower: {
            name: "John Smith",
            email: "john@acme.org",
        },
        dueDate: "11/30/2025"
    },
    2: {
        type: "Laptop",
        status: "Checked In",
        borrower: {
            name: "",
            email: "",
        },
        dueDate: ""
    },
    3: {
        type: "Laptop",
        status: "Checked Out",
        borrower: {
            name: "Quincy Larson",
            email: "quincy@freecodecamp.org",
        },
        dueDate: "10/31/2025"
    },
    4: {
        type: "iPad",
        status: "Checked In",
        borrower: {
            name: "",
            email: "",
        },
        dueDate: ""
    }
}

// You should implement checkoutDevice(ledger, assetTag, borrower) that clones state, sets borrower info, and logs confirmations.
function checkoutDevice(ledger, assetTag, borrower) {
    ledger[assetTag].status = 'Checked Out';
    ledger[assetTag].borrower.name = borrower.name;
    ledger[assetTag].borrower.email = borrower.email;

    console.log(`${ledger[assetTag].type} with an asset tag of ${assetTag} has been checked out to ${ledger[assetTag].borrower.name}`);
};

// You should implement checkinDevice(ledger, assetTag) that clears borrower info and updates status.
function checkinDevice(ledger, assetTag) {
    ledger[assetTag].status = "Checked In";
    ledger[assetTag].borrower.name = "";
    ledger[assetTag].borrower.email = "";
    ledger[assetTag].dueDate = "";

    console.log(`${ledger[assetTag].type} with an asset tag of ${assetTag} has been checked in.`);
}

// You should implement listOverdueDevices(ledger, today) that returns an array of overdue entries sorted by due date. Due date is in the mm/dd/yyyy format.
function listOverdueDevices(ledger, today) {

    //TODO: Fix for a cleaner solution to get year, month, and date (probably regex) to handle single digit months and days.
    let overdueDevicesArray = [];
    const todayYear = today.slice(6);
    const todayMonth = today.slice(0, 2);
    const todayDay = today.slice(3, 5);

    for (let assetTag in ledger) {
        if (ledger[assetTag].status === "Checked Out") {
            const dueDateYear = ledger[assetTag].dueDate.slice(6);
            const dueDateMonth = ledger[assetTag].dueDate.slice(0, 2);
            const dueDateDay = ledger[assetTag].dueDate.slice(3, 5);

            if (todayYear > dueDateYear) {
                overdueDevicesArray.push(ledger[assetTag]);
            } else if (todayYear === dueDateYear) {
                if (todayMonth > dueDateMonth) {
                    overdueDevicesArray.push(ledger[assetTag]);
                } else if (todayMonth === dueDateMonth) {
                    if (todayDay > dueDateDay) {
                        overdueDevicesArray.push(ledger[assetTag]);
                    }
                }
            }
        }
    }

    // TODO: Loop that continues to run until count of sorting switches reaches 0 to sort objects

    return overdueDevicesArray
}

/*********************** 
 --- HELPER FUNCTIONS ---
************************/ 
function serializeLedger(ledger) {
    ledger.stringify();
    return 0;
}

function loadLedger(json) {
    json.parse();
    return 0;
}

function reformatDate(date) {
    const datePartsArray = date.split("/");
    const month = datePartsArray[0];
    const day = datePartsArray[1];
    const year = datePartsArray[2];

    if (month < 10) { month = "0" + month; }
    if (day < 10) { day = "0" + day; }

    return year + month + day;
}