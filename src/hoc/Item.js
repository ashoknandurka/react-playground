import updateComponent from "./updateComponent";

function Item({name, age}) {
  return (
    <div>
      <h1>item HOC Component</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default updateComponent(Item);
