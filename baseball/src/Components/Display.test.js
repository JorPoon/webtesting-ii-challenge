import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display'

// const here = afterEach(cleanup());
// here();

describe('<Display/>', () => {

  it('renders sucessfully', () => {
    render(<Display/>);
  })

  it('renders strikes', () => {
      const {queryByText} = render(<Display/>)
      expect(queryByText(/strikes/i)).not.toBeNull();
  })

  it('renders balls', () => {
    const {queryByText} = render(<Display/>)
    expect(queryByText(/balls/i)).not.toBeNull();
  })

  it('renders hits', () => {
    const {queryByText} = render(<Display/>)
    expect(queryByText(/hits/i)).not.toBeNull();
  })

  it('resets all counts', () => {
    const {getByText} = render(<Display/>);
    const button = getByText(/reset/i)
    fireEvent.click(button);
    getByText(/strikes/i);
    // getByText(/balls: 0/i);
    // getByText(/hits: 0/i);


  })
})