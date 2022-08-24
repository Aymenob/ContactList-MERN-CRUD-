var User = require("../models/User")


//Posting Many Users
function ManyUsers(req, res) {
    User.create(req.body, function (err, result) {
        err ? console.log(err) :
            res.json(result)
    })

}

//Posting One User

function OneUser(req, res) {
    let user = new User(req.body)
    user.save(function (err, result) {
        err ? console.log(err) :
            res.json(result)
    })

}

//Find List Of Users

function ListOfUsers(req, res) {
    User.find({}, function (err, result) {
        err ? console.log(err) :
        res.status(201).json(result)
        
    })
}

// Updating a User with id

function UpdateUser(req, res) {
    User.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }, function (err, result) {
        err ? console.log(err) :
            res.json(result)
    })
}

//Deleting a User with id

function DeleteUser(req, res) {


    User.FindByIdAndDelete({ _id: req.params.id }, function (err, result) {
        err ? console.log(err) :
            res.json(result)
    })
}

//Deleting All Users

function DeleteAllUsers(req, res) {


    User.collection.remove(function (err, result) {
        err ? console.log(err) :
            res.json(result)
    })
}
module.exports = { ManyUsers, OneUser, ListOfUsers, UpdateUser, DeleteUser, DeleteAllUsers }