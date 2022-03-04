const dropdown = document.querySelector('#encoders_decoders');

const handleDropdown = (event) => {
    switch (event.target.value) {
        case 'URL Encode Decode - URL Percent Encoding and Decoding':
            {
                window.location.pathname = './src/Encoders-Decoders/EncodersDecoders.html';
            }
            break;
        case 'Base64 Decode':
            {
                window.location.pathname = './src/Base64-decode/Base64Decode.html';
            }
            break;
        case 'Base64 Encode':
            {
                window.location.pathname = './src/Base64-encode/Base64Encode.html';
            }
            break;

        default:
            break;
    }
};

dropdown.addEventListener('change', handleDropdown);
