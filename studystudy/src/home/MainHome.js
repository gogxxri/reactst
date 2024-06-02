import React, { useState } from 'react';
import './MainHome.css';
import travelM from '../images/travelM.png';
import travelR from '../images/travelR.png';
import mate from '../images/mate.png';
import review from '../images/review.png';

function MainHome() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter1 = () => {
    setTimeout(() => {
      setIsHovered1(true);
    }, 200);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setTimeout(() => {
      setIsHovered2(true);
    }, 200);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  return (
    <div className="MainHome">
      <div className="contentBox contentBox1" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
        <div className="imageWrapper">
          {isHovered1 ? <img src={mate} alt="여행 메이트 찾기" /> : <img src={travelM} alt="여행 메이트 찾기" />}
        </div>
        <div className="description">
          {isHovered1 ? "Find a travel mate and start your adventure!" : "여행 메이트를 찾아 모험을 시작하세요!"}
        </div>
      </div>
      <div className="contentBox contentBox2" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
        <div className="imageWrapper">
          {isHovered2 ? <img src={review} alt="Travel Review" /> : <img src={travelR} alt="Travel Review" />}
        </div>
        <div className="description">
          {isHovered2 ? "Read travel reviews from our community." : "우리 커뮤니티의 여행 후기를 읽어보세요."}
        </div>
      </div>
    </div>
  );
}



export default MainHome;