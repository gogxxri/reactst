import React, { useState } from 'react';
import './comment.css';

const Comment = ({ comments, setComments }) => {
  const [newComment, setNewComment] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyingTo, setReplyingTo] = useState(null); // 대댓글 입력 상태 추가

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    const newId = comments.length + 1;
    const newCommentObj = { id: newId, text: newComment, author: '사용자', profilePic: '/profile.jpg', replies: [] };
    setComments([...comments, newCommentObj]);
    setNewComment('');
  };

  const handleToggleReply = (commentId) => {
    setReplyingTo(commentId === replyingTo ? null : commentId); 
    setReplyText(''); 
  };

  const handleAddReply = (commentId, depth) => {
    const commentIndex = comments.findIndex(comment => comment.id === commentId);
    if (commentIndex !== -1) {
      const newId = comments[commentIndex].replies.length + 1;
      const newReply = { id: newId, text: replyText, author: '사용자', profilePic: '/profile.jpg', depth: depth + 1 };
      const updatedComments = [...comments];
      updatedComments[commentIndex].replies.push(newReply);
      setComments(updatedComments);
      setReplyingTo(null); 
    }
  };

  return (
    <div className="comment-section">
      <div className="comment-input">
        <textarea
          placeholder="댓글을 작성해주세요."
          value={newComment}
          onChange={handleCommentChange}
        ></textarea>
        <button className="comment-button" onClick={handleAddComment}>댓글 작성</button>
      </div>
      <div className="comments">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <div className="comment-profile">
              <img src={comment.profilePic} alt="프로필 사진" className="comment-profile-pic" />
              <span className="comment-author">{comment.author}</span>
              <p className="comment-text">{comment.text}</p>
            </div>
            {/* 대댓글 입력란 */}
            {replyingTo === comment.id && (
              <div className="reply-input">
                <textarea
                  placeholder="대댓글을 작성해주세요."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                ></textarea>
                <button className="reply-button" onClick={() => handleAddReply(comment.id, comment.depth)}>대댓글 작성</button>
              </div>
            )}
            {/* 대댓글 토글 버튼 */}
            {!replyingTo && (
              <button className="toggle-reply" onClick={() => handleToggleReply(comment.id)}>대댓글 작성하기</button>
            )}
            {/* 대댓글 목록 */}
            <div className="replies">
              {comment.replies.map(reply => (
                <div key={reply.id} className="reply" style={{ marginLeft: `${reply.depth * 20}px` }}>
                  <div className="reply-profile">
                    <img src={reply.profilePic} alt="프로필 사진" className="reply-profile-pic" />
                    <span className="reply-author">{reply.author}</span>
                  </div>
                  <div className="reply-details">
                    <p className="reply-text">{reply.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;