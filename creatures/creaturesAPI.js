// const fishData = require("./data/fishData.json");
// const insectData = require("./data/insectData.json")


// TODO: Add filters logic here

function getAllCreatures(){

}

// Fishes

function getAllFishes() {

}

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