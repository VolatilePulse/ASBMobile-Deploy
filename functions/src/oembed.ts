import * as functions from 'firebase-functions';
import { errorInternal, errorNotFoundJson } from './responses';
import { getObjectPathFromUrl } from './utils';
import { getObjectFromDbPath } from './db';
import { OBJECT_CACHE_TIME } from './config';


export const oembedHandler = functions.https.onRequest(async (req, res) => {
    try {
        const url = req.query['url'];
        const resp_format = req.query['format'] || 'json';
        const type = req.query['type'] || 'rich';
        if (resp_format !== 'json') { errorInternal(res, "Invalid oEmbed format"); return; }
        const maxWidth = req.query['maxwidth'];
        const maxHeight = req.query['maxheight'];

        let objectPath: string;
        try {
            objectPath = getObjectPathFromUrl(url, req.hostname);
            if (!objectPath) throw new Error("Could not extract path from request");
        } catch (err) {
            errorNotFoundJson(res, err);
            return;
        }

        let object: any;
        try {
            object = await getObjectFromDbPath(objectPath);
            if (!object) throw new Error("Could find object at given path");
        } catch (err) {
            errorNotFoundJson(res, err);
            return;
        }

        const result: any = {
            version: '1.0',
            type: 'link',
            title: 'OEmbed object ' + objectPath,
            description: 'OEmbed description!',
            url: url,
            provider_name: 'Ark Breeder',
            provider_url: 'https://' + req.hostname + '/',
            cache_age: OBJECT_CACHE_TIME,
        };

        if (type === 'link') {
            result.type = 'link';
        } else {
            result.type = 'rich';
            result.html = `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <title>Virtual Library</title>
  </head>
  <body>
    <img src="https://dev.arkbreeder.com/img/icons/apple-touch-icon-180x180.png" width="100" height="100" />
    <p>Some rich content from the oEmbed HTML</p>
  </body>
</html>`;
            result.width = maxWidth || 500;
            result.height = maxHeight || 500;
        }

        res.header('Cache-Control', 'public, max-age=' + OBJECT_CACHE_TIME);
        res.status(200).json(result);
    } catch (err) {
        errorInternal(res, err);
    }
});
