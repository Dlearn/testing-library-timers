import React from "react";
import { act, render, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("loading state is in the document before network request completes", async () => {
  const { getByRole, getByText } = render(<App />);

  expect(getByText("Testing Library Timers")).toBeInTheDocument();

  jest.useFakeTimers();
  userEvent.type(getByRole("textbox"), "search test");
  // Give it half a second to fire a debounced action
  // Incorrect
  // jest.advanceTimersByTime(500);

  // Correct
  act(() => jest.advanceTimersByTime(500));

  expect(getByText("search test")).toBeInTheDocument();
});
