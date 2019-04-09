import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display'

describe('<Display/>', () => {

  it('renders sucessfully', () => {
    render(<Display/>);
  })

  it('renders strikes', () => {
      const {queryByText} = render(<Display/>)
      expect(queryByText(/strikes/i)).not.toBeNull();
  })
})