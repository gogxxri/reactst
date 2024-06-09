import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './recruitBoardDetail.css';
import tempData from './tempData';
import Comment from '../board/Comment';

const RecruitBoardDetail = () => {
  const { boardNo } = useParams();
  const boardData = tempData.find(data => data.CBOARD_NO === boardNo);
  const loggedInUserId = "user123"; // 임시아이디
  const navigate = useNavigate();

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

  const handleEdit = () => {
    navigate(`/recruitboard/${boardNo}/modify`);
  };

  const handleDelete = () => {
    console.log('Delete button clicked');
  };

  const isOwner = loggedInUserId === boardData?.MEMBER_ID;

  return (
    <div className="detail-container">
      <header className="header">
        <Link to="/recruitboard" className="back-link">여행 메이트 구인 목록으로</Link>
      </header>
      <main className="detail-main">
        <section className="content">
          <div className="board-detail">
            <div className="board-info-container">
              <h2 className="board-title">
                {boardData?.BOARD_TITLE}
                <span className="recruitment-status">{boardData?.RECRUIT_DONE ? '구인중' : '구인 완료'}</span>
              </h2>
              <div className="board-detail-item tag-list">
                {Array.isArray(parseTags(boardData?.BOARD_TAGS)) && parseTags(boardData.BOARD_TAGS).map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="board-detail-item date-info">
			  <span className="date-info-label">여행 시작 날짜 : </span>
			  <span className="date-info-value">{boardData?.TRIP_START}</span>
			</div>
			<div className="board-detail-item date-info">
			  <span className="date-info-label">여행 종료 날짜 : </span>
			  <span className="date-info-value">{boardData?.TRIP_END}</span>
			</div>
            </div>
            <div className="author-profile">
              <Link to={`/userProfile/${boardData?.MEMBER_ID}`} className="author-profile-link">
				  <img src={boardData?.MEMBER_PROFILE_PICTURE} alt="Profile" className="profile-picture" />
				  {boardData?.MEMBER_NICKNAME}
				</Link>
            </div>
            <div className="board-content">{boardData?.BOARD_CONTENT}</div>
            {boardData?.photo && (
              <div className="board-photo-container">
                <img src={boardData.photo} alt="Board" className="board-photo" />
                {isOwner && ( // 같다고 가정하면
                  <div className="button-container">
                    <button onClick={handleEdit} className="edit-button">수정</button>
                    <button onClick={handleDelete} className="delete-button">삭제</button>
                  </div>
                )}
              </div>
            )}
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