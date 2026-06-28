const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes');
const db = require('./models');
const { City, Airplane } = require('./models');
const CityRepository = require('./repository/city-repository');

const SetupAndStartService = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`The server is started and running on ${PORT}`);

        
            // Sync database only if SYNC_DB is set in .env
            // if (process.env.SYNC_DB) {
            //     await db.sequelize.sync({ alter: true });
    //}

            // Create a sample airplane
            // const airplane = await Airplane.create({
            //     modelNumber: 'Airbus A230',
            //     capacity: 180
            // });

            // console.log("Airplane created successfully:", airplane.toJSON());

            // Examples:
            // await City.create({ name: "New Delhi" });

            // const repo = new CityRepository();
            // await repo.createCity({ name: "Mumbai" });

            
    });
};

SetupAndStartService();