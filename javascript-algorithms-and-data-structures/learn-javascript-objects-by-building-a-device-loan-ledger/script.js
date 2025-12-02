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
    let deviceDueDate = new Date();
    deviceDueDate.setDate(deviceDueDate.getDate() + 14);        // sets date 14 days into the future
    const dueDateMonth = deviceDueDate.getMonth() + 1;
    const dueDateDay = deviceDueDate.getDate();
    const dueDateYear = deviceDueDate.getFullYear();

    ledger[assetTag].status = 'Checked Out';
    ledger[assetTag].borrower.name = borrower.name;
    ledger[assetTag].borrower.email = borrower.email;
    ledger[assetTag].dueDate = `${dueDateMonth}/${dueDateDay}/${dueDateYear}`;
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
    const todayDate = new Date();
    for (const device in ledger) {
        if (device.dueDate < todayDate) {
            overdueDevicesArray.push(device);
        }
    }
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