import { useContext } from 'react';
import { ContextApp } from './reducer';

const ColorPickerValueBlock = () => {
  const { state } = useContext(ContextApp);

  return <div>{state.currentColor}</div>;
};

export default ColorPickerValueBlock;
