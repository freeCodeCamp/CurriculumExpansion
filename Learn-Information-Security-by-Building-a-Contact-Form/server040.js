const express = require("express");
const app = express();
const helmet = require("helmet");
// https://helmetjs.github.io/ - for more information on all packages and uses.

app.use(helmet.dnsPrefetchControl());

// Using a helmet security package is done like above.

// This package will handle DNS Prefetch Control.
// It disables browsers from DNS prefetching by disabling 'X-DNS-Prefetch-Control' header
// Sets "X-DNS-Prefetch-Control: off".

// Use another helmet security package `hidePoweredBy`
