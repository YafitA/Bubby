

// eslint-disable-next-line react/prop-types
const SecondPage = ({ navigate }) => {
    return (
      <div>
        <h1>Third Page</h1>
        <button 
          className="circle-button" 
          onClick={() => navigate('home')}
        >
          Back to Home Page
        </button>
      </div>
    );
  };
  
  export default SecondPage;
  