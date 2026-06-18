const crudRepository = require('./crud_repositories');
const{Airplane} = require('../models');

class AirplaneRepository extends crudRepository {
    constructor(){
        super(Airplane);
    }
}

module.exports = AirplaneRepository;