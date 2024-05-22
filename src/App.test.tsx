import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});
