import React, {useState, useContext} from 'react';
import { SetupContext } from '../contexts/SetupContext';

function DropDown() {

    const setupContext = useContext(SetupContext); 
    const [ items, setItems ] = useState(setupContext.items);

    return (
      <select onChange={ (e) => { setupContext.handleAddrTypeChange(e) }}>
        { items.map(item => (
          <option
            key={item.value}
            value={item.value}
          >
            {item.label}
          </option>
        ))}
      </select>
    );
    
  }

  export default DropDown;