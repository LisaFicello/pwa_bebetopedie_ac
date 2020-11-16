const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//



const webPush = require('web-push');
const pushServerKeys = require('./pushServerKeys.json');
const pushClientSubscription = require('./pushClientSubscription.json');
var schedule = require('node-schedule');

const fs = require('fs');

var admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);


 
// Test de récupération des donnée
//console.log(pushServerKeys, pushClientSubscription);


webPush.setVapidDetails('mailto:plasson.loris@gmail.com', pushServerKeys.publicKey, pushServerKeys.privateKey);
 

setTimeout(function(){ 
    readSubs();
}, 41000000);




function sendPush(subscription) {
    console.log("trying to push to");
    webPush.sendNotification(subscription, 'Notification envoyée depuis la firebase function')
    .then(
        function(result){
            console.log("sendNotification SUCCESS", result);
        },
        function(err){
            console.log("sendNotification ERROR", err);
        }
    )
    .catch(
        function(err){
            console.log("sendNotification ERROR catch", err);
        }
    )
}

function readSubs(response) {
    admin.database().ref('users/').once('value', (snapshot) => {
        var subscriptions = [];
        var users = snapshot.val();
        snapshot.forEach(function(userChild) {
            userChild.forEach(function(snaps) {
                //console.log("new vallllllll");
                //console.log(snaps.val());
                if (snaps.val()["endpoint"] != null) {
                    //console.log(snaps.val()["endpoint"]);
                    //console.log(snaps.val()["keys"]["auth"]);
                    subscriptions.push(snaps.val());
                }
            });
        });
        //console.log(subscriptions);

        subscriptions.forEach(function(mySub) {
            sendPush(mySub);
        })

        response.send(users.length);
     });
}

// exports.helloWorld = functions.https.onRequest((request, response) => {
//     functions.logger.info("Hello logs!", {structuredData: true});
//     response.send("Hello from Firebase!");
//   });


// exports.register = functions.https.onRequest((request, response) => {
//     functions.logger.info("Register requested", {structuredData: true});
//     const reqdat = request.body;
//     const parsed = JSON.parse(reqdat);
//     subscriptions.push(parsed);
//     console.log(subscriptions);
//     for(var i = 0; i < subscriptions.length; i++) {
//         console.log("hey");
//         console.log(subscriptions[i]);
//     }
//     response.send(parsed);

//     // response.send("Push sending");
//     // broadcastPush();
// });

exports.push = functions.https.onRequest((request, response) => {
    readSubs(response);
});