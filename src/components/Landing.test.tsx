import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Landing from "./Landing";

test('button toggles state and element visibility', async () => {
    render(<Landing />);
    const button = screen.getByRole('button');
  
    expect(screen.queryByTestId('custom-element')).not.toBeInTheDocument(); // Initially hidden
  
    await fireEvent.click(button);
    const customElement = await screen.findByTestId('custom-element');
    expect(customElement).toBeInTheDocument(); // Visible after click
  
    await fireEvent.click(button);
    expect(screen.queryByTestId('custom-element')).not.toBeInTheDocument(); // Hidden again
  });
  