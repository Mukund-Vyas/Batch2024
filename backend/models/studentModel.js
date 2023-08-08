const mongoose = require("mongoose");

const students = mongoose.Schema({
    Name: {
        type: String,
        require: [true, "Enter Student Name.!"]
    },

    Mobile: {
        type: Number,
        min: [10, 'Must be at least 10'],
        max: [10, 'Must not be Exied 10'],
        require: [true, "Enter Student Mobile No.!"]
    },

    Email: {
        type: String,
        require: [true, "Enter Student Email.!"] 
    },

    Linkedin: {
        type: String,
        require: [true, "Enter Student Linkedin Account Link.!"]
    },

    Languages: {
        type: String,
        require: [true, "Language are mendetory.!"]
    },

    Autodict: {
        type: String
    }
});

//Create a model
const studentModel = mongoose.model('Students', students);

//Export Modual
module.exports = studentModel;