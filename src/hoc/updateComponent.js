
function updateComponent(ChildComponent) {
  function newComponent() {
    return <ChildComponent name="ashok" age={25} />;
  }
  return newComponent;
}

export default updateComponent;
