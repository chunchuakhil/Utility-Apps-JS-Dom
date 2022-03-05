const urlPercentEncoding = (url) => {
    return encodeURIComponent(url);
};

const urlPercentDecoding = (url) => {
    return decodeURIComponent(url);
};

const base64Encoding = (str) => {
    return window.btoa(str);
};

const base64Decoding = (str) => {
    return window.atob(str);
};

const md5HashGenerator = (str) => {
    const algo = 'md5'; //could be md5, sha1, sha256, sha512
    const hash = crypto.createHash(algo).update(str).digest('hex');
    return hash;
};

const sha1HashGenerator = (str) => {
    const algo = 'sha1'; //could be md5, sha1, sha256, sha512
    const hash = crypto.createHash(algo).update(str).digest('hex');
    return hash;
};

const sha256HashGenerator = (str) => {
    const algo = 'sha256'; //could be md5, sha1, sha256, sha512
    const hash = crypto.createHash(algo).update(str).digest('hex');
    return hash;
};

const sha512HashGenerator = (str) => {
    const algo = 'sha512'; //could be md5, sha1, sha256, sha512
    const hash = crypto.createHash(algo).update(str).digest('hex');
    return hash;
};

export const encodersDecodersList = [
    {
        type: 'URL Percent Encoding',
        action: urlPercentEncoding,
    },
    {
        type: 'URL Percent Decoding',
        action: urlPercentDecoding,
    },
    {
        type: 'Base64 Encode',
        action: base64Encoding,
    },
    {
        type: 'Base64 Decode',
        action: base64Decoding,
    },
    {
        type: 'MD5 Hash Generator',
        action: md5HashGenerator,
    },
    {
        type: 'SHA-1 Hash Generator',
        action: sha1HashGenerator,
    },
    {
        type: 'SHA-256 Hash Generator',
        action: sha256HashGenerator,
    },
    {
        type: 'SHA-512 Hash Generator',
        action: sha512HashGenerator,
    },
];
