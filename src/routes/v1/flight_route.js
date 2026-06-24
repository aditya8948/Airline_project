const express = require('express');

const router = express.Router();

const{FlightMiddlewares} = require('../../middlewares');
const{FlightController} = require('../../controllers');


// POST api/v1  Flight/

router.post('/',
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight
);

//api/v1/flights?trips=MUM-DEL GET
router.get('/',
    FlightController.getAllFlights
);

//api/v1/flight/:id GET
router.get('/:id',
    FlightController.getFlight
);

//api/v1/flight/:id/seats PATCH
router.patch('/:id/seats',
    FlightController.updateSeats
);



module.exports = router;