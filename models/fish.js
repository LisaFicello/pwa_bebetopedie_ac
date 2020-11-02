var mongoose = require('mongoose');

//Fish Schema
var fishSchema = mongoose.Schema({
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
    },
    size: {
        type: String,
        required: true
    }
});

var Fish = module.exports = mongoose.model('Fish',fishSchema);

//get fishes
module.exports.getFishes = function(callback, limit){
    Fish.find(callback).limit(limit);
}

//get fish
module.exports.getFishById = function(id, callback){
    Fish.findById(id, callback);
}

//add fish
module.exports.addFish = function(fish, callback){
    Fish.create(fish, callback);
}

//update fish
module.exports.updateFish = function(id, fish, options, fallback){
    var query = {_id: id};
    var update = {
        title: fish.title,
        img: fish.img,
        period: fish.period,
        hours: fish.hours,
        place: fish.place,
        price: fish.price,
        size: fish.size
    }
    Fish.findOneAndUpdate(query, update, options, fallback);
}

//delete fish
module.exports.removeFish = function(id, callback){
    var query = {_id: id};
    Fish.remove(query, callback);
}