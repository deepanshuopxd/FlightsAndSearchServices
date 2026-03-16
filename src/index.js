const express = require('express');
const bodyParser  = require('body-parser');
// require('dotenv').config();
const {PORT} = require('./config/serverConfig')

const SetupAndStartService = async ()=>{
    // const PORT = 3000;
    const app  = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,()=>{
        console.log(`The server is started and running on ${PORT}`);
        // console.log(process.env);
    });
}
SetupAndStartService();