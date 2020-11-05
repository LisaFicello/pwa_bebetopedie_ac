const insectesDiv = document.querySelector('#insectes');

function loadInsectes(insectes) {
    fetch('http://localhost:3001/insectes').then(response => {
        response.json().then(insectes => {
            const allInsectes = insectes.map(t => `
                <div class="col-md-2">
                    <div class="card">
                        <div style="background:url(https://www.animalcrossing-online.com/img/fond.png);" align="center">
                            <img src="${t.img}" alt="">
                        </div>
                        <div class="card-body" style="padding: 5px;">
                            <h5 class="card-title" style="font-size: 14px;text-align: center;">${t.title}</h5>
                            <p class="card-text" style="font-size: 10px;">
                                <span><strong>Période : </strong> ${t.period}</span><br>
                                <span><strong>Heure : </strong>${t.hours}</span><br>
                                <span><strong>Lieu : </strong><span>${t.place}</span></span><br>
                                <span><strong>Prix : </strong>${t.price}</span>
                            </p>
                        </div>
                    </div>
                </div>
            `).join('');
        
            insectesDiv.innerHTML = allInsectes; 
        });
    }).catch(console.error);
}

loadInsectes(insectes);

// <div class="row">
// <div class="col-md-2">
//   <div class="card">
//     <!-- <img src="..." class="card-img-top" alt="..."> -->
//     <div style="background:url(https://www.animalcrossing-online.com/img/fond.png);" align="center">
//       <img src="https://www.animalcrossing-online.com/new-horizons-switch/img/insectes/Araign%C3%A9e.png" alt="Araignée - Animal Crossing : New Horizons (Switch) [ACNH]">
//     </div>
//     <div class="card-body" style="padding: 5px;">
//       <h5 class="card-title" style="font-size: 14px;text-align: center;">Araignée</h5>
//       <p class="card-text" style="font-size: 10px;">
//         <span><strong>Période : </strong> Toute l'année</span><br>
//         <span><strong>Heure : </strong>19h - 8h</span><br>
//         <span><strong>Lieu : </strong><span>Arbres</span></span><br>
//         <span><strong>Prix : </strong><span>600</span> Clochettes</span>
//       </p>
//       <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
//     </div>
//   </div>
// </div>
// </div>