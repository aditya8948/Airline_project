const express = require('express');

const router = express.Router();

const {infoController} = require('../../controllers')
const airplaneRoutes = require('./airplane_route');
const cityRoutes = require('./city_route')
const airportRoutes = require('./airport_route')
const flightRoutes = require('./flight_route');

router.use('/airplane', airplaneRoutes);
router.use('/city', cityRoutes);
router.use('/airport',airportRoutes);
router.use('/flight', flightRoutes);

router.get('/info' , infoController.info);
    

module.exports = router ;