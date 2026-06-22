const express = require('express');

const router = express.Router();

const{FlightMiddlewares} = require('../../middlewares');
const{FlightController} = require('../../controllers');


// POST api/v1  Flight/

router.post('/',
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight
);

router.get('/',
    FlightController.getAllFlights
);


module.exports = router;