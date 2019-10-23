// In order to the user to be able to communicate with the server,
// our application should implement an endpoint for each HTTP method we want to handle
// There are several HTTP methods but the most used are:

//    GET: requests a representation of the specified resource, sould only retrieve data (e.g. html pages, json content)
//    POST: creates or modify a resource within the aplication (e.g. new user, login)
//    PUT: to modify an existing resource (e.g. update user infos)
//    DELETE: to remove an resource from the server (e.g. clear todos tasks)

// Now let's try to create a endpoint for the users to communicate with the application usign the GET method
// The app instance has a method for each HTTP method with tha same name
// that receives the url that will match the route and a callback that will be executed when this happen

// Try to create the pattern that prints a message on the console when user access 'http://localhost:3000/'

const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
