# fruits-and-vegetables-API
An API for Fruits and Vegetables built using ExpressJS and NodeJS

This is a simple API for Getting, Updating, Adding and Deleting Fruits and Vegetable objects to an array.

The back-end framework used is ExpressJS.

To use the API, first install NodeJS (https://nodejs.org)
then install ExpressJS using NPM in NodeJS terminal (example: <npm install express> or <npm install> to automatically install all dependencies).
Once installed, type <node app.js> in the NodeJS terminal to start the server which will run at http://localhost:8080 by default.

This project does not utilize a client or front-end. 
To interact with the API use Postman (https://www.postman.com/) to make requests.

Endpoints:
==========

Fruits
------
Get:
/fruits
/fruits/:id
/fruits?color=colorName

Post:
/fruits

Put:
/fruits/:id

Delete:
/fruits/:id

Vegetables
-----------
Get:
/vegetables
/vegetables/:id
/vegetables?color=colorName

Post:
/vegetables

Put:
/vegetables/:id

Delete:
/vegetables/:id
