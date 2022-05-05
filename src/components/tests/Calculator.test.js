import { render, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

describe('calculator', () => {
  it('should Calculator component with relevant texts', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Calculator />
    );
    expect(container.querySelector('#heading').innerHTML).toEqual('Calculator');
    expect(
      getByText('Enter Values Separated By Spaces to Get the Sum:')
    ).toBeTruthy();
    expect(getByText('The Sum Is: 0')).toBeTruthy();
    expect(getByPlaceholderText('Enter Numbers')).toBeTruthy();
  });

  it('should have a text component which only accepts digits and spaces', () => {
    const { container } = render(<Calculator />);
    const textInput = container.querySelector('#calculator-input');

    expect(textInput.value).toEqual('');

    fireEvent.change(textInput, { target: { value: 'sb' } });
    expect(textInput.value).toEqual('');

    fireEvent.change(textInput, { target: { value: '343 343' } });
    expect(textInput.value).toEqual('343 343');
  });

  it('should display the sum when Get Sum button is clicked', () => {
    const { container } = render(<Calculator />);
    const textInput = container.querySelector('#calculator-input');
    const sumOutput = container.querySelector('#sum-display');

    fireEvent.change(textInput, { target: { value: '1 2 3 4' } });
    expect(textInput.value).toEqual('1 2 3 4');

    fireEvent.click(container.querySelector('#calculate'));
    expect(sumOutput.innerHTML).toEqual('The Sum Is: 10');
  });
});
