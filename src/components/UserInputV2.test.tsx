import { fireEvent, render, screen } from "@testing-library/react";
import UserInputV2 from "./UserInputV2";

// 1. Initial Render Test
test('renders initial text', () => {
  render(<UserInputV2 />);
  const textElement = screen.getByText(/Initial Text/i);
  expect(textElement).toBeInTheDocument();
  const countElement = screen.getByText(/Click count: 0/i);
  expect(countElement).toBeInTheDocument();
});

// 2. Button Click Test
  test('button click toggles text',()=>{
    render(<UserInputV2 />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement)
    const changedTextElement = screen.getByText(/Text after click/i);
    expect(buttonElement).toBeInTheDocument()
  })

  // 3. Toggle Text Test
  test("button click toggles text",()=>{
    render(<UserInputV2 />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
      // First click
    fireEvent.click(buttonElement)
    let textElement = screen.getByText(/Text after click/i);
    fireEvent.click(buttonElement);
    textElement = screen.getByText(/Initial Text/i);  
    expect(textElement).toBeInTheDocument()
  
  })

  // 4. Click Count Test
  test('click count increments on button click', () => {
    render(<UserInputV2 />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);
    const countElement = screen.getByText(/Click count: 1/i);
    expect(countElement).toBeInTheDocument();
  })

  test("multiple clicks update text and count correctly", () => {
    render(<UserInputV2 />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    // Click the button 3 times
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    const textElement = screen.getByText(/Text after click/i);
    expect(textElement).toBeInTheDocument();
  
    // Check count
    const countElement = screen.getByText(/Click count: 3/i);
    expect(countElement).toBeInTheDocument();
  });