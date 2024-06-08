import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './recruitBoardDetail.css';
import tempData from './tempData';
import Comment from '../board/Comment';

const RecruitBoardDetail = () => {
  const { boardNo } = useParams();
  const boardData = tempData.find(data => data.CBOARD_NO === boardNo);


const parseTags = (tagsString) => {
  if (typeof tagsString === 'string') {
    return tagsString.split(',').map(tag => tag.trim());
  } else if (Array.isArray(tagsString)) {
    return tagsString;
  } else {
    console.error('Invalid tags format:', tagsString);
    return [];
  }
};
  return (
    <div className="detail-container">
      <header className="header">
        <Link to="/recruit-board" className="back-link">동행 구인 게시글 목록 보러가기</Link>
      </header>

      <main className="detail-main">
        <section className="content">
          <div className="board-detail">
            <div className="board-info-container">
              <h2 className="board-title">{boardData?.BOARD_TITLE}</h2>
              <div className="board-detail-item tag-list">
                {Array.isArray(parseTags(boardData?.CBOARD_TAGS)) && parseTags(boardData.CBOARD_TAGS).map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="author-profile">
                <Link to={`/userProfile/${boardData?.MEMBER_ID}`} className="author-profile-link">
                  <img src={boardData?.MEMBER_PROFILE_PICTURE} alt="프로필 사진" className="profile-picture" />
                  {boardData?.MEMBER_NICKNAME}
                </Link>
              </div>
              <div className="board-detail-item">
                여행 시작일: {boardData?.TRIP_START} | 여행 종료일: {boardData?.TRIP_END}
              </div>
              <div className="board-detail-item">구인여부: <span className="recruitment-status">{boardData?.RECERUIT_DONE ? '구인중' : '구인완료'}</span></div>
            </div>
            {boardData?.photo && <img src={boardData.photo} alt="게시물 사진" className="board-photo" />}
            <div className="board-content">{boardData?.BOARD_CONTENT}</div>
          </div>

		 <div className="comment-wrapper">
		  <Comment comments={boardData?.comments || []} setComments={() => {}} />
		</div>
        </section>
      </main>
    </div>
  );
};

export default RecruitBoardDetail;