const crud_repositories = require('./crud_repositories');

const {City} = require('../models')
class CityRepository extends crud_repositories {
    constructor(){
        super(City);

    }
}

module.exports = CityRepository;