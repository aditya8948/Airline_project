const crudRepository = require('./crud_repositories');

const{Airport} = require('../models');

class AirportRepository extends crudRepository {
    constructor(){
        super(Airport);
    }
}

module.exports = AirportRepository;