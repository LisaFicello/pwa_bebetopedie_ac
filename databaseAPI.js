var database = firebase.database()

var insectsUniqueIds = {};
var fishesUniqueIds = {};
var marinesUniqueIds = {};

var insectsRef;
var fishesRef;
var marinesRef;

var insectsLoaded = false;
var fishesLoaded = false;
var marinesLoaded = false;


firebase.auth().onAuthStateChanged(function(user) {
    tickOfflineCreatures();
    if (user == null) {return;}
    insectsRef = firebase.database().ref('users/' + user.uid + "/caughtCreatures/insects");
    fishesRef = firebase.database().ref('users/' + user.uid + "/caughtCreatures/fishes");
    marinesRef = firebase.database().ref('users/' + user.uid + "/caughtCreatures/marines");
    
    insectsRef.on('child_added', function(data) {
       // console.log("child added " + data.key)      
        console.log("child added id " + data.val());
        //console.log(data);
        const creatureIdAdded = data.val(); 
        const key = data.key;
        insectsUniqueIds[creatureIdAdded] = key;
        OfflineCreatures.getCreature("insect", creatureIdAdded).then(creature => {
            if (creature == null) {
                OfflineCreatures.putCreature("insect", ["added", creatureIdAdded], creatureIdAdded);
                insectStateChanged(creatureIdAdded, true);
            }
        })
    });
    
    insectsRef.on('child_removed', function(data) {
        console.log("child removed "+data.val())
        if (insectsUniqueIds[data.val()] != null) {
            delete insectsUniqueIds[data.val()];
            OfflineCreatures.deleteCreature("insect",data.val());
            insectStateChanged(data.val(), false);
        }
    });

    fishesRef.on('child_added', function(data) {
        //console.log("child added " + data.key)      
        console.log("child added id " + data.val());
        //console.log(data);
        const creatureIdAdded = data.val(); 
        const key = data.key;
        fishesUniqueIds[creatureIdAdded] = key;
        OfflineCreatures.getCreature("fish", creatureIdAdded).then(creature => {
            console.log(creature);
            if (creature == null) {
                console.log("creature fish is null, so adding it");
                OfflineCreatures.putCreature("fish", ["added", creatureIdAdded], creatureIdAdded);
                fishStateChanged(creatureIdAdded, true);
            }
        })
    });
    
    fishesRef.on('child_removed', function(data) {
        console.log("child removed "+data.val())
        if (fishesUniqueIds[data.val()] != null) {
            delete fishesUniqueIds[data.val()];
            OfflineCreatures.deleteCreature("fish", data.val());
            fishStateChanged(data.val(), false);
        }
    });

    marinesRef.on('child_added', function(data) {
        //console.log("child added " + data.key)      
        console.log("child added id " + data.val());
        //console.log(data);
        const creatureIdAdded = data.val(); 
        const key = data.key;
        marinesUniqueIds[creatureIdAdded] = key;
        OfflineCreatures.getCreature("marine", creatureIdAdded).then(creature => {
            if (creature == null) {
                OfflineCreatures.putCreature("marine", ["added", creatureIdAdded], creatureIdAdded);
                marineStateChanged(creatureIdAdded, true);
            }
        })
    });
    
    marinesRef.on('child_removed', function(data) {
        console.log("child removed "+data.val())
        if (marinesUniqueIds[data.val()] != null) {
            delete marinesUniqueIds[data.val()];
            OfflineCreatures.deleteCreature("marine", data.val());
            marineStateChanged(data.val(), false);
        }
    });

    //Initial transfer readyier
    insectsRef.once("value", function(snapshot) {insectsLoaded = true; checkIfInitialDataReady()});
    fishesRef.once("value", function(snapshot) {fishesLoaded = true; checkIfInitialDataReady()});
    marinesRef.once("value", function(snapshot) {marinesLoaded = true; checkIfInitialDataReady()});
});

// Insects

function addInsectId(insectId, online) {
    const user = firebase.auth().currentUser;
    if (user == null || online == false) {return OfflineCreatures.putCreature("insect",["added", insectId], insectId)} 
    //console.log(insectId);
    insectsRef.push().set(insectId);
}

function removeInsectId(insectId, online) {
    const user = firebase.auth().currentUser;
    if (user == null || online == false) {return OfflineCreatures.putCreature("insect",["removed", insectId], insectId)}
    //console.log(insectsUniqueIds[insectId]);
    insectsRef.child(insectsUniqueIds[insectId]).remove();
}

// Fishes

function addFishId(fishId, online) {
    const user = firebase.auth().currentUser;
    if (user == null || online == false) {return OfflineCreatures.putCreature("fish",["added", fishId], fishId)} 
    // console.log(fishId);
    fishesRef.push().set(fishId);
}

function removeFishId(fishId, online) {
    const user = firebase.auth().currentUser;
    if (user == null || online == false) {return OfflineCreatures.putCreature("fish",["removed", fishId], fishId)}
    // console.log(fishesUniqueIds[fishId]);
    fishesRef.child(fishesUniqueIds[fishId]).remove();
}

// Marines Creatures

function addMarineId(marineId, online) {
    const user = firebase.auth().currentUser;
    if (user == null || online == false) {return OfflineCreatures.putCreature("marine",["added", marineId], marineId)} 
    // console.log(marineId);
    marinesRef.push().set(marineId);
}

function removeMarineId(marineId, online) {
    const user = firebase.auth().currentUser;
    if (user == null || online == false) {return OfflineCreatures.putCreature("marine",["removed", marineId], marineId)}
    // console.log(marinesUniqueIds[marineId]);
    marinesRef.child(marinesUniqueIds[marineId]).remove();
}



// Offline managment

function tickOfflineCreatures() {
    OfflineCreatures.getAllCreatures("insect").then(function(creatures) {
        //console.log("mes bons insects"+insects);
        for(var i = 0; i < creatures.length; i++) {
            const state = creatures[i][0];
            const creatureId = creatures[i][1];
            if(state == "added") {insectStateChanged(creatureId, true)}
            if(state == "removed") {insectStateChanged(creatureId, false)}
        }
    });
    OfflineCreatures.getAllCreatures("fish").then(function(creatures) {
        //console.log("mes bons insects"+insects);
        for(var i = 0; i < creatures.length; i++) {
            const state = creatures[i][0];
            const creatureId = creatures[i][1];
            if(state == "added") {fishStateChanged(creatureId, true)}
            if(state == "removed") {fishStateChanged(creatureId, false)}
        }
    });
    OfflineCreatures.getAllCreatures("marine").then(function(creatures) {
        //console.log("mes bons insects"+insects);
        for(var i = 0; i < creatures.length; i++) {
            const state = creatures[i][0];
            const creatureId = creatures[i][1];
            if(state == "added") {marineStateChanged(creatureId, true)}
            if(state == "removed") {marineStateChanged(creatureId, false)}
        }
    });
}


function checkIfInitialDataReady() {
    if (insectsLoaded == true && fishesLoaded == true && marinesLoaded == true) {
        compareOfflineCreaturesWithOnlineOnes();
    }
}

function compareOfflineCreaturesWithOnlineOnes() {    
    insectsRef.once("value").then(function(snapshot) {
        // const numberOfDistantChildrenInFirebse = snapshot.numChildren();
        // const numberOfDistantChildrenInCode = distantChildrenInCode.length;
        // if (numberOfDistantChildrenInCode != numberOfDistantChildrenInFirebse) {
        //     //not have enough time to download everything, repeat in 1 sec needed
        //     console.log("Not good");
        //     return;
        // }

        //Add missing creatures
        OfflineCreatures.getAllCreatures("insect").then(function(creatures) {
            const distantInsectsChildrenInCode = Object.keys(insectsUniqueIds);
            for(var i = 0; i < creatures.length; i++) {
                //console.log("offline db insects "+insects);
                //console.log("online db insects stored locally "+distantChildrenInCode);
                const state = creatures[i][0];
                const creatureId = creatures[i][1];
                console.log("yes "+state+" "+creatureId);
                if (state == "added") {
                    if (distantInsectsChildrenInCode.indexOf(creatureId.toString()) < 0) {
                        console.log("Insect number "+creatureId+" was added locally but is absent in remote DB, adding it now.");
                        addInsectId(creatureId, true);
                    }
                } else if (state == "removed") {
                    console.log("will remove "+creatureId+" now");
                    removeInsectId(creatureId, true);
                    OfflineCreatures.deleteCreature("insect", creatureId);
                }
            }
        });

        OfflineCreatures.getAllCreatures("fish").then(function(creatures) {
            const distantFishesChildrenInCode = Object.keys(fishesUniqueIds);
            for(var i = 0; i < creatures.length; i++) {
                //console.log("offline db insects "+insects);
                //console.log("online db insects stored locally "+distantChildrenInCode);
                const state = creatures[i][0];
                const creatureId = creatures[i][1];
                console.log("yes "+state+" "+creatureId);
                if (state == "added") {
                    if (distantFishesChildrenInCode.indexOf(creatureId.toString()) < 0) {
                        console.log("ok wtf "+Object.keys(fishesUniqueIds));
                        console.log("creature id were searching for "+creatureId.toString());
                        console.log(distantFishesChildrenInCode);
                        console.log("Fish number "+creatureId+" was added locally but is absent in remote DB, adding it now.");
                        addFishId(creatureId, true);
                    }
                } else if (state == "removed") {
                    console.log("will remove "+creatureId+" now");
                    removeFishId(creatureId, true);
                    OfflineCreatures.deleteCreature("fish", creatureId);
                }
            }
        });

        OfflineCreatures.getAllCreatures("marine").then(function(creatures) {
            const distantMarinesChildrenIncode = Object.keys(marinesUniqueIds);
            for(var i = 0; i < creatures.length; i++) {
                //console.log("offline db insects "+insects);
                //console.log("online db insects stored locally "+distantChildrenInCode);
                const state = creatures[i][0];
                const creatureId = creatures[i][1];
                console.log("yes "+state+" "+creatureId);
                if (state == "added") {
                    if (distantMarinesChildrenIncode.indexOf(creatureId.toString()) < 0) {
                        console.log("Marine number "+creatureId+" was added locally but is absent in remote DB, adding it now.");
                        addMarineId(creatureId, true);
                    }
                } else if (state == "removed") {
                    console.log("will remove "+creatureId+" now");
                    removeMarineId(creatureId, true);
                    OfflineCreatures.deleteCreature("marine", creatureId);
                }
            }
        });
    })
}