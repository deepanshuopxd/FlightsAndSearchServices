const express = require('express');

const SetupAndStartService = async ()=>{
    const PORT = 3000;
    const app  = express();
    app.listen(PORT,()=>{
        console.log(`The server is started and running on ${PORT}`);
    })
}
SetupAndStartService();