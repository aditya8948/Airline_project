const { StatusCodes } = require('http-status-codes');
const{cityService} = require('../services');

const{ErrorResponse , SuccessResponse} = require('../utils/common');
const { success } = require('../utils/common/error_response');

/*

POST : /city
req-body {name : {}}
*/

async function createCity(req , res){
    try {
        const city = await cityService.createCity({ name: req.body.name });
        SuccessResponse.message = 'successfully added city';
        SuccessResponse.data = city;

        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
         ErrorResponse.message = error.message || 'Something went wrong while creating city';
        ErrorResponse.error = error.explanation || error.message;
        return res
                  .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                  .json(ErrorResponse);
        
    }
}
/*

DELETE : /city/:id
*/

async function deleteCity(req , res){
    try {
            const response = await cityService.deleteCity(req.params.id);
            SuccessResponse.message = 'successfully deleted the city';
            SuccessResponse.data = response;
            return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
          ErrorResponse.error = error;
          return res
                  .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                  .json(ErrorResponse);
        
         }
    }


/*
 * update : city/id
 * req-body: {name : {}}
 *  */ 

async function updateCity(req , res){
    try{
    const response = await cityService.updateCity(req.params.id,
       {
        name: req.body.name
    });
     SuccessResponse.message = "successfully updated the city";
        SuccessResponse.data = response;
        return res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.message = error.message || 'id not present ';
        return res
                  .status(error.statusCode || StatusCodes.NOT_FOUND)
                  .json(ErrorResponse);
    }
}


module.exports = {
    createCity,
    deleteCity,
    updateCity
}