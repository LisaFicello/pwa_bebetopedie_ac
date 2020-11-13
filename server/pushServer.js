const webPush = require('web-push');
const pushServerKeys = require('./pushServerKeys.json');
const pushClientSubscription = require('./pushClientSubscription.json');
console.log(pushServerKeys, pushClientSubscription);

webPush.setVapidDetails('mailto:figarelli.lisa@gmail.com', pushServerKeys.publicKey, pushServerKeys.privateKey);

webPush.sendNotification(pushClientSubscription, 'Joyeux anniversaire !')
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