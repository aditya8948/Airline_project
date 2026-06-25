function addRowLockOnFlight(flightid){
    return `SELECT * from Flights WHERE Flights.id = ${flightid} FOR UPDATE`
}

module.exports = {
    addRowLockOnFlight
}