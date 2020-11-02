var mongoose = require('mongoose');

//Bugs Schema
var bugsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    hours: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});

var Bug = module.exports = mongoose.model('Bug',bugsSchema);

//get bugs
module.exports.getBugs = function(callback, limit){
    Bug.find(callback).limit(limit);
}

//get bug
module.exports.getBugById = function(id, callback){
    Bug.findById(id, callback);
}

//add bug
module.exports.addBug = function(bug, callback){
    Bug.create(bug, callback);
}

//update bug
module.exports.updateBug = function(id, bug, options, fallback){
    var query = {_id: id};
    var update = {
        title: bug.title,
        img: bug.img,
        period: bug.period,
        hours: bug.hours,
        place: bug.place,
        price: bug.price
    }
    Bug.findOneAndUpdate(query, update, options, fallback);
}

//delete bug
module.exports.removeBug = function(id, callback){
    var query = {_id: id};
    Bug.remove(query, callback);
}