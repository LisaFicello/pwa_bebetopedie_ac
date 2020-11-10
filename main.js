// Account stuff
const userDiv = document.querySelector('#user-greet');
const connectButtonDiv = document.querySelector('#connect-button');

const loginButton = `
                    <form class="form-inline my-2 my-lg-0" action="/login.html">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Connexion</button>
                    </form>`;

const logOutButton = `
                    <form class="form-inline my-2 my-lg-0">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick="signOut()">Déconnexion</button>
                    </form>`;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log(user.displayName +" is logged in")
        const greetUserName = "<h2>Bienvenue "+user.displayName+" !</h2>";
        userDiv.innerHTML = greetUserName;
        connectButtonDiv.innerHTML = logOutButton;
    } else {
        console.log("No one is logged in")
        connectButtonDiv.innerHTML = loginButton;
    }
  });

const insectesDiv = document.querySelector('#insects');
const fishesDiv = document.querySelector('#fishes');
const marineDiv = document.querySelector('#marine');


function loadInsectes() {
    //TODO: MANAGE SOUTHERN just have to replace the tag

    const allInsectes = insectData.map(t => `
            <div class="col-lg-2 col-sm-2 col-xs-6">
                <div class="thumbnail">
                    <div class="thumb">
                        <img src="https://www.animalcrossing-online.com/img/fond.png" alt="">
                        <div class="${getInsectSpriteClassNameById(t.id-1)}" style="position: absolute;top: 0; margin: 20px 0px 0 15%;"></div>
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
        <div class="col-lg-2 col-sm-2 col-xs-6">
            <div class="thumbnail">
                <div class="thumb">
                    <img src="https://www.animalcrossing-online.com/img/fond.png" alt="">
                    <div class="${getFishSpriteClassNameById(t.id-1)}" style="position: absolute;top: 0; margin: 20px 0px 0 15%;"></div>
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
        <div class="col-lg-2 col-sm-2 col-xs-6">
            <div class="thumbnail">
                <div class="thumb">
                    <img src="https://www.animalcrossing-online.com/img/fond.png" alt="">
                    <div class="${getMarineSpriteClassNameById(t.id-1)}" style="position: absolute;top: 0; margin: 20px 0px 0 15%;"></div>
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
        addInsectId(insectId);
    } else {
        console.log('on degage');
        removeInsectId(insectId);
    }
}

function fishChecked(fishId) {
    const newState = document.getElementById("fish-checkbox-"+fishId).checked;
    console.log(fishData[fishId]["name"]+ " checked: "+ newState);
    if (newState == true){
        addFishId(fishId);
    } else {
        console.log('on degage');
        removeFishId(fishId);
    }
}

function marineChecked(marineId) {
    const newState = document.getElementById("marine-checkbox-"+marineId).checked;
    console.log(marineData[marineId]["name"]+ " checked: "+ newState);
    if (newState == true){
        addMarineId(marineId);
    } else {
        console.log('on degage');
        removeMarineId(marineId);
    }
}

loadInsectes();
loadFishes();
loadMarines();




// Delegates from database API

function insectSateChanged(insectId, state) {
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
    navigator.serviceWorker
        .register('sw.js')
        .catch(err => console.error('service worker NON enregistré', err));
}