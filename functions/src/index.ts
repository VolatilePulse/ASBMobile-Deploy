import * as functions from 'firebase-functions';
import { inspect } from 'util';
import { Showcase, Invite } from './types';
import { databaseItemPage } from './itempage';
import { errorInternal } from './responses';
import { titleFromInvite, descriptionFromInvite } from './invite';
import { titleFromShowcase, descriptionFromShowcase } from './showcase';
import { oembedHandler } from './oembed';
import { SHOW_DEBUG } from './config';

// Tip: Initialise anything that can be persistent in global scope to avoid excess work

// Files: path.join(__dirname, 'functions/views')



// TODO: Work out if anything actually uses this
// /api/oembed?url=... - customise metadata and embed document data for the creature showcase
exports.oembed = oembedHandler;

// /invite/<id> - customise metadata and embed document data for the library invite
const invitePathRe = /^\/invite\/([^\/]+?)(?:\/(?=$))?(?=\/|$)/;
exports.invite = databaseItemPage<Invite>('invite', invitePathRe, titleFromInvite, descriptionFromInvite);

// /showcase/<id> - customise metadata and embed document data for the creature showcase
const showcasePathRe = /^\/showcase\/([^\/]+?)(?:\/(?=$))?(?=\/|$)/;
exports.showcase = databaseItemPage<Showcase>('showcase', showcasePathRe, titleFromShowcase, descriptionFromShowcase);

exports.dbg = functions.https.onRequest((req, res) => {
    try {
        if (SHOW_DEBUG) {
            res.header('Cache-Control', 'private, no-cache');
            res.write(`Headers:\n${inspect(req.headers)}\n`);
            res.write(`Method:\n${inspect(req.method)}\n`);
            res.write(`BaseUrl:\n${inspect(req.baseUrl)}\n`);
            res.write(`OriginalUrl:\n${inspect(req.originalUrl)}\n`);
            res.write(`Host:\n${inspect(req.host)}\n`);
            res.write(`Hostname:\n${inspect(req.hostname)}\n`);
            res.write(`Path:\n${inspect(req.path)}\n`);
            res.write(`Body:\n${inspect(req.body)}\n`);
            res.write(`Query:\n${inspect(req.query)}\n`);
            res.write(`Params:\n${inspect(req.params)}\n`);
            res.end();
        } else {
            res.redirect('/');
        }
    } catch (err) {
        errorInternal(res, err);
    }
});
