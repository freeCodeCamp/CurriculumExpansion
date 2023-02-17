const express = require("express");
const app = express();
const helmet = require("helmet");
// https://helmetjs.github.io/ - for more information on all packages and uses.

const helmetConfig = {
  noCache: false
};

app.use(helmet(helmetConfig));
// This will enable an additional feature disabling client-side caching.

// Enable one more feature by passing the key `contentSecurityPolicy` into the configuration object.
// The value of this key will be different.
// Pass the following object as a value.

//  {
//    directives: {
//      defaultSrc: ["'self'"],
//      scriptSrc: ["'self'"],
//      styleSrc: ["'self'"]
//    }
//  }
