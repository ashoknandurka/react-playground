import { useEffect, useState } from "react";

const getLocalData = () => {
  const list = localStorage.getItem("mytodolist");
  return JSON.parse(list);

  // if (list) {
  //   return JSON.parse(list)
  // } else {
  //   return []
  // }
};

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(getLocalData());
  const [toggle, setToggle] = useState(false);
  const [isEditItem, setIsEditItem] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  const handleAdd = () => {
    if (input === "") {
      alert("please enter something");
    } else if (input && toggle) {
      setTodos(
        todos.map((item) => {
          if (item.id === isEditItem) {
            return { ...item, name: input };
          }
          return item;
        })
      );
      setInput("");
      setToggle(false);
      setIsEditItem(null);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: input,
      };
      setTodos([...todos, myNewInputData]);
      setInput("");
    }
  };

  const deleteItem = (id) => {
    const filterData = todos.filter((item) => item.id !== id);
    setTodos(filterData);
  };

  const updateItem = (id) => {
    const updateTask = todos.find((item) => item.id === id);
    setInput(updateTask.name);
    setToggle(true);
    setIsEditItem(updateTask.id);
  };

  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={input}
          data-testid="todo-input"
        />
        {toggle ? (
          <button onClick={handleAdd} data-testid="todo-update-btn">
            update
          </button>
        ) : (
          <button onClick={handleAdd} data-testid="todo-add-btn">
            Add
          </button>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          {todos.map((Item) => {
            return (
              <li style={{ display: "flex" }} key={Item.id}>
                <p style={{ marginRight: "1rem" }}>{Item.name}</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    onClick={() => deleteItem(Item.id)}
                    data-testid="todo-delete-btn"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => updateItem(Item.id)}
                    data-testid="todo-edit-btn"
                  >
                    Edit
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
