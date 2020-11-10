function signOut() {
    firebase.auth().signOut().then(function() {
        console.log("User signed out")
      }).catch(function(error) {
        console.log("Error when trying to sign out: "+error)
    });
}

