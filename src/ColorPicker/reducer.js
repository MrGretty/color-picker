import React from 'react';

export const ACTIONS = {
  types: {
    list: 'list',
    slider: 'slider',
    color: 'color',
    reset: 'reset',
  },
  value: {
    open: true,
    close: false,
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.types.list:
      return { ...state, listIsOpen: action.value };
    case ACTIONS.types.slider:
      return { ...state, sliderIsOpen: action.value };
    case ACTIONS.types.color:
      return {
        ...state,
        currentColorHex: action.valueHex,
        currentColorRgb: action.valueRgb,
        listIsOpen: false,
        sliderIsOpen: false,
      };
    case ACTIONS.types.reset: {
      return { ...state, listIsOpen: false, sliderIsOpen: false };
    }
    default:
      return state;
  }
};
