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
          1
        </button>
        <button 
          className="circle-button button-2"
          onClick={() => handleNavigation('third')}
        >
          2
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
    </div>
  );
};

export default HomePage;
