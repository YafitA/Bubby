// src/App.js
import './App.css';

function App() {
  const openNewWindow = () => {
    window.open('https://www.example.com', '_blank');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Web Page</h1>
        <p>Start designing your awesome webpage here!</p>
        <button className="circular-button" onClick={openNewWindow}>+</button>
      </header>
    </div>
  );
}

export default App;
