/*
Fruits & Vegetables API:
This api is used to get, add, update and delete fruits and vegetables.
The fruits.js file contains the fruits array that holds fruit objects.
The vegetables.js file contains the vegetables array that holds vegetable objects.
The back-end framework used is Express js.
*/

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

// Use static server to serve the Website
// 'Static' refers to static files such as CSS, HTML, Images etc.
// The static files would be located in the 'public' folder.
app.use(express.static('public'));


// This adds the ability to POST body data to the API (req.body),
// instead of just though URL queries / params.
// This also allows POSTing body data to the API via Postman.
// In short, it adds BODY PARSING functionality.
app.use(express.json());

// Import fruitsRouter.
const fruitsRouter = require('./fruits.js');

// Mount the fruitsRouter to the '/fruits' route.
app.use('/fruits', fruitsRouter);

// Import vegetablesRouter.
const vegetablesRouter = require('./vegetables.js');

// Mount the vegetablesRouter to the '/vegetables' route.
app.use('/vegetables', vegetablesRouter);


// Start the server listening.
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });
