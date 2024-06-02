import tpic from '../images/tpic.png';
import './mainbottom.css';

function Mainbottom() {
  return (
      <div className="bottom-container">
        <div className="main-bottom">
          <div className="image-container">
            <img className="tpic" src={tpic} alt="tpic" />
          </div>
          <div className="bottom-text-container">
            <div>29DongSung과 함께</div>
            <div>취향 존중 여행 메이트 찾으러 슈슝!</div>
          </div>
        </div>
      </div>
  );
}

export default Mainbottom;