const dropdown = document.querySelector('#encoders_decoders');



const urlInput = document.querySelector('#url_input');
urlInput.value = '';

const urlResult = document.querySelector('#url_result');
urlResult.value = '';

const urlEncodeBtn = document.querySelector('#url_encode_btn');
const urlDecodeBtn = document.querySelector('#url_decode_btn');

const encode = () => {
    const userUrl = urlInput.value;
    const newUrl = encodeURIComponent(userUrl);
    urlResult.value = newUrl;
};

const decode = () => {
    const userUrl = urlInput.value;
    const newUrl = decodeURIComponent(userUrl);
    urlResult.value = newUrl;
};

urlEncodeBtn.addEventListener('click', encode);
urlDecodeBtn.addEventListener('click', decode);
