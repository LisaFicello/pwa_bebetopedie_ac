var database = firebase.database()


var insectsUniqueIds = [];

var insectsRef;

firebase.auth().onAuthStateChanged(function(user) {
    if (user == null) { return}
    insectsRef = firebase.database().ref('users/' + user.uid + "/caughtCreatures/insects");
    
    insectsRef.on('child_added', function(data) {
        console.log("child added" + data.key)
        //STOPPED RIGHT HERE
        // wtf is in data.value ?? it is supposed to be the id of insect        
        console.log("child added id" + data.value);
        console.log(data);
        const insectIdAdded = data.val; 
        const key = data.key;
        insectsUniqueIds.push({key: insectIdAdded, value: key});
    });
    
    insectsRef.on('child_removed', function(data) {
        if (insectsUniqueIds[data.key] != null) {
            delete insectsUniqueIds[data.key];
        }
    });
    
});


function addInsectId(insectId) {
    const user = firebase.auth().currentUser;
    if (user == null) { return }
    console.log(insectId);
    insectsRef.push().set(insectId);
}

function removeInsectId(insectId) {
    const user = firebase.auth().currentUser;
    if (user == null) { return }
    console.log(insectsUniqueIds[insectId].value);
    insectsRef.child(insectsUniqueIds[insectId].value).remove();
}