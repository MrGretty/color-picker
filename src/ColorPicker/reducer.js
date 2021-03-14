import React from 'react';
export const ContextApp = React.createContext();

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
  console.log(action);
  switch (action.type) {
    case ACTIONS.types.list:
      return { ...state, listIsOpen: action.value, sliderIsOpen: false };
    case ACTIONS.types.slider:
      return { ...state, listIsOpen: false, sliderIsOpen: action.value };
    case ACTIONS.types.color:
      return { ...state, currentColor: action.value, listIsOpen: false, sliderIsOpen: false };
    case ACTIONS.types.reset: {
      return { ...state, listIsOpen: false, sliderIsOpen: false };
    }
    default:
      return state;
  }
};
