const { StatusCodes } = require("http-status-codes");

const {ErrorResponse} = require('../utils/common');

function validateCreateRequest(req , res, next) {
    if(!req.body.airplaneId){
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = 'Model airplaneId not found in the incoming request in the correct form '
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = 'Model departureAirportId not found in the incoming request in the correct form '
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = 'Model arrivalAirportId not found in the incoming request in the correct form '
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
     if(!req.body.arrivalTime){
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = 'Model carrivalTime not found in the incoming request in the correct form '
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
     if(!req.body.price){
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = 'Model price not found in the incoming request in the correct form '
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
      if(!req.body.totalSeats){
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = 'Model totalSeats not found in the incoming request in the correct form '
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }

    next();
}

module.exports = {validateCreateRequest};