const { StatusCodes } = require('http-status-codes');

const { airportService } = require('../services');

const { ErrorResponse, SuccessResponse } = require('../utils/common');

/**
 * post airport
 * request body {name : Indira Gandhi International Airpor, code : DEL , cityId : 12 , address <>}
 */

async function createAirport(req , res){
   try{
     const response = await airportService.createAirport({
        name: req.body.name,
        code: req.body.code,
        cityId: req.body.cityId,
        address: req.body.address
    });
    SuccessResponse.message = 'successfully created airport';
    SuccessResponse.data = response;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch(error){
        ErrorResponse.message = error.message || 'Something went wrong while creating airport';
        ErrorResponse.error = error.explanation || error.message;
        return res
                .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse);
    }
}


/**
 * get airport
 * req-body {}
 */

async function getAirports(req, res){
   try{
    const response = await airportService.getAirports();
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch(error){
        ErrorResponse.error = error;
        return res
                  .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                  .json(ErrorResponse)
    }
}

/**
 * GET airport/:id
 * req-body {id : 5}
 */

async function getAirport(req, res){
    try {
        const response = await airportService.getAirport(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                  .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                  .json(ErrorResponse)
    }
}

/**
 * Delete : /airport/:id
 * req-body :{}
 */
async function deleteAirport(req , res){
    try {
        const airport = await airportService.deleteAirport(req.params.id);
        SuccessResponse.message = 'succesfully deleted a airport ';
        SuccessResponse.data = airport;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res
                  .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                  .json(ErrorResponse);
        
    }
}

/**
 * UPDATE /airport/:id
 *  req-body {name : Indira Gandhi International Airpor, code : DEL , cityId : 12 , address <>}
 */

async function updateAirport(req , res){
    try{
    const response = await airportService.updateAirport(req.params.id,{
        name: req.body.name,
        code: req.body.code,
        cityId: req.body.cityId,
        address: req.body.address
    })
    SuccessResponse.message = 'Successfully update tthe airport. data';
    SuccessResponse.data = response;
    return res
              .status(StatusCodes.OK)
              .json(SuccessResponse);
    } catch(error){
        ErrorResponse.error = error;
        ErrorResponse.message = error.message || 'id not present ';
        return res
                  .status(error.statusCode || StatusCodes.NOT_FOUND)
                  .json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    getAirport,
    getAirports,
    deleteAirport,
    updateAirport
}