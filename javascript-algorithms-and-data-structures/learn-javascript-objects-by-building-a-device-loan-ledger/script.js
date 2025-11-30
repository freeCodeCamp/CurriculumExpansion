/*
USER STORIES

1. You should model the ledger as { [assetTag]: { type, status, borrower: { name, email }, dueDate } }.
2. You should implement checkoutDevice(ledger, assetTag, borrower) that clones state, sets borrower info, and logs confirmations.
3. You should implement checkinDevice(ledger, assetTag) that clears borrower info and updates status.
4. You should implement listOverdueDevices(ledger, today) that returns an array of overdue entries sorted by due date.
5. You should implement serializeLedger(ledger) and loadLedger(json) helpers for persistence.

Status' can be: "checked out", "checked in", "overdue"

*/

const equipmentLedger = {
    1: {
        type: "PC",
        status: "",
        borrower: {
            name: "John Smith",
            email: "john@acme.org",
        },
        dueDate: ""
    }
}

// You should implement checkoutDevice(ledger, assetTag, borrower) that clones state, sets borrower info, and logs confirmations.
function checkoutDevice(ledger, assetTag, borrower) {
    // code
    return 0;
}

// You should implement checkinDevice(ledger, assetTag) that clears borrower info and updates status.
function checkinDevice(ledger, assetTag) {
    ledger[assetTag].status = "Checked In";
    ledger[assetTag].borrower.name = "";
    ledger[assetTag].borrower.email = "";
    ledger[assetTag].dueDate = "";

    console.log(`${ledger[assetTag].type} with an asset tag of ${assetTag} has been checked in.`);
}

// You should implement listOverdueDevices(ledger, today) that returns an array of overdue entries sorted by due date.
function listOverdueDevices(ledger, today) {
    let overdueDevicesArray = [];

    return 0;
}

/*********************** 
 * HELPER FUNCTIONS ---
************************/ 
function serializeLedger(ledger) {
    // code
    return 0;
}

function loadLedger(json) {
    // code
    return 0;
}