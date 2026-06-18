const {StatusCodes} = require('http-status-codes');
const {airplaneService} = require('../services');

async function createAirplane(req , res){
    try {
        const airplane = await airplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        return res
                .status(StatusCodes.CREATED)
                .json({
                    success : true,
                    message: "succesfully create a file ",
                    error : {}
                })
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createAirplane
}