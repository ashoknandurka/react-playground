import { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isEditItem, setIsEditItem] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
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

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input type="text" onChange={handleChange} value={input} />
        {toggle ? (
          <button onClick={handleAdd}>update</button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          {todos.map((Item) => {
            return (
              <li style={{ display: "flex" }} key={Item.id}>
                <p style={{ marginRight: "1rem" }}>{Item.name}</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button onClick={() => deleteItem(Item.id)}>Delete</button>
                  <button onClick={() => updateItem(Item.id)}>Update</button>
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
