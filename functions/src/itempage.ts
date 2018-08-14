import * as functions from 'firebase-functions';
import { db } from './db';
import { errorStatus, errorNotFound, returnDocument, errorInternal } from './responses';
import { safelyEncodeHtmlString } from './utils';
import { OBJECT_CACHE_TIME } from './config';


/** Serves the static HTML with modified metadata and a database object appended */
export function databaseItemPage<T extends FirebaseFirestore.DocumentData>(collection: string, re: RegExp,
    titleFn: (T) => string, descriptionFn: (T) => string) {

    const collectionRef = db.collection(collection);

    return functions.https.onRequest(async (req, res) => {
        let showDbg = false;
        try {
            if (req.method !== 'GET' && req.method !== 'HEAD') { errorStatus(res, 405); return; }
            showDbg = !!(req.query && req.query['gimmie-dbg']);

            const [, id] = re.exec(req.path) || [undefined, undefined];
            if (!id || id.length === 0) { errorNotFound(res); return; }

            const docRef = collectionRef.doc(id);
            const docResult = await docRef.get();
            if (!docResult.exists) { errorNotFound(res); return; }
            const doc = docResult.data() as T;

            const title = safelyEncodeHtmlString(titleFn(doc));
            const description = safelyEncodeHtmlString(descriptionFn(doc));
            const link = safelyEncodeHtmlString(`https://${req.hostname}/${docRef.path}`);
            const meta = `
<meta property=og:title content="${title}">
<meta property=og:description content="${description}">
<meta property=og:url content="${link}">
<meta property=og:type content="website">
<meta name=twitter:card content="summary">
<meta name=twitter:site content="@survivetheark">
`
            const dataObjects = {};
            dataObjects[docRef.path] = doc;

            returnDocument(req, res, 200, OBJECT_CACHE_TIME, meta, dataObjects);
        } catch (err) {
            errorInternal(res, err);
            return;
        }
    });
}
