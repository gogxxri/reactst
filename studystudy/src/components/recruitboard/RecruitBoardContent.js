import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom'; 
import './recruitBoardContent.css';
import tempData from './tempData'; 

const RecruitBoardContent = () => {
  const navigate = useNavigate(); 

  const handleEnterDetail = boardNo => {
    navigate(`/board/${boardNo}`); 
  };

  const uniqueData = tempData.filter((value, index, self) => {
    return self.findIndex(item => item.CBOARD_NO === value.CBOARD_NO) === index;
  });

  return (
    <InfiniteScroll
      dataLength={uniqueData.length}
      next={() => {}}
      hasMore={false}
      loader={<h4>Loading...</h4>}
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {uniqueData.map(item => (
        <div key={item.CBOARD_NO} onClick={() => handleEnterDetail(item.CBOARD_NO)} className="recruit-board-item">
          <h2>{item.BOARD_TITLE}</h2>
          <p>게시 여부: {item.RECERUIT_DONE ? '구인중' : '구인완료'}</p>
          <p>게시일: {item.BOARD_WRITEDAY}</p>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default RecruitBoardContent;