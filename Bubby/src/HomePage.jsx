
// eslint-disable-next-line react/prop-types
const HomePage = ({ navigate }) => {
    const handleNavigation = () => {
      navigate('second');
    };
    const handleNavigation2 = () => {
        navigate('third');
      };
    return (
      <div>
        <h1>Home Page</h1>
        <button 
          className="circle-button"
          value={1} 
          onClick={handleNavigation}
        >
          Go to Second Page
        </button>
        <button 
          className="circle-button" 
          onClick={handleNavigation2}
        >
          Go to Second Page
        </button>
        <button 
          className="circle-button" 
          onClick={handleNavigation}
        >
          Go to Second Page
        </button>
        <button 
          className="circle-button" 
          onClick={handleNavigation}
        >
          Go to Second Page
        </button>
      </div>
    );
  };
  
  export default HomePage;
  