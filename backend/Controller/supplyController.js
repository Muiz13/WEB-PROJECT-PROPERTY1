const Supply = require("../Models/Supply");
const { BASE_FILE_URL } = require('../BaseURL')
const { deleteFile } = require('../DeleteFile')
const defaultSupply = "default_supply.jpg"

let createSupply = (req, res) => {
    let { title, file } = req.body
    let supplyData = { title, file }
    console.log(supplyData)
    let supply = new Supply({
        ...supplyData
    });
    supply.save().then((supply) => {
        res.status(201).send({ message: "Supply Saved", supply })
    }).catch(err => {
        res.status(500).send({ message: "Error", err })
    })
}
let getAllSupplies = (req, res) => {
    Supply.find({}).then((data) => {
        data.forEach(d => {
            if (d.file && d.file.length > 0)
                d.file = BASE_FILE_URL + d.file
            else
                d.file = BASE_FILE_URL + defaultSupply
        })
        res.status(200).send({ message: "Supplies fetched", data })
    }).catch(err => {
        res.status(500).send({ message: "Error", err })
    })
}
let getSupply = (req, res) => {
    let { id } = req.params
    Supply.findOne({ _id: id }).then((supply) => {
        res.status(200).send({ message: "Supply found", supply })
    }).catch(err => {
        res.status(500).send({ message: "Error", err })
    })
}
let deleteSupply = (req, res) => {
    let { id } = req.params
    Supply.findOne({ _id: id }).then((supply) => {
        deleteFile(supply.file)
    }).catch(err => {
    })

    Supply.deleteOne({ _id: id }).then((supply) => {
        res.status(200).send({ message: "Supply deleted", supply })
    }).catch(err => {
        res.status(500).send({ message: "Error", err })
    })
}
let updateSupply = (req, res) => {
    let { id } = req.params
    let { title, file } = req.body;
    if (file) {
        file = file[0]
    }

    var myquery = { _id: id };
    var newvalues = {
        $set: {
            title, file
        }
    };
    if (file) {
        Supply.findOne({ _id: id }).then((supply) => {
            deleteFile(supply.file)
        }).catch(err => {
        })
    }

    setTimeout(function() {
        Supply.findOneAndUpdate(myquery, newvalues, { new: true }).then((supply) => {
            res.status(200).send({ message: "Supply updated", supply })
        }).catch(err => {
            res.status(500).send({ message: "Error", err })
        })
      }, 500);



}


module.exports = {
    getAllSupplies,
    createSupply,
    deleteSupply,
    getSupply,
    updateSupply
}