// Online or not?
var isOnline = false;

// Account stuff
const loginZoneDiv = document.querySelector('#login-zone');

const loginButton = `<ul class="nav navbar-nav navbar-right"><button onclick="window.location='/login.html';" type="button" class="btn bg-success btn-labeled" style="margin-top: 5px;"><b><i class="fa fa-sign-in" style="height: 16px;width: 16px;"></i></b> Connect</button></ul>`;

function logOutButton(text) {
    return `
    <ul class="nav navbar-nav navbar-right">
        <div class="btn-group" style="margin-top: 5px;">
            <button type="button" class="btn bg-success btn-labeled dropdown-toggle" data-toggle="dropdown">
                <b><i class="icon-reading"></i></b> ${text} <span class="caret"></span>
            </button>
            <ul class="dropdown-menu dropdown-menu-right">
                <li><a onclick="signOut()"><i class="fa fa-sign-out"></i> Logout</a></li>
            </ul>
        </div>
    </ul>`;
}

function logOutButtonOffline(text) {
    return `
    <ul class="nav navbar-nav navbar-right">
        <div class="btn-group" style="margin-top: 5px;">
            <button type="button" class="btn bg-danger btn-labeled dropdown-toggle" data-toggle="dropdown">
                <b><i class="icon-reading"></i></b> ${text} <span class="label label-default">OFFLINE MODE</span><span class="caret"></span>
            </button>
            <ul class="dropdown-menu dropdown-menu-right">
                <li><a onclick="signOut()"><i class="fa fa-sign-out"></i> Logout</a></li>
            </ul>
        </div>
    </ul>`;
}

const offlineButton = `<ul class="nav navbar-nav navbar-right"><button type="button" class="btn bg-danger btn-labeled" style="margin-top: 5px;"><b><i class="icon-connection" style="height: 16px;width: 16px;"></i></b> OFFLINE MODE</button></ul>`

firebase.auth().onAuthStateChanged(function(user) {checkLoginButton(user)});

var connectedRef = firebase.database().ref(".info/connected");

function checkLoginButton(user) {
    connectedRef.on("value", function(snap) {
        isOnline = snap.val();
        if (user && isOnline == true) {
            loginZoneDiv.innerHTML = logOutButton(user.displayName);
            return;
        } 
        if (user && isOnline == false) {
            loginZoneDiv.innerHTML = logOutButtonOffline(user.displayName);;
            return;
        }
        if (user == null && isOnline == true) {
            loginZoneDiv.innerHTML = loginButton;
            return;
        }
        if (user == null && isOnline == false) {
            loginZoneDiv.innerHTML = offlineButton;
            return;
        } 
    });
}

const insectesDiv = document.querySelector('#insects');
const fishesDiv = document.querySelector('#fishes');
const marineDiv = document.querySelector('#marine');

function resetCreatures(){
    $(".creatures-div").empty();
    $(".creatures-div").show();
}

function loadInsectes(data) {

    const allInsectes = data.map(t => `
            <div class="col-lg-2 col-sm-3 col-md-3 col-xs-6" style="padding: 15px 20px 0px 10px;">
                <div class="thumbnail">
                    <div class="thumb">
                        <div class="outer-div" style="background-image: url(images/icons/fond.png);">
                            <div class="inner-div ${getInsectSpriteClassNameById(t.id)}" style="margin: auto;"></div>
                        </div>
                        <div class="center">
                            <label class="label">
                                <input id="insect-checkbox-${t.id}" onclick="insectChecked(${t.id})" class="label__checkbox" type="checkbox" />
                                <span class="label__text">
                                    <span class="label__check">
                                        <i class="fa fa-check icon"></i>
                                    </span>
                                </span>
                            </label>
                        </div>
                    </div>  
                    <div class="caption">
                        <h6 class="text-semibold no-margin text-center animals-name">${t.name}</h6>
                        <p class="text-muted mb-15 mt-5">
                        <span data-months-northern-array="${t.months.northern.array}" data-months-northern-text="${t.months.northern.text}" data-months-southern-array="${t.months.southern.array}" data-months-southern-text="${t.months.southern.text}"><strong>Period : </strong> <span class="period-text">${(getHemisphereSelected() == "northern") ? t.months.northern.text : t.months.southern.text}</span></span><br>
                        <span data-times-array="${t.times.array}"><strong>Time : </strong>${t.times.text}</span><br>
                        <span><strong>Location : </strong><span>${t.location}</span></span><br>
                        <span><strong>Price : </strong>${t.price}</span>
                        </p>
                    </div>
                </div>
            </div>   
    `).join('');

    insectesDiv.innerHTML = allInsectes; 

}

function loadFishes(data) {

    const allFishes = data.map(t => `    
        <div class="col-lg-2 col-sm-3 col-md-3 col-xs-6" style="padding: 15px 20px 0px 10px;">
            <div class="thumbnail">
                <div class="thumb">
                    <div class="outer-div" style="background-image: url(images/icons/fond.png);">
                        <div class="inner-div ${getFishSpriteClassNameById(t.id)}" style="margin: auto;"></div>
                    </div>
                    <div class="center">
                        <label class="label">
                            <input id="fish-checkbox-${t.id}" onclick="fishChecked(${t.id})" class="label__checkbox" type="checkbox" />
                            <span class="label__text">
                                <span class="label__check">
                                    <i class="fa fa-check icon"></i>
                                </span>
                            </span>
                        </label>
                    </div>
                </div>  
                <div class="caption">
                    <h6 class="text-semibold no-margin text-center animals-name">${t.name}</h6>
                    <p class="text-muted mb-15 mt-5">
                    <span data-months-northern-array="${t.months.northern.array}" data-months-northern-text="${t.months.northern.text}" data-months-southern-array="${t.months.southern.array}" data-months-southern-text="${t.months.southern.text}"><strong>Period : </strong> <span class="period-text">${(getHemisphereSelected() == "northern") ? t.months.northern.text : t.months.southern.text}</span></span><br>
                    <span data-times-array="${t.times.array}"><strong>Time : </strong>${t.times.text}</span><br>
                    <span><strong>Location : </strong><span>${t.location}</span></span><br>
                    <span><strong>Price : </strong>${t.price}</span><br>
                    <span><strong>Size : </strong>${t.shadow_size}</span>
                    </p>
                </div>
            </div>
        </div>  
    `).join('');

    fishesDiv.innerHTML = allFishes; 

}

function loadMarines(data) {

    const allMarines = data.map(t => `
        <div class="col-lg-2 col-sm-3 col-md-3 col-xs-6" style="padding: 15px 20px 0px 10px;">
            <div class="thumbnail">
                <div class="thumb">
                    <div class="outer-div" style="background-image: url(images/icons/fond.png);">
                        <div class="inner-div ${getMarineSpriteClassNameById(t.id)}" style="margin: auto;"></div>
                    </div>
                    <div class="center">
                        <label class="label">
                            <input id="marine-checkbox-${t.id}" onclick="marineChecked(${t.id})" class="label__checkbox" type="checkbox" />
                            <span class="label__text">
                                <span class="label__check">
                                    <i class="fa fa-check icon"></i>
                                </span>
                            </span>
                        </label>
                    </div>
                </div>  
                <div class="caption">
                    <h6 class="text-semibold no-margin text-center animals-name">${t.name}</h6>
                    <p class="text-muted mb-15 mt-5">
                    <span data-months-northern-array="${t.months.northern.array}" data-months-northern-text="${t.months.northern.text}" data-months-southern-array="${t.months.southern.array}" data-months-southern-text="${t.months.southern.text}"><strong>Period : </strong> <span class="period-text">${(getHemisphereSelected() == "northern") ? t.months.northern.text : t.months.southern.text}</span></span><br>
                    <span data-times-array="${t.times.array}"><strong>Time : </strong>${t.times.text}</span><br>
                    <span><strong>Location : </strong><span>${t.location}</span></span><br>
                    <span><strong>Price : </strong>${t.price}</span><br>
                    <span><strong>Size : </strong>${t.shadow_size}</span><br>
                    <span><strong>Movement : </strong>${t.Swimming_pattern}</span>
                    </p>
                </div>
            </div>
        </div>  
    `).join('');

    marineDiv.innerHTML = allMarines; 

}

function insectChecked(insectId) {
    const newState = document.getElementById("insect-checkbox-" + insectId).checked;
    console.log(getCreatureNameById(insectData, insectId) + " checked: " + newState);
    if (newState == true){
        addInsectId(insectId, isOnline);
    } else {
        console.log('on degage');
        removeInsectId(insectId, isOnline);
    }
}

function fishChecked(fishId) {
    const newState = document.getElementById("fish-checkbox-" + fishId).checked;
    console.log(getCreatureNameById(fishData, fishId)+ " checked: " + newState);
    if (newState == true){
        addFishId(fishId, isOnline);
    } else {
        console.log('on degage');
        removeFishId(fishId, isOnline);
    }
}

function marineChecked(marineId) {
    const newState = document.getElementById("marine-checkbox-" + marineId).checked;
    console.log(getCreatureNameById(marineData, marineId) + " checked: " + newState);
    if (newState == true){
        addMarineId(marineId, isOnline);
    } else {
        console.log('on degage');
        removeMarineId(marineId, isOnline);
    }
}

function loadCreatures(){
    resetCreatures();
    var insectDataFilter;
    var fishDataFilter;
    var marineDataFilter;
    switch($("[name='creatureTypeRadios" + isMobile() + "']:checked").val()){
        case 'all':
            insectDataFilter = getFilterInsectes();
            loadInsectes(insectDataFilter);
            fishDataFilter = getFilterFish();
            loadFishes(fishDataFilter);
            marineDataFilter = getFilterMarine();
            loadMarines(marineDataFilter);
            break;
        case 'insects':
            insectDataFilter = getFilterInsectes();
            loadInsectes(insectDataFilter);
            break;
        case 'fishes':
            fishDataFilter = getFilterFish();
            loadFishes(fishDataFilter);
            break;
        case 'marine':
            marineDataFilter = getFilterMarine();
            loadMarines(marineDataFilter);
            break;
        default:
            break;
    }
    tickOfflineCreatures();
}

insectSortByName();
fishSortByName();
marineSortByName();
loadCreatures();

// Delegates from database API

function insectStateChanged(insectId, state) {
    document.getElementById("insect-checkbox-"+insectId).checked = state;
}

function fishStateChanged(fishId, state) {
    document.getElementById("fish-checkbox-"+fishId).checked = state;
}

function marineStateChanged(marineId, state) {
    document.getElementById("marine-checkbox-"+marineId).checked = state;
}

	
// Register SW

if(navigator.serviceWorker) {
	// Enregistrement du service worker
    navigator.serviceWorker
        .register('sw.js')
        
        // 8.4 Récupération ou création d'une souscription auprès d'un push service
        .then(registration =>{
        
        	// tentative d'obtention d'une souscription
            // public vapid key générée par web-push, en prod appel d'api via fetch plutôt que static
            const publicKey = "BOhE6m10LnZWx0G6GRP79CCNU1wm-WhrE9v5QQebDKBfJZ2CXS5UbeBzhaAr6Hnb9WB5gScllXpqvBmFjfyd2Sg";
            registration.pushManager.getSubscription().then(subscription => {
            
            	// Déjà une souscription, on l'affiche
                if(subscription){
                    console.log("subscription", subscription);
                    // Extraction des données permettant ensuite l'envoi de notification
                    var dataExtract = extractKeysFromArrayBuffer(subscription);
                    sendSubscriptionInServer(dataExtract);
                    return subscription;
                }
                
                // Pas de souscription
                else{
                    // demande de souscription (clef convertie en buffer pour faire la demande)
                    const convertedKey = urlBase64ToUint8Array(publicKey);
                    return registration.pushManager.subscribe({
                        userVisibleOnly: true, // accord de confiance
                        applicationServerKey: convertedKey
                    })
                    .then(newSubscription => {
                    	// Affiche le résultat pour vérifier
                        console.log('newSubscription', newSubscription);
                        var dataExtract = extractKeysFromArrayBuffer(subscription);
                        sendSubscriptionInServer(dataExtract);
                        return newSubscription;
                    })
 
                }
            })
        })
        .catch(err => console.error('service worker NON enregistré', err));
}

function sendSubscriptionInServer(dataJson){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user == null) {return;}
        subRef = firebase.database().ref('users/' + user.uid + "/pushSub/");
        subRef.set(dataJson);
    });      
}

function extractKeysFromArrayBuffer(subscription){
    // no more keys proprety directly visible on the subscription objet. So you have to use getKey()
    const keyArrayBuffer = subscription.getKey('p256dh');
    const authArrayBuffer = subscription.getKey('auth');
    const p256dh = btoa(String.fromCharCode.apply(null, new Uint8Array(keyArrayBuffer)));
    const auth = btoa(String.fromCharCode.apply(null, new Uint8Array(authArrayBuffer)));
    console.log('p256dh key', keyArrayBuffer, p256dh);
    console.log('auth key', authArrayBuffer, auth);
    
    // Paramètres nécessaires à l'objet de notification pushSubscription
    console.log('endpoint :');
    console.dir(subscription.endpoint);
    console.log('p256dh key :', p256dh);
    console.log('auth key :', auth);

    return {
        "endpoint": subscription.endpoint,
        "keys": {
            "p256dh": p256dh,
            "auth": auth
        }
    }

}

// 8.4 Récupération ou création d'une souscription auprès d'un push service
// Fonction pour convertir string en array buffer pour envoie au push service
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
   
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
   
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

const cacheName = 'bebetopedia-1.0';

if(window.caches) {
    caches.open(cacheName);
    caches.open('other-1.0');
    caches.keys().then(console.log);
}