import  { useState } from 'react';
// eslint-disable-next-line react/prop-types
const HomePage = ({ navigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskText, setTaskText] = useState('');
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  const handleNavigation = (page) => {
    navigate(page);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleTaskReport = () => {
    console.log("Task reported:", taskText);
    setIsModalOpen(false);
    setTaskText('');
  };

  const handleSecondModalToggle = () => {
    setIsSecondModalOpen(!isSecondModalOpen);
  };

  const handleFeedbackSubmit = () => {
    console.log("Feedback submitted:", feedbackText);
    setIsSecondModalOpen(false);
    setFeedbackText('');
  };

  return (
    <div className="center-container">
      <div className="circle-image"></div>
      <div className="buttons-container">
        <button 
          className="circle-button button-1"
          onClick={() => handleNavigation('second')}
        >
        <img src='https://i.imgur.com/VL452a7.jpg' alt='camera'/>
        </button>
        <button 
          className="circle-button button-2"
          onClick={() => handleNavigation('third')}
        >
        <img src='https://i.imgur.com/45MzSdp.jpg' alt='game-controller'/>
        </button>
        <button 
          className="circle-button button-3"
          onClick={() => handleNavigation('4th')}
        >
          3
        </button>
        <button 
          className="circle-button button-4"
          onClick={handleModalToggle}
        >
          4
        </button>
        <button 
          className="circle-button button-5"
          onClick={() => handleNavigation('5th')}
        >
          5
        </button>
        <button 
          className="circle-button button-6"
          onClick={() => handleNavigation('5th')}
        >
          6
        </button>
        <button 
          className="circle-button button-7"
          onClick={handleSecondModalToggle}
        >
          7
        </button>
      </div>
         

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleModalToggle}>&times;</span>
            <h2>!ספרו לנו מה עשיתם</h2>
            <textarea
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              placeholder="עשינו הליכה בפארק..."
            ></textarea>
            <button className="report-button" onClick={handleTaskReport}>Complete</button>
          </div>
        </div>
      )}

      {isSecondModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleSecondModalToggle}>&times;</span>
            <h2>?איך עזרת לסבתא במטלות הבית</h2>
            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="קיפלתי כביסה/שטפתי כלים..."
            ></textarea>
            <button className="report-button" onClick={handleFeedbackSubmit}>קבל נקודות!</button>
          </div>
        </div>
      )}


    <div className='imagesContainer'>
        <img src='https://i.imgur.com/B8bse0F.jpg' alt='Image 1'/>
        <img src='https://i.imgur.com/a5ymhRM.jpg' alt='Image 2'/>
        <img src='https://i.imgur.com/w89SxVx.jpg' alt='Image 3'/>
        <img src='https://i.imgur.com/YF397nd.jpg' alt='Image 4'/>
        <img src='https://i.imgur.com/uNuSwHW.jpg' alt='Image 5'/>
        <div className="addPhoto" onClick={() => handleNavigation('second')}>+</div>
    </div>

      <div className='profileContainer'>
      מספר נקודות שצברת    
      <img src=''/>   
      </div>

      </div>
  );
      
};

export default HomePage;
