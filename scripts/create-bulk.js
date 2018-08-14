var firebaseAdmin = require("firebase-admin");

var serviceAccount = require("../private/serviceAccountKey.json");

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: "https://asbmobile-dev.firebaseio.com"
});


function addBulk(num, collName) {
    const ref = firebaseAdmin.firestore().collection(collName);
    for (let i=1; i<=num; i++) {
        ref.doc(''+i).set({exists: true})
            .catch(error => console.error("Error writing document: ", error));
    }
}


addBulk(10, 'dev/bulk/items10');
// addBulk(100, 'dev/bulk/items100');
// addBulk(1000, 'dev/bulk/items');
