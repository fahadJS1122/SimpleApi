const express = require('express');
const app = express();
const port = 3000;

// Import the controller
const myController = require('./controllers/myController');

// Define a route and use the controller
app.get('/api/hello', myController.sayHello);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});