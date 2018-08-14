import * as admin from 'firebase-admin';


try { admin.initializeApp(); } catch (_) { }
export const db = admin.firestore();
const settings = { timestampsInSnapshots: true };
try { db.settings(settings); } catch (_) { }


export async function getObjectFromDbPath(path: string): Promise<FirebaseFirestore.DocumentData> {
    if (!path.startsWith('/invite/') && !path.startsWith('/showcase/')) throw new Error("Bad request: " + path);

    const ref = db.doc(path);
    const dbObject = await ref.get();
    if (!dbObject.exists) throw new Error("Not found");
    return dbObject.data();
}
