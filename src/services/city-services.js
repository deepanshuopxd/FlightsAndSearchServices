const {CityRepository} = require('../repository/index');

class CityService{
    constructor(){
        this.cityRepositroy = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }

    } 

    async deleteCity(cityId){
        try {
            const response  = this.cityRepositroy.deleteCity(cityId);
            return  response;
            
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
        
    }

     async updateCity(cityId,data){
        try {
            const city = await this.cityRepositroy.updateCity(cityId,data);
            return city;
            
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }

    }

    async getCity(){
        try {
            const city = await this.cityRepositroy.getCity(cityId);
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
        
    }
}

module.exports = CityService;