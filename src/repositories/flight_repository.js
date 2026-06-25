const crudRepository = require('./crud_repositories');
const Sequelize = require('sequelize')
const{Flight,Airplane,Airport,City} = require('../models');
const db = require('../models');
const{addRowLockOnFlight} =require('./queries')

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
                ),
                // nested join to city
                include: [{
                    model: City,
                    as: 'city',
                    required: true
                }]
                },
                 {
                model: Airport,
                required: true,
                as: 'arrival_airport',
                on: Sequelize.where(
                    Sequelize.col("Flight.arrivalAirportId"),
                    "=",
                    Sequelize.col("arrival_airport.code")
                ),
                  include: [{
                    model: City,
                    as: 'city',
                    required: true
                }]
                }
            ]
        })
        return response;
    }

    async UpdateRemainingSeats(flight_id, seats, dec = true){
       // add row l ock (pessimistic concurrency control)
        await db.sequelize.query(addRowLockOnFlight(flight_id));


        const flight = await Flight.findByPk(flight_id);
        if(dec){
            await flight.decrement('totalSeats', {by: seats});
        }else{ 
        await flight.increment('totalSeats', {by: seats});
        }
        return flight;
        }
        
}

module.exports = FlightRepository;