// const fishData = require("./data/fishData.json");
// const insectData = require("./data/insectData.json")


// TODO: Add filters logic here

function getAllCurrentCreatures(){

}

function getNorthernCreature(){

}

function getSouthernCreature(){
    
}

// Fishes

function getCurrentHourFishes() {
    var currentDate = Date.now();
    var currentHour = currentDate.getMonth
    const reader = new FileReader();
    reader.readAsText('./data/fishData.js');
    var data =[];
    for (var i = 0; i <= reader.length; i++) {
        
        data.push(reader[id]);
    }
    return data;
}
// var temps = fishData[0]["times"]["array"];
// for (i=0; i<temps.count; i++)
// if temps[i] == 10 { c ok}
// 10


function getFishById(id) {

}

function getFishSpriteClassNameById(id) {
    if (fishData[id] == null) {return ""}
    var className = "sprite-fish sprite-fish-";
    var fishName = fishData[id]["name"];
    //
    fishName = fishName.replace(/\s+/g, '_').toLowerCase();

    className = className + fishName;
    return className;
}

function getFishImageHTMLById(id) {
    const className = getFishSpriteClassNameById(id);
    const html = `<div class="`+className+`">`;
    return html
}

// Insects

function getAllInsects() {

}

function getInsectById(id) {

}

function getInsectNameById(id) {
    console.log(insectData[id]["name"]);
}

function getInsectSpriteClassNameById(id) {
    if (insectData[id] == null) {return ""}
    var className = "sprite-insect sprite-insect-";
    var insectName = insectData[id]["name"];
    insectName = insectName.replace("'", "");
    insectName = insectName.replace(/\s+/g, '_').toLowerCase();

    className = className + insectName;
    return className;
}


function getInsectImageHTMLById(id) {
    const className = getInsectSpriteClassNameById(id);
    const html = `<div class="`+className+`">`;
    return html
}


// Marine Creatures

function getMarineNameById(id) {
    console.log(marineData[id]["name"]);
}

function getMarineSpriteClassNameById(id) {
    if (marineData[id] == null) {return ""}
    var className = "sprite-marineCreature sprite-marineCreature-";
    var marineName = marineData[id]["name"];
    marineName = marineName.replace("'", "");
    marineName = marineName.replace(/\s+/g, '_').toLowerCase();

    className = className + marineName;
    return className;
}

//Not used
// function getAllInsectImagesHTML() {
//     var html = ``;

//     for (i=0; i < insectData.length - 1; i++) {
//         const insect = insectData[i];
//         html = html + getInsectImageHTMLById(insect["id"]);
//     }

//     return html;
// }



//console.log(getFishSpriteClassNameById(4));