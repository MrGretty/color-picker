export const convertToHex = (color) => {
  const ctx = document.createElement('canvas').getContext('2d');
  ctx.fillStyle = color;
  return ctx.fillStyle;
};

export const convertToRgb = (color) => {
  const el = document.createElement('div');
  el.style.color = color;
  return el.style.color;
};

export const splitRgbToObject = (rgbColor) => {
  const rgbArray = rgbColor.replace(/[^\d,]/g, '').split(',');

  return {
    r: rgbArray[0],
    g: rgbArray[1],
    b: rgbArray[2],
  };
};

export const joinObjectToRgb = (rgbObject) => `rgb(${rgbObject.r}, ${rgbObject.g}, ${rgbObject.b})`;
