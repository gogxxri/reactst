import React, { useState } from 'react';
import './MainHome.css';
import '../fonts/fonts.css';

function MainHome() {
  const [mateText, setMateText] = useState("Travel\nMate");
  const [reviewText, setReviewText] = useState("Travel\nReview");

  const handleMouseEnterMate = () => {
    setMateText("여행\n메이트");
  };

  const handleMouseLeaveMate = () => {
    setMateText("Travel\nMate");
  };

  const handleMouseEnterReview = () => {
    setReviewText("여행\n리뷰");
  };

  const handleMouseLeaveReview = () => {
    setReviewText("Travel\nReview");
  };

  return (
    <div className="Maintop">
      <div className="MainRight">
        <div className="mainText">마음이 <br /> Dong하는 사람과 <br /> 취향 존중 <br /> 여행</div>
        <button className="joinButton">Join-us</button>
      </div>
      
      <div className="buttonsContainer">
        <button 
          className="button travelMate" 
          onMouseEnter={handleMouseEnterMate} 
          onMouseLeave={handleMouseLeaveMate}
        >
          {mateText}
        </button>
        <button 
          className="button travelReview" 
          onMouseEnter={handleMouseEnterReview} 
          onMouseLeave={handleMouseLeaveReview}
        >
          {reviewText}
        </button>
      </div>
    </div>

  );
}

export default MainHome;