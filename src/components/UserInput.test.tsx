import { fireEvent, render, screen } from '@testing-library/react';
import UserInput from './UserInput';

test('search input updates value on typing', () => {
  render(<UserInput />);
  const searchInput = screen.getByRole('textbox') as HTMLInputElement;
  fireEvent.change(searchInput, { target: { value: 'new search term' } });

  expect(searchInput.value).toBe('new search term');
});
