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
        <button className="third-page-circle-button" onClick={navigateToTicTocToe} style={{ backgroundColor: '#ffa345', color: 'white'}}>
          איקס עיגול
        </button>
        <button className="third-page-circle-button" onClick={navigateToSnakesAndLadders} style={{ backgroundColor: '#472151', color: 'white'}}>
          סולמות ונחשים
        </button>
        <button className="third-page-circle-button" onClick={navigateToGooseGame} style={{ backgroundColor: '#c1246b', color: 'white'}}>
          משחק האווזים
        </button>
        <button className="third-page-circle-button" onClick={navigateToCheckers} style={{ backgroundColor: '#438696', color: 'white'}}>
          צקרס
        </button>
      </div>
      <button className="Back-button" onClick={() => navigate('home')} style={{ backgroundColor: '#624185', color: 'white'}}>
          חזרה
        </button>
    </div>
  );
};

ThirdPage.propTypes = {
  navigate: PropTypes.func.isRequired,  // Define prop types
};

export default ThirdPage;
