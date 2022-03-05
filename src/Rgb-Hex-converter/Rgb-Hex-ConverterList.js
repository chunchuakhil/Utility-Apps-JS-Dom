const rgbToHexConverter = (red, green, blue) => {
    return '#' + componentToHex(red) + componentToHex(green) + componentToHex(blue);
};
const componentToHex = (color) => {
    var hex = color.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
};

const hexToRgbConverter = (hex) => {
    return '202020';
};

export const rgbHexConverterList = [
    {
        type: 'RGB to HEX',
        action: rgbToHexConverter,
    },
    {
        type: 'HEX to RGB',
        action: hexToRgbConverter,
    },
];
