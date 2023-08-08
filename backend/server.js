const express = require("express");
const mongoose =  require("mongoose");
const studModel = require("./models/studentModel.js");
const studcntr = require("./controllers/studentControlle.js");
const cors =  require("cors");
//create app
const app = express();

// SET .env Environment
require('dotenv').config();

//to get json data from body 
app.use(express.json());
app.use(cors());

//mongoDB Connection
mongoose.connect(process.env.Mongo_URL).then( ()=>{
    console.log("MongoDB Connection Established..!");
}).catch(err => console.error('Error connecting to MongoDB', err));


//GET EndPoint
app.get("/api/v1", onFind);

// POST Endpoint
app.post("/api/v1/new", onCreate);

// PUT Endpoint
app.put("/api/v1/update", onUpdate);

// DELETE Endpoint
app.delete("/api/v1/delete", onDelete);


app.listen(process.env.PORT, ()=> {
    console.log("server successfuly running");
});
