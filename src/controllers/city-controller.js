const {CityService} = require('../services/index');

const cityService = new CityService();

const create = async(req,res)=>{
    try {
        const city  = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            succes:true,
            message: 'Successfully created a city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to create a city',
            err:error
        });
    }
}
//  DELETE -> /city/:id
const destroy = async(req,res)=>{
    try {
        const response  = await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data:response,
            succes:true,
            message: 'Successfully destroyed a city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to delete the city',
            err:error
        });
    }
}
const get = async(req,res)=>{
    try {
        const response  = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            succes:true,
            message: 'Successfully fetched a city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to fetch the city',
            err:error
        });
    }
}
// PATCH -> /city/:id
const update = async(req,res)=>{
    try {
        const response  = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            succes:true,
            message: 'Successfully updated a city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to update the city',
            err:error
        });
    }


}


module.exports = {
    create,
    destroy,
    update,
    get
}