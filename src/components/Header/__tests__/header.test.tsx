import React, {useState} from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from '../Header';

afterEach(() => {
  cleanup();
});

test('test', () => {
  /////////////////////////////////////////////////
  const showCartHandler = () => {
    let temp = true;
  };
  ////////////////////////////////////////////////

  render(<Header onShowCart={showCartHandler}/>);
  const headerText = screen.getByTestId("header-text");
  expect(headerText).toBeInTheDocument();
  expect(headerText).toHaveTextContent("React Meals");
  //expect(true).toBe(true);
})