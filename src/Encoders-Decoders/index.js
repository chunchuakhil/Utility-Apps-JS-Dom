/* eslint-disable no-lone-blocks */
// const crypto = require('crypto');

import { encodersDecodersList } from './EncodersList.js';

const dropdown = document.querySelector('#dropdown');

const showDropOptions = () => {
    const options = encodersDecodersList.map((option, index) => {
        return `<option value="${option.type}">${option.type}</option>`;
    });
    const defaultOption = ' <option value="" selected disabled hidden>Select Encoders/Decoders</option>';
    options.unshift(defaultOption);
    dropdown.innerHTML = options;
};

showDropOptions();

let userSelectedOption = '';

const convertBtn = document.querySelector('#convert_btn');

const handleDropDown = (event) => {
    const userInputControls = document.querySelector('#userInputControls');
    userInputControls.style.display = 'block';
    userSelectedOption = event.target.value;
    const userInput = document.querySelector('#userInput');
    const userOutput = document.querySelector('#userOutput');
    userInput.value = '';
    userOutput.value = '';
};

const buttonSubmitHandler = () => {
    const userInput = document.querySelector('#userInput');
    const userOutput = document.querySelector('#userOutput');
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
