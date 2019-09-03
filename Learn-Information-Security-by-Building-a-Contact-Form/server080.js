const express = require("express");
const app = express();
const helmet = require("helmet");
// https://helmetjs.github.io/ - for more information on all packages and uses.

app.use(helmet());

// You can enable additional security features, disable a feature, or change the default settings.
// The `helmet()` function takes a configuration object as an argument.
// const configObject = {}
// app.use(helmet(configObject))

// Pass in a configuration object with they key `noCache` and value `false`.
