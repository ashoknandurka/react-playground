import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "./todo";

describe("Todo App", () => {
  test("render without crash", () => {
    render(<Todo />);
    expect(screen.getByText(/Todo App/i)).toBeInTheDocument();
  });

  test("add a new todo item", () => {
    render(<Todo />);

    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("todo-add-btn");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText(/New Task/i)).toBeInTheDocument();
  });

  test("update a existing todo item", () => {
    render(<Todo />);

    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("todo-add-btn");

    fireEvent.change(input, { target: { value: "Old Task" } });
    fireEvent.click(addButton);

    const editButton = screen.getByTestId("todo-edit-btn");
    fireEvent.click(editButton);

    const updateButton = screen.getByTestId("todo-update-btn");
    fireEvent.change(input, { target: { value: "Updated Task" } });
    fireEvent.click(updateButton);

    expect(screen.getByText(/Updated Task/i)).toBeInTheDocument();
  });

  test("delete a todo item", () => {
    render(<Todo />);

    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("todo-add-btn");

    fireEvent.change(input, { target: { value: "Task to Delete" } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByTestId("todo-delete-btn");
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/Task to Delete/i)).not.toBeInTheDocument();
  });
});
