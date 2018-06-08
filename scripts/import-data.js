var firebaseAdmin = require("firebase-admin");

var serviceAccount = require("../private/serviceAccountKey.json");

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://asbmobile-dev.firebaseio.com"
});


const dataToImport = require("../data/dev-data");

Object.keys(dataToImport).forEach(collectionPath => {
    const collectionData = dataToImport[collectionPath];

    if (typeof collectionData === "object") {
        Object.keys(collectionData).forEach(docKey => {
            const doc = collectionData[docKey];
            firebaseAdmin.firestore()
                .collection(collectionPath)
                .doc(docKey)
                .set(doc)
                .catch((error) => console.error("Error writing document: ", error));
        });
    }
});
