const express = require('express');
const app = express();

// Create a new instance of Express named 'app' with the following code: `const app = express();`

app.use(express.json());

app.listen(5500, () => {
    console.log('Server is listening on 5500');
});