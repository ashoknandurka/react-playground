import { render } from "@testing-library/react";
import updateComponent from "./updateComponent";
import { expect } from "playwright/test";

// A mock child component to use in out tests

const MockChildComponent = ({ name, age }) => (
  <div>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
  </div>
);

describe("updateComponent HOC", () => {
  it("render the child component with correct props", () => {
    const NewComponent = updateComponent(MockChildComponent);
    const { getByText } = render(<NewComponent />);

    expect(getByText("Name: ashok")).toBeInTheDocument();
    expect(getByText("Age: 25")).toBeInTheDocument();
  });
});
