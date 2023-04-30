const express = require('express');

const fruits = [
    {id: 1, name: "Apple", color: "red", size: "small", plantType: "tree"},
    {id: 2, name: "Banana", color: "yellow", size: "small", plantType: "tree"},
    {id: 3, name: "Cherry", color: "red", size: "tiny", plantType: "tree"},
    {id: 4, name: "Strawberry", color: "red", size: "tiny", plantType: "vine"},
    {id: 5, name: "Grape", color: "purple", size: "tiny", plantType: "vine"},
    {id: 6, name: "Watermelon", color: "green", size: "big", plantType: "vine"},
    {id: 7, name: "Blueberry", color: "blue", size: "tiny", plantType: "bush"},
    {id: 8, name: "Raspberry", color: "red", size: "tiny", plantType: "bush"},
];

// Create the router
fruitsRouter = express.Router();

// GET routes
fruitsRouter.get('/', (req, res, next) => {
    // Return array of fruits that have color = req.query.color
    if(req.query.color){        
        const response = fruits.filter((element) => element.color === req.query.color);
        res.status(200).send(response);
    }
    else{
        // Return ALL fruits
        res.status(200).send(fruits);
    }
});

fruitsRouter.get('/:id', (req, res, next) => {
    // Find the fruit with id.
    const fruit = fruits.find((element) => element.id === Number(req.params.id));      
    if(fruit){
        res.status(200).send(fruit);
    }
    else{
        res.status(404).send();
    }
});


// POST routes
fruitsRouter.post('/', (req, res, next) => {
    // Check if a fruit object with this name already exists
    const fruitIndex = fruits.findIndex((element) => {
        return element.name === req.body.name;
    });

    if(fruitIndex === -1){
        // Generate new ID
        let searchForId = true;
        let newId = 1;
        while(searchForId){
            let checkId = fruits.findIndex((element) => {return element.id === newId});
            if(checkId !== -1){
                newId++;
            }
            else{
                searchForId = false;
            }
        }
        // Create new fruit obj using req.body
        const newFruit = {
            id:newId,
            name:req.body.name,
            color:req.body.color,
            size:req.body.size,
            plantType:req.body.plantType
        };

        // Add the fruit object to the fruits array
        fruits.push(newFruit);

        res.status(201).send(newFruit);
    }
    else{
        res.status(409).send();
    }
});


// PUT routes
fruitsRouter.put('/:id', (req, res, next) => {
    // Check if a fruit object with this ID already exists
    const fruitIndex = fruits.findIndex((element) => {
        return element.id === Number(req.params.id);
    });

    if(fruitIndex !== -1){
        // Edit fruit obj
        fruits[fruitIndex] = {
            id:Number(req.params.id),
            name:req.body.name,
            color:req.body.color,
            size:req.body.size,
            plantType:req.body.plantType
        }

        res.status(200).send(fruits[fruitIndex]);
    }
    else{
        res.status(404).send();
    }
});

// DELTE routes
fruitsRouter.delete('/:id', (req, res, next) => {
    // Check if a fruit object with this ID already exists
    const fruitIndex = fruits.findIndex((element) => {
        return element.id === Number(req.params.id);
    });

    if(fruitIndex !== -1){
        // Delete fruit obj
        fruits.splice(fruitIndex, 1);

        res.status(200).send();
    }
    else{
        res.status(404).send();
    }
});


// Export the router
module.exports = fruitsRouter;



