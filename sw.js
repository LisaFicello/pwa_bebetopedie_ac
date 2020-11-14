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
 	

//..
self.addEventListener('fetch', (evt) => {
    if(evt.request.method === 'POST') {
        return;
    }
    // 5.3 Stratégie de network first with cache fallback
    // On doit envoyer une réponse
    evt.respondWith(
        // on doit d'abord faire une requête sur le réseau de ce qui a été intercepté
        fetch(evt.request).then(res => {
            //console.log("url récupérée depuis le réseau", evt.request.url);
            // mettre dans le cache le résultat de cette réponse : en clef la requête et en valeur la réponse
            caches.open(cacheName).then(cache => cache.put(evt.request, res));
            // quand on a la réponse on la retourne (clone car on ne peut la lire qu'une fois)
            return res.clone();
        })
        // Si on a une erreur et que l'on arrive pas à récupérer depuis le réseau, on va chercher dans le cache
        .catch(err => {
           // console.log("url récupérée depuis le cache", evt.request.url);
            return caches.match(evt.request);
        })
    );
});


	
// self.registration.showNotification("Notification du SW", {
//     body:"je suis une notification dite persistante"
// })
 
// Ecoute de l'événement close
self.addEventListener("notificationclose", evt => {
    console.log("Notification fermée", evt);
})
	
	
self.addEventListener("push", evt => {


    console.log("push event", evt);
    console.log("data envoyée par la push notification :", evt.data.text());
 
    // 8.1 afficher son contenu dans une notification
    const title = evt.data.text();
    const objNotification = {
        body: "ça fonctionne", 
        icon : "images/icons/icon-72x72.png"
    };
    self.registration.showNotification(title, objNotification);
})

 