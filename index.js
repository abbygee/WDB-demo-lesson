// "importing" express and creating an express app (which allows us to start a backend server essentially!)
const express = require("express");
const app = express();

// middleware that helps us parse together/read data in the JSON format (easy for human to read)
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// "importing" our mongodb database connection 
const InitiateMongoServer = require("./db");
InitiateMongoServer();

// PORT initialization and connection confirmation :)
const PORT = process.env.PORT || 4000;
app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
  });

/** 
 * The general format of a route 
 * app.METHOD('url tail/route name', (request, response) => {try...}) 
*/
app.get("/", (req, res) => {
    res.json({ message: "API Working!" });
  });

// using/referencing the routes we wrote in classes.js 
const classes = require("./routes/classes")
app.use("/class", classes);
