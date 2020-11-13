self.addEventListener('install', (evt) => {
    console.log(`sw installé à ${new Date().toLocaleTimeString()}`);
});
 
self.addEventListener('activate', (evt) => {
    console.log(`sw activé à ${new Date().toLocaleTimeString()}`);    
});
 
self.addEventListener('fetch', (evt) => {
    console.log('sw intercepte la requête suivante via fetch', evt);
    console.log('url interceptée', evt.request.url);
});

self.addEventListener("push", evt => {
    console.log("push event", evt);
    console.log("data envoyée par la push notification :", evt.data.text());
 
    // 8.1 afficher son contenu dans une notification
    const title = evt.data.text();
    const objNotification = {
        body: "C'est l'anniversaire d'un villageois", 
        icon : "images/icons/icon-72x72.png"
    };
    self.registration.showNotification(title, objNotification);
})
// self.addEventListener("push", evt => {
//     console.log("push event", evt);
//     console.log("data envoyée par la push notification :", evt.data.text());

//     // 8.1 afficher son contenu dans une notification
//     const title = evt.data.text();
//     const objNotification = {
//         body: "Hey c'est l'anniversaire d'un villageois", 
//         icon : "images/icons/birthday_icon.png"
//     };
//     self.registration.showNotification(title, objNotification);
//})


//*********NOTIFICATION QUI MARCHE
// self.registration.showNotification("Joyeux Anniversaire !!",{
//     body : "C'est l'anniversaire d'un villageois",
//     icon : "images/icons/icon-72x72.png",
  
//     // 7.4 Options de notifications grâce aux actions
//     actions:[
//         {action:"accept", title:"accepter"},
//         {action: "refuse", title: "refuser"}
//     ]
// })
 
// self.addEventListener("notificationclick", evt => {
//     console.log("notificationclick evt", evt);
//     if(evt.action === "accept"){
//         console.log("vous avez accepté");
//     } else if(evt.action === "refuse"){
//         console.log("vous avez refusé");
//     } else{
//         console.log("vous avez cliqué sur la notification (pas sur un bouton)");
//     }
  
//     // 7.5 Fermer programmatiquement une notification
//     evt.notification.close();
// })