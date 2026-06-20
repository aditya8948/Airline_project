const express = require('express');

const router = express.Router();

const {infoController} = require('../../controllers')
const airplaneRoutes = require('./airplane_route');
const cityRoutes = require('./city_route')

router.use('/airplane', airplaneRoutes);
router.use('/city', cityRoutes);

router.get('/info' , infoController.info);
    

module.exports = router ;