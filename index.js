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

//POST	/api/users	Creates a user using the information sent inside the request body.
server.post("/api/users", function(request, response) {
  const newUser = request.body;
  ProjectData.insert(newUser)
    .then(users => {
      console.log(users);
      response.status(201).json(users);
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

//GET	/api/users/:id	Returns the user object with the specified id.
server.get("/api/users/:id", function(request, response) {
  const id = request.params.id;
  ProjectData.findById(id)
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

//DELETE	/api/users/:id	Removes the user with the specified id and returns the deleted user.
server.delete("/api/users/:id", function(request, response) {
  const id = request.params.id;
  ProjectData.remove(id)
    .then((numbOfRecDel) => {
      response.status(200).json(numbOfRecDel);
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

//PUT	/api/users/:id	Updates the user with the specified id using data from the request body. Returns the modified document, NOT the original.
server.put("/api/users/:id", function(request, response) {
  const id = request.params.id;
  ProjectData.update(id, request.body)
    .then((numbOfRecChanged) => {
      response.status(201).json(numbOfRecChanged);
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
