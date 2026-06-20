const express = require('express');

const router = express.Router();

const { cityController } = require('../../controllers');

// Post /api/v1/city/

router.post('/',
        cityController.createCity
);


// delete /api/v1/city/:id

router.delete('/:id',
        cityController.deleteCity
);

// update /api/v1/city/id

router.patch('/:id' , 
        cityController.updateCity
);


module.exports = router ;