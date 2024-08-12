import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./counter";

test("render counter component", () => {
  render(<Counter />);
   expect(screen.getByText("counter component")).toBeInTheDocument();
});

test("increment the count by 1 when increment button is clicked",()=>{
  render(<Counter />);
  const incrementButton = screen.getByTestId('increment-btn')
  const counter = screen.getByTestId('counter')

  fireEvent.click(incrementButton)
  
  expect(counter).toHaveTextContent('1');
})

test("decrement the count by 1 when decrement button is clicked",()=>{
  render(<Counter />)
  const incrementButton = screen.getByTestId('increment-btn')
  const decrementButton = screen.getByTestId('decrement-btn');
  const counter = screen.getByTestId('counter');

  fireEvent.click(incrementButton)
  fireEvent.click(decrementButton)

  expect(counter).toHaveTextContent('0');
})

test("does not decrement the count below 0",()=>{
  render(<Counter />)
  const decrementButton = screen.getByTestId('decrement-btn');
  const counter = screen.getByTestId('counter');

  fireEvent.click(decrementButton)

  expect(counter).toHaveTextContent('0');
})