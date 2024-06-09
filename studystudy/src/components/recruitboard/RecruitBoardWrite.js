import React from 'react';
import BoardWrite from '../board/BoardWrite';
import SideFilter from '../board/SideFilter';
import './recruitBoardWrite.css';

function RecruitBoardWrite() {
  const handleSubmit = (formData) => {
    // 여기에서 폼 데이터
    console.log(formData);
  };

  return (
    <div className="write-board-container">
      <div className="side-filter">
        <SideFilter showTopSearch={false} />
      </div>
      <div className="board-write-container">
        <BoardWrite onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default RecruitBoardWrite;