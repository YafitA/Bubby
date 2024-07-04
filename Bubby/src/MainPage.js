// src/MainPage.js
import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  return (
    <div className="MainPage">
      <header className="MainPage-header">
        <h1>Welcome to My Web Page</h1>
        <p>Start designing your awesome webpage here!</p>
        <Link to="/item">
          <button className="circular-button">+</button>
        </Link>
      </header>
    </div>
  );
}

export default MainPage;
