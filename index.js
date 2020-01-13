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

//GET	/api/users	Returns an array of all the user objects contained in the database.
server.get("/api/users", function(request, response) {
  ProjectData.find()
    .then(users => {
      response.status(200).json(users);
      //console.log(users);
    })
    .catch( error => {
      console.log(error);
      response.status(500).json(
        {
          erroMessage: "It is BROKE!!!, U fix ITS"
        }
      )
    })
});


//LISTEN SERVER
const port = 8000;
server.listen(port, () => console.log((`\n ** api on: ${port} ** \n`)));
