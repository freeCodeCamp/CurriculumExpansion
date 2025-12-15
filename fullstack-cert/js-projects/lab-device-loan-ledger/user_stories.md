# User Stories
1. You should model the ledger as `{ [assetTag]: { type, status, borrower: { name, email }, dueDate } }`.
2. You should implement `checkoutDevice(ledger, assetTag, borrower)` that clones state, sets borrower info, and logs confirmations.
3. You should implement `checkinDevice(ledger, assetTag)` that clears borrower info and updates status.
4. You should implement `listOverdueDevices(ledger, today)` that returns an array of overdue entries sorted by due date.
5. You should implement `serializeLedger(ledger)` and `loadLedger(json)` helpers for persistence.