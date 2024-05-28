import { fireEvent, render, screen } from "@testing-library/react";
import UserInputV2 from "./UserInputV2";

// 1. Initial Render Test

test("renders initial text", () => {
  render(<UserInputV2 />);
  const textElement=screen.getByText(/Initial Text/i)
  expect(textElement).toBeInTheDocument()
});
