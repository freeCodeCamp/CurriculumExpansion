# User Stories

1. You should have a class `PiggyError` that extends `Error` and sets a `status` property.

2. You should have a class `BankBrokenError` that extends `PiggyError` and sets the status to `410`.

3. You should have a class `WeakToolError` that extends `PiggyError` and sets the status to `406`.

4. The POST `/deposit` route should call `next` with a `PiggyError` (status 400) if `piggyBank.isBroken` is true.

5. The POST `/deposit` route should call `next` with a `PiggyError` (status 400) if `amount` is invalid.

6. The POST `/withdraw` route should call `next` with a `PiggyError` (status 405).

7. The POST `/smash` route should call `next` with a `BankBrokenError` if `piggyBank.isBroken` is true.

8. The POST `/smash` route should check for the `x-tool` header and call `next` with a `PiggyError` (status 400) if it is missing.

9. The POST `/smash` route should call `next` with a `WeakToolError` if the tool is not 'hammer' or 'rock'.

10. You should have a global error handling middleware with 4 arguments at the end of your file.

11. The global error handler should send a JSON response with the status code from `err.status` (or 500) and an object containing the error message and type.
