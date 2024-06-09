import React, { useState, useEffect } from 'react';
import BoardWrite from '../board/BoardWrite';
import SideFilter from '../board/SideFilter';
import './recruitBoardModify.css';

const RecruitBoardModify = () => {
  const [initialValues, setInitialValues] = useState({}); // 초기 값으로 빈 객체를 설정
  const [loading, setLoading] = useState(true); // 데이터 로딩 상태를 관리

  useEffect(() => {
    // 여기에서 게시물의 데이터를 불러오는 작업을 수행할 수 있습니다.
    // 예를 들어, 게시물 번호를 사용하여 API를 호출하고 해당 데이터를 가져오는 등의 작업을 수행합니다.
    // 이 예시에서는 임시 데이터(tempData)를 사용하도록 하겠습니다.
    // 데이터를 불러오는 과정이 비동기로 이루어질 수 있으므로 useEffect 내부에서 처리합니다.
    const fetchBoardData = async () => {
      try {
        // 여기에 게시물 데이터를 가져오는 API 호출 등의 작업을 수행합니다.
        // 임시 데이터를 사용하는 경우에는 다음과 같이 처리합니다.
        const boardNo = 123; // 수정할 게시물의 번호 (임시로 설정)
        const response = await fetch(`API_ENDPOINT/${boardNo}`); // API_ENDPOINT를 실제 API 엔드포인트로 대체해야 합니다.
        if (response.ok) {
          const data = await response.json();
          setInitialValues(data); // 가져온 데이터를 상태에 설정합니다.
          setLoading(false); // 데이터 로딩 상태를 false로 변경합니다.
        } else {
          throw new Error('Failed to fetch board data');
        }
      } catch (error) {
        console.error('Error fetching board data:', error);
        // 오류 처리를 여기에 추가할 수 있습니다.
      }
    };

    fetchBoardData(); // 함수 호출

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // useEffect의 의존성 배열이 빈 배열이므로 컴포넌트가 마운트될 때 한 번만 실행됩니다.

  const handleSubmit = (formData) => {
    // 수정된 폼 데이터를 처리하는 함수
    console.log('Modified form data:', formData);
    // 여기에서 수정된 내용을 서버로 전송하거나 다른 작업을 수행할 수 있습니다.
  };

  return (
    <div className="modify-board-container">
      <div className="side-filter">
        <SideFilter showTopSearch={false} />
      </div>
      <div className="board-write-container">
        {loading ? (
          <p>Loading...</p> // 데이터 로딩 중일 때 표시할 내용
        ) : (
          <BoardWrite initialValues={initialValues} onSubmit={handleSubmit} /> // BoardWrite 컴포넌트에 초기 값과 제출 핸들러를 전달합니다.
        )}
      </div>
    </div>
  );
};

export default RecruitBoardModify;