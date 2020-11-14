// Online or not?
var isOnline = false;


// Account stuff
const loginZoneDiv = document.querySelector('#login-zone');

const loginButton = `
                    <ul class="nav navbar-nav navbar-right">       
                        <button onclick="window.location='/login.html';" type="button" class="btn bg-success btn-labeled" style="margin-top: 5px;"><b><i class="fa fa-sign-in" style="height: 16px;width: 16px;"></i></b> Connect</button>
                    </ul>`;


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
const eventsDiv = document.querySelector('#events');

function loadEvents() {
    //TODO: MANAGE SOUTHERN just have to replace the tag

    const allInsectes = eventData.map(t => `
            <div class="col-lg-2 col-sm-3 col-md-3 col-xs-6" style="padding: 15px 20px 0px 10px;">
                <div class="thumbnail">
                    <div class="thumb">
                        <div class="outer-div" style="background-image: url('https://www.animalcrossing-online.com/img/fond.png');">
                            <div class="inner-div ${getEventSpriteClassNameById(t.id-1)}" style="margin: auto;"></div>
                        </div>
                    </div>  
                    <div class="caption">
                        <h6 class="text-semibold no-margin text-center animals-name">${t.title}</h6>
                        <p class="text-muted mb-15 mt-5">
                            <span><strong>Date : </strong>${t.text}</span>
                        </p>
                    </div>
                </div>
            </div>   
    `).join('');

    insectesDiv.innerHTML = allInsectes; 

}


function loadInsectes() {
    //TODO: MANAGE SOUTHERN just have to replace the tag

    const allInsectes = insectData.map(t => `
            <div class="col-lg-2 col-sm-3 col-md-3 col-xs-6" style="padding: 15px 20px 0px 10px;">
                <div class="thumbnail">
                    <div class="thumb">
                        <div class="outer-div" style="background-image: url('https://www.animalcrossing-online.com/img/fond.png');">
                            <div class="inner-div ${getInsectSpriteClassNameById(t.id-1)}" style="margin: auto;"></div>
                        </div>
                        <div class="center">
                            <label class="label">
                                <input id="insect-checkbox-${t.id-1}" onclick="insectChecked(${t.id-1})" class="label__checkbox" type="checkbox" />
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
                        <span data-months-northern-array="${t.months.northern.array}" data-months-northern-text="${t.months.northern.text}" data-months-southern-array="${t.months.southern.array}" data-months-southern-text="${t.months.southern.text}"><strong>Period : </strong> <span class="period-text">${t.months.northern.text}</span></span><br>
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

function loadFishes() {
    //TODO: MANAGE SOUTHERN just have to replace the tag
    const allFishes = fishData.map(t => `    
        <div class="col-lg-2 col-sm-3 col-md-3 col-xs-6" style="padding: 15px 20px 0px 10px;">
            <div class="thumbnail">
                <div class="thumb">
                    <div class="outer-div" style="background-image: url('https://www.animalcrossing-online.com/img/fond.png');">
                        <div class="inner-div ${getFishSpriteClassNameById(t.id-1)}" style="margin: auto;"></div>
                    </div>
                    <div class="center">
                        <label class="label">
                            <input id="fish-checkbox-${t.id-1}" onclick="fishChecked(${t.id-1})" class="label__checkbox" type="checkbox" />
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
                    <span data-months-northern-array="${t.months.northern.array}" data-months-northern-text="${t.months.northern.text}" data-months-southern-array="${t.months.southern.array}" data-months-southern-text="${t.months.southern.text}"><strong>Period : </strong> <span class="period-text">${t.months.northern.text}</span></span><br>
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

function loadMarines() {
    //TODO: MANAGE SOUTHERN just have to replace the tag
    const allMarines = marineData.map(t => `
        <div class="col-lg-2 col-sm-3 col-md-3 col-xs-6" style="padding: 15px 20px 0px 10px;">
            <div class="thumbnail">
                <div class="thumb">
                    <div class="outer-div" style="background-image: url('https://www.animalcrossing-online.com/img/fond.png');">
                        <div class="inner-div ${getMarineSpriteClassNameById(t.id-1)}" style="margin: auto;"></div>
                    </div>
                    <div class="center">
                        <label class="label">
                            <input id="marine-checkbox-${t.id-1}" onclick="marineChecked(${t.id-1})" class="label__checkbox" type="checkbox" />
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
                    <span data-months-northern-array="${t.months.northern.array}" data-months-northern-text="${t.months.northern.text}" data-months-southern-array="${t.months.southern.array}" data-months-southern-text="${t.months.southern.text}"><strong>Period : </strong> <span class="period-text">${t.months.northern.text}</span></span><br>
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
    const newState = document.getElementById("insect-checkbox-"+insectId).checked;
    console.log(insectData[insectId]["name"]+ " checked: "+ newState);
    if (newState == true){
        addInsectId(insectId, isOnline);
    } else {
        console.log('on degage');
        removeInsectId(insectId, isOnline);
    }
}

function fishChecked(fishId) {
    const newState = document.getElementById("fish-checkbox-"+fishId).checked;
    console.log(fishData[fishId]["name"]+ " checked: "+ newState);
    if (newState == true){
        addFishId(fishId, isOnline);
    } else {
        console.log('on degage');
        removeFishId(fishId, isOnline);
    }
}

function marineChecked(marineId) {
    const newState = document.getElementById("marine-checkbox-"+marineId).checked;
    console.log(marineData[marineId]["name"]+ " checked: "+ newState);
    if (newState == true){
        addMarineId(marineId, isOnline);
    } else {
        console.log('on degage');
        removeMarineId(marineId, isOnline);
    }
}

loadInsectes();
loadFishes();
loadMarines();
//loadEvents();




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




// PWA
if(navigator.serviceWorker) {
    navigator.serviceWorker
        .register('sw.js')
        .catch(err => console.error('service worker NON enregistré', err));
}

const cacheName = 'bebetopedia-1.0';
if(window.caches) {
    caches.open(cacheName);
    caches.open('other-1.0');
    caches.keys().then(console.log);
}