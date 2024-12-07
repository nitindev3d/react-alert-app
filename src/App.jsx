import "./App.css";

function App() {
  
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <div className="app-container">
      <h1>React Alert App</h1>
      <button className="custom-button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
