import React from 'react';
import { fireEvent, render, screen,waitFor } from '@testing-library/react';
import App from './App';

test('renders the react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});

test("button click", async () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {
    name: /click me/i, // Correctly use regular expression
  });
  await waitFor(() => {
    fireEvent.click(buttonElement);
    const changedText = screen.getByText(/Text after click/i);
    expect(changedText).toBeInTheDocument();
  });
});