var mongoose = require('mongoose');

//marineCreature Schema
var marineCreatureSchema = mongoose.Schema({
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
    },
    movement: {
        type: String,
        required: true
    }
});

var MarineCreature = module.exports = mongoose.model('MarineCreature',marineCreatureSchema);

//get marine creatures
module.exports.getMarineCreatures = function(callback, limit){
    MarineCreature.find(callback).limit(limit);
}

//get marine creature
module.exports.getMarineCreatureById = function(id, callback){
    MarineCreature.findById(id, callback);
}

//add marine creature
module.exports.addMarineCreature = function(marineCreature, callback){
    MarineCreature.create(marineCreature, callback);
}

//update marine creature
module.exports.updateMarineCreature = function(id, marineCreature, options, fallback){
    var query = {_id: id};
    var update = {
        title: marineCreature.title,
        img: marineCreature.img,
        period: marineCreature.period,
        hours: marineCreature.hours,
        place: marineCreature.place,
        price: marineCreature.price,
        size: marineCreature.size,
        movement: marineCreature.movement
    }
    MarineCreature.findOneAndUpdate(query, update, options, fallback);
}

//delete marine creature
module.exports.removeMarineCreature = function(id, callback){
    var query = {_id: id};
    MarineCreature.remove(query, callback);
}