import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});

test('button click', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', {
    name: /click me/i // Correctly use regular expression
  });
  fireEvent.click(buttonElement);
  // const changedText = screen.getByText(/Text after click/i);
  expect(buttonElement).toBeInTheDocument();
});