import { useState } from 'react';
import './App.css';
import HomePage from './HomePage.jsx';
import SecondPage from './SecondPage.jsx';
import ThirdPage from './ThirdPage.jsx';
function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage navigate={setPage} />;
      case 'second':
        return <SecondPage navigate={setPage} />;
      case 'third':
        return <ThirdPage navigate={setPage} />;
      default:
        return <HomePage navigate={setPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
