import React from 'react';
import { ReactDOM } from 'react';
import { useState } from 'react';
import './Calculator.css';

function Calculator() {
    const [value, setValue] = useState('');

    const Display = (e) => {
  
      setValue(value + e.target.name)
    }
  
    const Delete = () => {
      setValue(value.slice(0, -1))
  
    }
  
    const Clear = () => {
      setValue('')
    }
  
    const Calculate = () => {
      try {
        setValue(eval(value));
  
      }
      catch (error) {
        setValue("Error");
      }
  
    }
  
    return (
  
  
  
      <div className="container2">
        <div className='container'>
        <div className="calca">
          <input type="text" value={value} placeholder='0' />
          <input type="button" value="C" onClick={Clear} />
          <input type="button" value="DE"  onClick={Delete} />
          <input type="button" value="/" name='/' onClick={Display} />
          <input type="button" value="X" name='*' onClick={Display} />
          <input type="button" value="7"name='7'  onClick={Display} />
          <input type="button" value="8" name='8' onClick={Display} />
          <input type="button" value="9" name='9' onClick={Display} />
          <input type="button" value="-" name='-' onClick={Display} />
          <input type="button" value="4" name='4' onClick={Display} />
          <input type="button" value="5" name='5' onClick={Display} />
          <input type="button" value="6" name='6' onClick={Display} />
          <input type="button" value="+" name='+' onClick={Display} />
          <input type="button" value="1" name='1' onClick={Display} />
          <input type="button" value="2" name='2' onClick={Display} />
          <input type="button" value="3" name='3' onClick={Display} />
          <input type="button" value="=" name='=' onClick={Calculate} id="span-row"/>
  
  
          <input type="button" value="0" name='0' onClick={Display} id="span-col"/>
          <input type="button" value="."name='.' onClick={Display} />
        </div>
        </div>
      </div>
    );
}

export default Calculator