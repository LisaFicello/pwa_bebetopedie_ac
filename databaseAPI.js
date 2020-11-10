var database = firebase.database()

var insectsUniqueIds = {};
var fishesUniqueIds = {};
var marinesUniqueIds = {};

var insectsRef;
var fishesRef;
var marinesRef;

var offlineInsectsId = [];
var offlineFishesId = [];
var offlineMarinesId = [];


firebase.auth().onAuthStateChanged(function(user) {
    if (user == null) { return}
    insectsRef = firebase.database().ref('users/' + user.uid + "/caughtCreatures/insects");
    fishesRef = firebase.database().ref('users/' + user.uid + "/caughtCreatures/fishes");
    marinesRef = firebase.database().ref('users/' + user.uid + "/caughtCreatures/marines");
    
    insectsRef.on('child_added', function(data) {
       // console.log("child added " + data.key)      
        console.log("child added id " + data.val());
        //console.log(data);
        const insectIdAdded = data.val(); 
        const key = data.key;
        insectsUniqueIds[insectIdAdded] = key;
        insectSateChanged(insectIdAdded, true);
    });
    
    insectsRef.on('child_removed', function(data) {
        console.log("child removed "+data.val())
        if (insectsUniqueIds[data.val()] != null) {
            delete insectsUniqueIds[data.val()];
            insectSateChanged(data.val(), false);
        }
    });

    fishesRef.on('child_added', function(data) {
        //console.log("child added " + data.key)      
        console.log("child added id " + data.val());
        //console.log(data);
        const fishIdAdded = data.val(); 
        const key = data.key;
        fishesUniqueIds[fishIdAdded] = key;
        fishStateChanged(fishIdAdded, true);
    });
    
    fishesRef.on('child_removed', function(data) {
        console.log("child removed "+data.val())
        if (fishesUniqueIds[data.val()] != null) {
            delete fishesUniqueIds[data.val()];
            fishStateChanged(data.val(), false);
        }
    });

    marinesRef.on('child_added', function(data) {
        //console.log("child added " + data.key)      
        console.log("child added id " + data.val());
        //console.log(data);
        const marineIdAdded = data.val(); 
        const key = data.key;
        marinesUniqueIds[marineIdAdded] = key;
        marineStateChanged(marineIdAdded, true);
    });
    
    marinesRef.on('child_removed', function(data) {
        console.log("child removed "+data.val())
        if (marinesUniqueIds[data.val()] != null) {
            delete marinesUniqueIds[data.val()];
            marineStateChanged(data.val(), false);
        }
    });
    
});

// Insects

function addInsectId(insectId) {
    const user = firebase.auth().currentUser;
    if (user == null) { return }
    console.log(insectId);
    insectsRef.push().set(insectId);
}

function removeInsectId(insectId) {
    const user = firebase.auth().currentUser;
    if (user == null) { return }
    console.log(insectsUniqueIds[insectId]);
    insectsRef.child(insectsUniqueIds[insectId]).remove();
}

// Fishes

function addFishId(fishId) {
    const user = firebase.auth().currentUser;
    if (user == null) { return }
    console.log(fishId);
    fishesRef.push().set(fishId);
}

function removeFishId(fishId) {
    const user = firebase.auth().currentUser;
    if (user == null) { return }
    console.log(fishesUniqueIds[fishId]);
    fishesRef.child(fishesUniqueIds[fishId]).remove();
}

// Marines Creatures

function addMarineId(marineId) {
    const user = firebase.auth().currentUser;
    if (user == null) { return }
    console.log(marineId);
    marinesRef.push().set(marineId);
}

function removeMarineId(marineId) {
    const user = firebase.auth().currentUser;
    if (user == null) { return }
    console.log(marinesUniqueIds[marineId]);
    marinesRef.child(marinesUniqueIds[marineId]).remove();
}