import * as URL from 'url';


export function getObjectPathFromUrl(url: string, correctHost: string): string {
    const parsed = URL.parse(url);
    if (parsed.query) throw new Error("Query present in oembed URL");
    if (parsed.hostname.toLowerCase() !== correctHost.toLowerCase()) throw new Error("Invalid hostname in oembed URL");
    if (parsed.protocol !== "https:") throw new Error("HTTPS only: " + parsed.protocol);
    if (parsed.path.includes('.')) throw new Error("Invalid path");
    if (parsed.port || parsed.auth || parsed.hash || parsed.search) throw new Error("Unexpected fields in oembed URL");
    return parsed.path;
}

export function safelyEncodeHtmlString(input: string): string {
    let output = input;
    output = output.replace(/"/g, "&quot;");
    output = output.replace(/</g, "&lt;");
    output = output.replace(/>/g, "&gt;");
    output = output.replace(/&/g, "&amp;");
    return output;
}
