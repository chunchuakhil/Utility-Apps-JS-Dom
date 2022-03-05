import { rgbHexConverterList } from './Rgb-Hex-ConverterList.js';

const dropdown = document.querySelector('#dropdown');

const showDropOptions = () => {
    const options = rgbHexConverterList.map((option, index) => {
        return `
        <option value="${option.type}">${option.type}</option>
        `;
    });
    const defaultOption = ' <option value="" selected disabled hidden>Select RGB/Hex</option>';
    options.unshift(defaultOption);
    dropdown.innerHTML = options;
};

showDropOptions();

// let userSelectedOption = '';

const handleDropdownChange = (event) => {
    console.log(event.target.value);
    const userInputsRgbToHex = document.querySelector('#userInputs_rgbToHex');
    const userInputsHexToRgb = document.querySelector('#userInputs_HexToRgb');
    userInputsRgbToHex.style.display = 'none';
    userInputsHexToRgb.style.display = 'none';

    if (event.target.value === 'RGB to HEX') {
        // userSelectedOption = event.target.value;
        userInputsRgbToHex.style.display = 'block';
    } else if (event.target.value === 'HEX to RGB') {
        // userSelectedOption = event.target.value;
        userInputsHexToRgb.style.display = 'block';
    }
};

dropdown.addEventListener('change', handleDropdownChange);

const convertToHexBtn = document.querySelector('#convertToHex_btn');

const handleConvertButton = () => {
    console.log(dropdown.value);
    if (dropdown.value === 'RGB to HEX') {
        const redColorInput = document.querySelector('#redColorInput');
        const greenColorInput = document.querySelector('#greenColorInput');
        const blueColorInput = document.querySelector('#blueColorInput');
        const hexOutPut = document.querySelector('#hexOutPut');
        const option = rgbHexConverterList.find((obj, index) => {
            if (obj.type === dropdown.value) {
                return true;
            }
            return false;
        });
        hexOutPut.value = option.action(redColorInput.value, greenColorInput.value, blueColorInput.value);
    } else if (dropdown.value === 'HEX to RGB') {
        console.log('rgb to hex....');
        const hexInput = document.querySelector('#hexInput');
        const option = rgbHexConverterList.find((obj, index) => {
            if (obj.type === dropdown.value) {
                return true;
            }
            return false;
        });
        console.log(option.action('9090090'));
    }
};

convertToHexBtn.addEventListener('click', handleConvertButton);
