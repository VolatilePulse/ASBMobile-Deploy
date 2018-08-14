import * as functions from 'firebase-functions';
import * as templateBlocks from './template';
import * as serialize from 'serialize-javascript';
import { inspect } from 'util';
import { SHOW_DEBUG } from './config';


interface IdValueMap { [id: string]: string };


export function errorNotFound(res: functions.Response) {
    res.header('Cache-Control', 'public, max-age=300'); // 5 minutes
    res.header('Expires', '300')
    res.removeHeader('Pragma');
    res.status(404).send(`Not found`);
}

export function errorNotFoundJson(res: functions.Response, err?: Error | string) {
    res.header('Cache-Control', 'public, max-age=300'); // 5 minutes
    res.header('Expires', '300')
    res.removeHeader('Pragma');
    if (err && SHOW_DEBUG)
        res.status(404).json({ 'error': inspect(err) });
    else
        res.status(404).json({});
}

export function errorInternal(res: functions.Response, err?: Error | string) {
    res.header('Cache-Control', 'public, max-age=300'); // 5 minutes
    res.header('Expires', '300')
    res.removeHeader('Pragma');
    if (err && SHOW_DEBUG)
        res.status(500).send('Internal error: ' + inspect(err));
    else
        res.status(500).send('Internal error');
}

export function errorStatus(res: functions.Response, status: number) {
    res.header('Cache-Control', 'public, max-age=300'); // 5 minutes
    res.header('Expires', '300')
    res.removeHeader('Pragma');
    res.status(status).send(`Invalid`);
}

export function returnDocument(req: functions.Request, res: functions.Response, status: number, cacheTime: number, meta: string = '', dataObjects: IdValueMap = {}) {
    res.header('Cache-Control', `public, max-age=${cacheTime}`);
    res.header('Expires', '' + cacheTime)
    res.removeHeader('Pragma');

    let output = templateBlocks.pageHeader + '\n';

    output += meta;
    // if (metaFields && Object.keys(metaFields).length > 0) {
    //     for (const id of Object.keys(metaFields)) {
    //         const value = metaFields[id];
    //         output += `<meta property="${id}" content="${safelyEncodeHtmlString(value)}" />`;
    //     }
    // }

    // TODO: Work out if anything actually uses this
    // const fullUrl = `https://${req.hostname}${safelyEncodeHtmlString(req.path)}`;
    // output += '<link rel="alternate" type="application/json+oembed" ';
    // output += `href="https://${req.hostname}/api/oembed?url=${fullUrl}"`;
    // if (title) output += ` title="${safelyEncodeHtmlString(title)}"`;
    // output += '>';

    if (dataObjects && Object.keys(dataObjects).length > 0)
        output += `<script lang="text/javascript">var expectServerProvidedData=true;</script>`;

    output += '\n' + templateBlocks.pageBody;

    if (dataObjects && Object.keys(dataObjects).length > 0) {
        const data = serialize(dataObjects, { isJSON: true });
        output += '<script lang="text/javascript">var serverProvidedData=';
        output += data;
        output += '</script>';
    }

    res.status(status).send(output);
}
