importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

const cacheName = 'bebetopedia-1.0';

 
self.addEventListener('install', (evt) => {
    console.log(`sw installé à ${new Date().toLocaleTimeString()}`);
 
    const cachePromise = caches.open(cacheName).then(cache => {
        return cache.addAll([
            'index.html',
            'main.js',
            'login.js',
            'logout.js',
            'login.html',
            'databaseAPI.js',
            'style.css',
            'creatures/creaturesAPI.js',
            'creatures/images/fishImages.png',
            'creatures/images/insectImages.png',
            'creatures/images/marineImages.png',
            'creatures/css/sprite-fish.css',
            'creatures/css/sprite-insect.css',
            'creatures/css/sprite-marine.css',
            'creatures/data/fishData.js',
            'creatures/data/insectData.js',
            'creatures/data/marineData.js',
            'idb/database.js',
            'idb/idb.js',
            'assets/js/bootstrap.min.js',
            'assets/js/firebase-app.js',
            'assets/js/firebase-auth.js',
            'assets/js/firebase-database.js',
            'assets/js/jquery.min.js',
            'assets/js/uniform.min.js',
            'assets/css/bootstrap.css',
            'assets/css/components.css',
            'assets/css/core.css',
            'assets/css/colors.css',
            'assets/js/select2.min.js',
            'assets/js/fab.min.js'
            //maybe icons missing in that folder?
        ])
        .then(console.log('cache initialisé'))
        .catch(console.err);
    });
 
    evt.waitUntil(cachePromise);
 
});
 
self.addEventListener('activate', (evt) => {
    console.log(`sw activé à ${new Date().toLocaleTimeString()}`); 
  
    // 5.4 Supprimer les anciennes instances de cache
    let cacheCleanPromise = caches.keys().then(keys => {
        keys.forEach(key => {            
            if(key !== cacheName){
                caches.delete(key);
            }
        });
    });

    evt.waitUntil(cacheCleanPromise);
});
 	
self.addEventListener('fetch', (evt) => {
    //console.log('sw intercepte la requête suivante via fetch', evt);
    //console.log('url interceptée', evt.request.url);
});

self.addEventListener('sync', event => {
    console.log('sync event', event);
    // test du tag de synchronisation utilisé dans add_techno
    // if (event.tag === 'sync-technos') {
    //     console.log('syncing', event.tag);
    //     // Utilisation de waitUntil pour s'assurer que le code est exécuté (Attend une promise)
    //     event.waitUntil(updateTechnoPromise);
    // }
})

//..
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

    
    if(evt.request.method === 'POST') {
        return;
    }
    // 5.3 Stratégie de network first with cache fallback
    // On doit envoyer une réponse
    evt.respondWith(
        // on doit d'abord faire une requête sur le réseau de ce qui a été intercepté
        fetch(evt.request).then(res => {
            console.log("url récupérée depuis le réseau", evt.request.url);
            // mettre dans le cache le résultat de cette réponse : en clef la requête et en valeur la réponse
            caches.open(cacheName).then(cache => cache.put(evt.request, res));
            // quand on a la réponse on la retourne (clone car on ne peut la lire qu'une fois)
            return res.clone();
        })
        // Si on a une erreur et que l'on arrive pas à récupérer depuis le réseau, on va chercher dans le cache
        .catch(err => {
            console.log("url récupérée depuis le cache", evt.request.url);
            return caches.match(evt.request);
        })
    );
    

    // if(!navigator.onLine) {
    //     const headers = { headers: { 'Content-Type': 'text/html;charset=utf-8'} };
    //     evt.respondWith(new Response('<h1>Pas de connexion internet</h1><div>Application en mode dégradé. Veuillez vous connecter</div>', headers));
    // }

    // console.log('sw intercepte la requête suivante via fetch', evt);
    // console.log('url interceptée', evt.request.url);


    // // 5.1 Stratégie : cache only with network callback
    // evt.respondWith(
    //     caches.match(evt.request)
    //         .then(cachedResponse => {   
    //             if (cachedResponse) {
    //                 // 5.2 identification de la requête trouvée dans le cache
    //                 console.log("url depuis le cache", evt.request.url);

    //                 return cachedResponse;
    //             }

    //             // 5.1 Stratégie de cache
    //             return fetch(evt.request).then(
    //                 // On récupère la requête
    //                 function(newResponse) {
    //                     // 5.2 identification de la requête ajoutée au cache
    //                     console.log("url depuis le réseau et mise en cache", evt.request.url);

    //                     // Accès au cache
    //                     caches.open(cacheName).then(
    //                         function(cache){
    //                             // ajout du résultat de la requête au cache
    //                             cache.put(evt.request, newResponse);
    //                         }
    //                     );
    //                     // Utilisation de clone car on ne peut utiliser qu'une fois la réponse
    //                     return newResponse.clone();
    //                 }
    //             )
    //         }
    //     )
    // );

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    'messagingSenderId': '716668447382'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
    body: 'Background Message body.',
    icon: '/itwonders-web-logo.png'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});

