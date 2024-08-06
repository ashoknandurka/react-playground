import React, { useState, useEffect } from "react";

function DebounceSearch() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleChange = (value) => {
    console.log("value::", value);
    setFilteredUsers(
      users.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debounceSearch = debounce(handleChange, 3000); // Adjust debounce delay here (e.g., 3000ms)

  return (
    <div>
      <h1>this is the search component</h1>
      <input onChange={(e) => debounceSearch(e.target.value)} />
      <div>
        <ul>
          {filteredUsers.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default DebounceSearch;
