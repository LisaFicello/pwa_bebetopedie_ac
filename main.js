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


function loadInsectes() {
    //TODO: MANAGE SOUTHERN just have to replace the tag
    const allInsectes = insectData.map(t => `
        <div class="col-md-2">
            <div class="card">
                <div style="background:url(https://www.animalcrossing-online.com/img/fond.png);" align="center">
                <div class="${getInsectSpriteClassNameById(t.id-1)}"></div>
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
                <div class="card-body" style="padding: 5px;">
                    <h5 class="card-title" style="font-size: 14px;text-align: center;">${t.name}</h5>
                    <p class="card-text" style="font-size: 10px;">
                        <span><strong>Période : </strong> ${t.months.northern.text}</span><br>
                        <span><strong>Heure : </strong>${t.times.text}</span><br>
                        <span><strong>Lieu : </strong><span>${t.location}</span></span><br>
                        <span><strong>Prix : </strong>${t.price}</span>
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
        <div class="col-md-2">
            <div class="card">
                <div style="background:url(https://www.animalcrossing-online.com/img/fond.png);" align="center">
                    <div class="${getFishSpriteClassNameById(t.id-1)}"></div>
                </div>
                <div class="card-body" style="padding: 5px;">
                    <h5 class="card-title" style="font-size: 14px;text-align: center;">${t.name}</h5>
                    <p class="card-text" style="font-size: 10px;">
                        <span><strong>Période : </strong> ${t.months.northern.text}</span><br>
                        <span><strong>Heure : </strong>${t.times.text}</span><br>
                        <span><strong>Lieu : </strong><span>${t.location}</span></span><br>
                        <span><strong>Prix : </strong>${t.price}</span>
                    </p>
                </div>
            </div>
        </div>
    `).join('');

    fishesDiv.innerHTML = allFishes; 
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

}

loadInsectes();
loadFishes();
