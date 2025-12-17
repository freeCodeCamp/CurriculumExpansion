# Lab Description
You are a software developer tasked with creating a ledger application to manage IT hardware devices provisioned by your company's Service Desk. The ledger's structure is an object made up of `assetTag` properties, and values that are also objects. See below for the structure.

```
const equipmentLedger = {
    assetTag: {
        type: "type",
        status: "status",
        borrower: {
            name: "name",
            email: "email"
        },
        dueDate: "dueDate"
    }
}
```

_Note: `assetTag` is an integer. The properties inside the child object are all of type "string."_

Your ledger needs to satisfy the user stories below to be accepted by the service desk manager.


# User Stories
1. You should model the ledger as `{ [assetTag]: { type, status, borrower: { name, email }, dueDate } }`.
2. You should write a `checkoutDevice(ledger, assetTag, borrower)` function that copies the ledger object, sets `borrower` name and email address info, and returns a confirmation message.
3. You should write a `checkinDevice(ledger, assetTag)` function that clears the borrower's name and email, as well as the `dueDate` property, and updates the device's `status`.
4. You should write a `listOverdueDevices(ledger, today)` function that returns an array of overdue entries sorted by due date.
5. You should write `serializeLedger(ledger)` and `loadLedger(json)` helpers functions to load (convert) a JSON file into a JavaScript object, or save (serialize) a JavaScript object into a JSON object. _Hint: Refer back to your JSON lessons preceeding this lab if you need help._