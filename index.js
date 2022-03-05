/* eslint-disable no-lone-blocks */
// const crypto = require('crypto');

export const urlPercentEncoding = (url) => {
    return encodeURIComponent(url);
};

export const urlPercentDecoding = (url) => {
    return decodeURIComponent(url);
};

export const base64Encoding = (str) => {
    return window.btoa(str);
};

export const base64Decoding = (str) => {
    return window.atob(str);
};

export const md5HashGenerator = (str) => {
    const algo = 'md5'; //could be md5, sha1, sha256, sha512
    const hash = crypto.createHash(algo).update(str).digest('hex');
    return hash;
};

export const sha1HashGenerator = (str) => {
    const algo = 'sha1'; //could be md5, sha1, sha256, sha512
    const hash = crypto.createHash(algo).update(str).digest('hex');
    return hash;
};

export const sha256HashGenerator = (str) => {
    const algo = 'sha256'; //could be md5, sha1, sha256, sha512
    const hash = crypto.createHash(algo).update(str).digest('hex');
    return hash;
};

export const sha512HashGenerator = (str) => {
    const algo = 'sha512'; //could be md5, sha1, sha256, sha512
    const hash = crypto.createHash(algo).update(str).digest('hex');
    return hash;
};

const encodersDecodersList = [
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

const dropdown = document.querySelector('#encoders_decoders_dropdown');
const main = document.querySelector('main');

const options = encodersDecodersList.map((option, index) => {
    return `
    <option value="${option.type}">${option.type}</option>
    `;
});
const defaultOption = ' <option value="" selected disabled hidden>Select Encoders/Decoders</option>';
options.unshift(defaultOption);
dropdown.innerHTML = options;

let userSelectedOption = '';

const userInput = document.querySelector('#userInput');
const userOutput = document.querySelector('#userOutput');
const convertBtn = document.querySelector('#convert_btn');

const handleDropDown = (event) => {
    const userInputs = document.querySelector('#userInputs');
    userInputs.style.display = 'block';
    userSelectedOption = event.target.value;
    userInput.value = '';
    userOutput.value = '';
};

const buttonSubmitHandler = () => {
    const userInputValue = userInput.value;
    const option = encodersDecodersList.find((obj, index) => {
        if (obj.type === userSelectedOption) {
            return true;
        }
        return false;
    });
    userOutput.value = option.action(userInputValue);
};
convertBtn.addEventListener('click', buttonSubmitHandler);

dropdown.addEventListener('change', handleDropDown);
