const studModel = require("../models/studentModel.js");

// Create Method 
module.exports =  onCreate = (req, res) => {
    if(req.headers['content-length'] > 0)
    {
        studModel.create(req.body).then(()=>{
            studModel.find({})
            .then(docs => {
                res.send(docs);
            })
            .catch(err => {
                console.log(err);
            });
            console.log("Document Created..!");
        }).catch(err => console.error('Error..! to Create Document: ', err));
    }
    else{
        res.send("Please Provide JSON Object to Create New Document..!");
    }
}


// Create Get Endpoint
module.exports =  onFind = (req,res)=>{
    studModel.find({})
    .then(docs => {
        res.send(docs);
    })
    .catch(err => {
        console.log(err);
    });
    //res.send("Getting GET request");
};


// Create Put Endpoint
module.exports =  onUpdate = (req,res) => {
    var filter = req.body.filter;
    var data = req.body.info;
    // res.send(filter, data);
    // res.send(req.body.info);
    studModel.updateOne(filter,data)
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        console.log(err);
    });

    res.send("Getting PUT request");
}


//Create Delete Endpoint
module.exports =  onDelete = (req,res) => {
    studModel.deleteOne({name: "Ayush"})
    .then(() => {
        res.send("Ayush Deleted");
    })
    .catch(err => {
        console.log(err);
    });

    onFind();
} 
