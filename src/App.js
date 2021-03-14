import { useState } from 'react';
import ColorPicker from './ColorPicker/ColorPicker';

const LIST_COLORS = ['red', 'green', 'blue', 'yellow'];

const App = () => {
  const [color, setColor] = useState('#ffcc33');

  return <ColorPicker value={color} onChange={setColor} colors={LIST_COLORS} />;
};

export default App;
