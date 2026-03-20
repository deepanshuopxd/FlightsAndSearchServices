const express = require('express');
const bodyParser  = require('body-parser');
// require('dotenv').config();
const {PORT} = require('./config/serverConfig')
const {City} = require('./models/index');
const ApiRoutes = require('./routes/index');
const CityRepository = require('./repository/city-repository');
const SetupAndStartService = async ()=>{
    // const PORT = 3000;
    const app  = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,async ()=>{
        console.log(`The server is started and running on ${PORT}`);
        // console.log(process.env);
        // await City.create({
        //     name:"New Delhi",
        // })
        app.use('/api' , ApiRoutes);
        
        const repo = new CityRepository();
        // repo.createCity({name:"Mumbai"});
        // repo.createCity({name:"New Delhi"});
        // repo.createCity({name:"Lucknow"});
        // repo.deleteCity({cityId:6});
    }); 
}
SetupAndStartService();