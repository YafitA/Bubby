/* eslint-disable react/prop-types */
import { useState } from 'react';


const HomePage = ({ navigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskText, setTaskText] = useState('');
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [tooltipContent, setTooltipContent] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

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

  const handleMouseEnter = (text) => {
    setTooltipContent(text);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const HandleCall = () =>{
    window.location.href = 'tel:+972586300888'
  }

  const HandleMessage = () =>{
    window.location.href = 'tel:+972539287433?body=היי סבתא!'
  }

  return (
    
    <div className="center-container">
      <div className="circle-image"/>
      <div className="buttons-container">
        <button
          className="circle-button button-1"
          onClick={() => handleNavigation('second')}
          onMouseEnter={() => handleMouseEnter('תעד את הרגע! העלאת תמונה לאלבום התמונות')}
          onMouseLeave={handleMouseLeave}
        >
        <img src='https://i.imgur.com/VL452a7.jpg' alt='camera'/>
        </button>
        <button
          className="circle-button button-2"
          onClick={() => handleNavigation('third')}
          onMouseEnter={() => handleMouseEnter('משעמם? משחק עם סבתא')}
          onMouseLeave={handleMouseLeave}
        >
        <img src='https://i.imgur.com/45MzSdp.jpg' alt='game-controller'/>
        </button>
        <button
          className="circle-button button-3"
          onClick={HandleCall}
          onMouseEnter={() => handleMouseEnter('למה שלא תתקשר לסבתא? שיחה עם סבתא')}
          onMouseLeave={handleMouseLeave}
        >
        <img src='https://i.imgur.com/KrWAY9i.jpg' alt='phone'/>
        </button>
        <button
          className="circle-button button-4"
          onClick={handleModalToggle}
          onMouseEnter={() => handleMouseEnter('מתי בפעם האחרונה בילית עם סבתא? בילוי חודשי')}
          onMouseLeave={handleMouseLeave}
        >
        <img src='https://i.imgur.com/HDnOTsF.jpg' alt='car'/>
        </button>
        <button
          className="circle-button button-5"
          onClick={HandleMessage}
          onMouseEnter={() => handleMouseEnter('מה נשמע עם סבתא? שלח לה הודעה')}
          onMouseLeave={handleMouseLeave}
        >
        <img src='https://i.imgur.com/lfPnyMI.jpg' alt='message'/>
        </button>
        <button
          className="circle-button button-6"
          onClick={() => handleNavigation('5th')}
          onMouseEnter={() => handleMouseEnter('סבתא מרגישה בודדה! לבקר את סבתא')}
          onMouseLeave={handleMouseLeave}
        >
        <img src='https://i.imgur.com/VyOq5f3.jpg' alt='visit'/>
        </button>
        <button
          className="circle-button button-7"
          onClick={handleSecondModalToggle}
          onMouseEnter={() => handleMouseEnter('סבתא זקוקה לעזרתך! ביצוע מטלות בית')}
          onMouseLeave={handleMouseLeave}
        >
        <img src='https://i.imgur.com/EViZYEq.jpg' alt='home'/>
        </button>
      </div>

      <div className='imagesContainer'>
  <div className='imageWrapper'>
    <img src='https://i.imgur.com/B8bse0F.jpg' alt='Image 1'/>
  </div>
  <div className='imageWrapper'>
    <img src='https://i.imgur.com/a5ymhRM.jpg' alt='Image 2'/>
  </div>
  <div className='imageWrapper'>
    <img src='https://i.imgur.com/w89SxVx.jpg' alt='Image 3'/>
  </div>
  <div className='imageWrapper'>
    <img src='https://i.imgur.com/YF397nd.jpg' alt='Image 4'/>
  </div>
  <div className='imageWrapper'>
    <img src='https://i.imgur.com/uNuSwHW.jpg' alt='Image 5'/>
  </div>

  
  <div className="addPhoto" onClick={() => handleNavigation('second')}>+</div>
</div>

<div className="pointsArea">
        :הנקודות שצברת
        <div className='pointsDisplay'>
          255
        </div>
      </div>

      <div className="profileArea">
        
      </div>

      {showTooltip && (
        <div className="bottom-tooltip">
          {tooltipContent}
        </div>
      )}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleModalToggle}>&times;</span>
            <h2 style={{ color: '#472151' }}>!ספרו לנו מה עשיתם</h2>
            <textarea
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              placeholder="עשינו הליכה בפארק..."
            ></textarea>
            <button className="report-button" onClick={handleTaskReport}>קבל נקודות!</button>
          </div>
        </div>
        
      )}

      {isSecondModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleSecondModalToggle}>&times;</span>
            <h2 style={{ color: '#472151' }}>?איך עזרת לסבתא במטלות הבית</h2>
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
