const express = require('express');

const router = express.Router();

const { CityController } = require('../../controllers');

// Post /api/v1/city/

router.post('/',
        CityController.createCity
);


// delete /api/v1/city/:id

router.delete('/:id',
        CityController.deleteCity
);

// update /api/v1/city/id

router.patch('/:id' , 
        CityController.updateCity
);


module.exports = router ;