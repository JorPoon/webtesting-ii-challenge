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
    getByText(/strikes:0/i);
    getByText(/balls:0/i);
    getByText(/hits:0/i);
  })

  it('Increase ball by 1', () => {
    const {getByText} = render(<Display/>);
    const button = getByText(/Throw Ball/i)
    fireEvent.click(button);
    getByText(/balls:1/i)
  })

  it('Increase strike by 1', () => {
    const {getByText} = render(<Display/>);
    const button = getByText(/Throw Strike/i)
    fireEvent.click(button);
    getByText(/strikes:1/i)
  })

  it('Increase strike by 1', () => {
    const {getByText} = render(<Display/>);
    const button = getByText(/Foul Ball/i)
    fireEvent.click(button);
    getByText(/strikes:2/i)
  })

//   it('Increase hit by 1', () => {
//     const {getByText} = render(<Display/>);
//     const button = getByText(/HIT/i)
//     fireEvent.click(button);
//     getByText(/hits:1/i)
//   })



})