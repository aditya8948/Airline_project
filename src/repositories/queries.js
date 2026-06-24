function addRowLockOnFlight(flightid){
    return `SELECT * from Flights WHERE Flights.id = ${flight_id} FOR UPDATE`
}

module.exports = {
    addRowLockOnFlight
}