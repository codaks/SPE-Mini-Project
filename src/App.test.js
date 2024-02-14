import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders calculator with initial display value', () => {
  const { getByText } = render(<App />);
  const displayElement = getByText(/IIIT B Calculato/i);
  expect(displayElement).toBeInTheDocument();
});

test('clicking numbers updates the display', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('3'));
  const displayElement = getByText(/123/i);
  expect(displayElement).toBeInTheDocument();
});

test('performing addition operation', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  const displayElement = getByText(/3/i);
  expect(displayElement).toBeInTheDocument();
});

// Add more tests for other operations and edge cases as needed
