const crudRepository = require('./crud_repositories');
const Sequelize = require('sequelize')
const{Flight,Airplane,Airport} = require('../models');

class FlightRepository extends crudRepository {
    constructor(){
        super(Flight);
    }

    async getAllFlights(filter, sort){
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            include:[
                {
                    model: Airplane,
                    required: true, // true => inner join , default outer join
                    as: 'airplane_detail'
                },
                {
                model: Airport,
                required: true,
                as: 'departure_airport',
                on: Sequelize.where(
                    Sequelize.col("Flight.departureAirportId"),
                    "=",
                    Sequelize.col("departure_airport.code")
                )
                },
                 {
                model: Airport,
                required: true,
                as: 'arrival_airport',
                on: Sequelize.where(
                    Sequelize.col("Flight.arrivalAirportId"),
                    "=",
                    Sequelize.col("arrival_airport.code")
                )
                }
            ]
        })
        return response;
    }
}

module.exports = FlightRepository;