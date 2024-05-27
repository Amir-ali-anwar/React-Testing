import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders the react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});

test("button click", async () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {
    name: /click me/i, // Correctly use regular expression
  });
  const customElement= screen.getByTestId('custom-element')
  expect(customElement).toBeInTheDocument()

  expect(buttonElement).toBeInTheDocument();
});


