import { Invite } from "./types";


export function titleFromInvite(invite: Invite) {
    if (invite.libraryName)
        return `Invite to shared library '${invite.libraryName}'`;
    else
        return 'Invite to shared library';
};

export function descriptionFromInvite(invite: Invite) {
    let text = '';
    if (invite.creatorName)
        text += `${invite.creatorName} has invited you to join `;
    else
        text += 'You have been invited to join ';

    if (invite.libraryName)
        text += `the shared library '${invite.libraryName}' in Ark Breeder.`;
    else
        text += 'a shared library in Ark Breeder.'

    text += ' Click the link to check it out!';
    return text;
}
