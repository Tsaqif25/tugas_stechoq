// Import  framework expres
const express = require('express');
// Create an instance of the Express application
const app = express();
// Import the body-parser middleware for parsing JSON bodies
const bodyParser = require('body-parser');

// Middleware to parse incoming JSON bodies of requests.
const jsonParserMiddleware = bodyParser.json();

// Use the JSON parsing middleware for all routes
app.use(jsonParserMiddleware);
// Additional middleware to parse JSON bodies (alternative method)
app.use(express.json());

// The port on which the server will listen.
const port = 3001;

// The routes module containing API routes.
const routes = require("../routes/router");

// Use the routes module for paths starting with "/api".
app.use("/api", routes);

// A route handler for the root path ("/").
app.get('/', (req, res) => {
  // Send a simple response for the root path
  res.send('my name is Tsaqif');
});

// Start the Express server and listen on the specified port.
app.listen(port, () => {
  // Log a message when the server is successfully listening
  console.log(`Example app listening on port ${port}`);
});
