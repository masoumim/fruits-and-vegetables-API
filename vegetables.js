const express = require('express');

const vegetables = [
    {id: 1, name: "Garlic", color: "white", size: "small", plantType: "bulb"},
    {id: 2, name: "Asparagus", color: "green", size: "medium", plantType: "stem"},
    {id: 3, name: "Beets", color: "red", size: "small", plantType: "root"},
    {id: 4, name: "Brocoli", color: "green", size: "medium", plantType: "flower"},
    {id: 5, name: "Carrot", color: "orange", size: "medium", plantType: "root"},
    {id: 6, name: "Cauliflower", color: "white", size: "medium", plantType: "flower"},
    {id: 7, name: "Spinach", color: "green", size: "medium", plantType: "leaf"},
    {id: 8, name: "Onion", color: "white", size: "small", plantType: "bulb"},
];

// Create the router
vegetablesRouter = express.Router();

// GET routes
vegetablesRouter.get('/', (req, res, next) => {
    // Return array of vegetables that have color = req.query.color
    if(req.query.color){        
        const response = vegetables.filter((element) => element.color === req.query.color);
        res.status(200).send(response);
    }
    else{
        // Return ALL vegetables
        res.status(200).send(vegetables);
    }
});

vegetablesRouter.get('/:id', (req, res, next) => {
    // Find the vegetable with id.
    const vegetable = vegetables.find((element) => element.id === Number(req.params.id));      
    if(vegetable){
        res.status(200).send(vegetable);
    }
    else{
        res.status(404).send();
    }
});


// POST routes
vegetablesRouter.post('/', (req, res, next) => {
    // Check if a vegetable object with this name already exists
    const vegetableIndex = vegetables.findIndex((element) => {
        return element.name === req.body.name;
    });

    if(vegetableIndex === -1){
        // Generate new ID
        let searchForId = true;
        let newId = 1;
        while(searchForId){
            let checkId = vegetables.findIndex((element) => {return element.id === newId});
            if(checkId !== -1){
                newId++;
            }
            else{
                searchForId = false;
            }
        }
        // Create new vegetable obj using req.body
        const newVegetable = {
            id:newId,
            name:req.body.name,
            color:req.body.color,
            size:req.body.size,
            plantType:req.body.plantType
        };

        // Add the vegetable object to the vegetables array
        vegetables.push(newVegetable);

        res.status(201).send(newVegetable);
    }
    else{
        res.status(409).send();
    }
});

// PUT routes
vegetablesRouter.put('/:id', (req, res, next) => {
    // Check if a vegetable object with this ID already exists
    const vegetableIndex = vegetables.findIndex((element) => {
        return element.id === Number(req.params.id);
    });

    if(vegetableIndex !== -1){
        // Edit vegetable obj
        vegetables[vegetableIndex] = {
            id:Number(req.params.id),
            name:req.body.name,
            color:req.body.color,
            size:req.body.size,
            plantType:req.body.plantType
        }

        res.status(200).send(vegetables[vegetableIndex]);
    }
    else{
        res.status(404).send();
    }
});



// DELTE routes
vegetablesRouter.delete('/:id', (req, res, next) => {
    // Check if a vegetable object with this ID already exists
    const vegetableIndex = vegetables.findIndex((element) => {
        return element.id === Number(req.params.id);
    });

    if(vegetableIndex !== -1){
        // Delete vegetable obj
        vegetables.splice(vegetableIndex, 1);

        res.status(200).send();
    }
    else{
        res.status(404).send();
    }
});


// Export the router
module.exports = vegetablesRouter;



