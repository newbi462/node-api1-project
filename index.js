// implement your API here


//IMPORTS
//Dependancies
const express = require("express");

// Import Data
const ProjectData = require("./data/db.js");


//START WITH EXPRESS
const server = express();


//MIDDLE WARE
server.use(express.json());


//ENDPOINTS
//defult is running mesage
server.get("/", function(request, response) {
  response.send({meg: `I am running on ${port}`});
});


//LISTEN SERVER
const port = 8000;
server.listen(port, () => console.log((`\n ** api on: ${port} ** \n`)));
