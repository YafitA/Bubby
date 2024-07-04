import PropTypes from 'prop-types';  // Import PropTypes
import './ThirdPage.css';

const ThirdPage = ({ navigate }) => {
  const navigateToTicTocToe = () => {
    window.location.href = 'https://poki.com/il/g/tictactoe?';
  };
  const navigateToSnakesAndLadders = () => {
    window.location.href = 'https://toytheater.com/snakes-and-ladders/';
  };
  const navigateToGooseGame = () => {
    window.location.href = 'https://toytheater.com/goose-game/';
  };
  const navigateToCheckers = () => {
    window.location.href = 'https://toytheater.com/checkers/';
  };

  return (
    <div className="third-page-container">
      <h1>משחקים</h1>
      <div className="third-page-button-container">
        <button className="third-page-circle-button" onClick={navigateToTicTocToe} style={{ backgroundColor: 'pink', color: 'white'}}>
          איקס עיגול
        </button>
        <button className="third-page-circle-button" onClick={navigateToSnakesAndLadders} style={{ backgroundColor: '#f3afaf', color: 'white'}}>
          סולמות ונחשים
        </button>
        <button className="third-page-circle-button" onClick={navigateToGooseGame} style={{ backgroundColor: '#f3d9e4', color: 'white'}}>
          משחק האווזים
        </button>
        <button className="third-page-circle-button" onClick={navigateToCheckers} style={{ backgroundColor: '#fde5b4', color: 'white'}}>
          צקרס
        </button>
        <button className="third-page-circle-button" onClick={() => navigate('home')} style={{ backgroundColor: '#c62653', color: 'white'}}>
          חזרה
        </button>
      </div>
      
    </div>
  );
};

ThirdPage.propTypes = {
  navigate: PropTypes.func.isRequired,  // Define prop types
};

export default ThirdPage;
