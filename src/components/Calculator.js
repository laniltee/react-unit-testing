import { useState } from 'react';
import { getSumBySpacedNumbers } from '../utils/CalculationUtils';
import { DIGITS_AND_SPACES_REGEX } from '../constants/RegExps';

const Calculator = () => {
  const [textInput, setTextInput] = useState('');
  const [sum, setSum] = useState(0);

  const handleInputChange = (e) => {
    const { value } = e.target;
    if (value === '' || value.match(DIGITS_AND_SPACES_REGEX)) {
      setTextInput(value);
    }
  };

  const onButtonClick = () => {
    setSum(textInput === '' ? 0 : getSumBySpacedNumbers(textInput));
  };

  return (
    <>
      <h2 id="heading">Calculator</h2>
      <p>
        Enter Values Separated By Spaces to Get the Sum:{' '}
        <input
          id="calculator-input"
          type="text"
          placeholder="Enter Numbers"
          value={textInput}
          onChange={handleInputChange}
        />{' '}
        <button id="calculate" type="button" onClick={onButtonClick}>
          Get Sum
        </button>
      </p>
      <p id="sum-display">The Sum Is: {sum}</p>
    </>
  );
};

export default Calculator;
