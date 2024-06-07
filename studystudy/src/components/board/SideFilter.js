import React, { useState } from 'react';
import searchBtn from '../../images/searchBtn.png';
import './sideFilter.css';

function SideFilter({ products }) {
  const [passingTags, setPassingTags] = useState({
    search: {
      inputTerm: ""
    },
    region: {
      서유럽: false,
      동유럽: false,
      북유럽: false,
      남유럽: false,
      오세아니아: false,
      아프리카: false,
      남아메리카: false,
      북아메리카: false,
      동남아시아: false,
      동북아시아: false,
      기타: false
    },
    date: {
      년: "",
      월: "",
      시작일: "",
      종료일: ""
    },
    gender: {
      남자: false,
      여자: false,
      무관: false
    },
    type: {
      즉흥: false,
      계획: false
    },
    budget: {
      더치페이: false,
      공금: false
    },
    activities: {
      카페: false,
      맛집: false,
      술: false,
      클럽: false,
      산책: false,
      박물관: false,
      미술관: false,
      엑티비티: false,
      수영: false,
      휴양: false,
      놀이공원: false,
      축구경기관람: false,
      쇼핑: false,
      호캉스: false,
      콘서트: false
    },
    selfPR: {
      운전가능: false,
      언어가능: false,
      여행숙련: false,
      여행초보: false,
      사진고수: false
    },
    timeOfDay: {
      점심동행: false,
      저녁동행: false,
      하루종일: false
    },
    tour: {
      오로라투어: false,
      팁투어: false,
      야경투어: false,
      와인투어: false,
      쿠킹클래스: false,
      근교투어: false,
      가이드투어: false
    }
  });

  const allFilterClickListener = (e, filterProp) => {
    const name = e.target.dataset.name;
    setPassingTags(prevState => ({
      ...prevState,
      [filterProp]: {
        ...prevState[filterProp],
        [name]: !prevState[filterProp][name]
      }
    }));
  };

  const filteredCollected = () => {
    const collectedTrueKeys = {
      region: [],
      gender: [],
      type: [],
      budget: [],
      activities: [],
      selfPR: [],
      timeOfDay: [],
      tour: []
    };
    const { region, gender, type, budget, activities, selfPR, timeOfDay, tour } = passingTags;
    for (let key in region) if (region[key]) collectedTrueKeys.region.push(key);
    for (let key in gender) if (gender[key]) collectedTrueKeys.gender.push(key);
    for (let key in type) if (type[key]) collectedTrueKeys.type.push(key);
    for (let key in budget) if (budget[key]) collectedTrueKeys.budget.push(key);
    for (let key in activities) if (activities[key]) collectedTrueKeys.activities.push(key);
    for (let key in selfPR) if (selfPR[key]) collectedTrueKeys.selfPR.push(key);
    for (let key in timeOfDay) if (timeOfDay[key]) collectedTrueKeys.timeOfDay.push(key);
    for (let key in tour) if (tour[key]) collectedTrueKeys.tour.push(key);
    return collectedTrueKeys;
  };

  const multiPropsFilter = (products, filters) => {
    const filterKeys = Object.keys(filters);
    return products.filter(product => {
      return filterKeys.every(key => {
        if (!filters[key].length) return true;
        if (Array.isArray(product[key])) {
          return product[key].some(keyEle => filters[key].includes(keyEle));
        }
        return filters[key].includes(product[key]);
      });
    });
  };

  const searchProducts = () => {
    const filteredProducts = multiPropsFilter(products, filteredCollected());
    return filteredProducts.filter(product => {
      return product.name
        .toLowerCase()
        .includes(passingTags.search.inputTerm.toLowerCase());
    });
  };

  const renderFilterButtons = (items, filterProp) => {
    return items.map(item => (
      <button
        key={item}
        data-name={item}
        onClick={e => allFilterClickListener(e, filterProp)}
        className={`boardTag ${passingTags[filterProp][item] ? 'active' : ''}`}
      >
        {item}
      </button>
    ));
  };

  const regions = ['서유럽', '동유럽', '북유럽', '남유럽', '오세아니아', '아프리카', '남아메리카', '북아메리카', '동남아시아', '동북아시아', '기타'];
  const genders = ['남자', '여자', '무관'];
  const types = ['즉흥', '계획'];
  const budgets = ['더치페이', '공금'];
  const activities = ['카페', '맛집', '술', '클럽', '산책', '박물관', '미술관', '엑티비티', '수영', '휴양', '놀이공원', '축구경기관람', '쇼핑', '호캉스', '콘서트'];
  const selfPR = ['운전가능', '언어가능', '여행숙련', '여행초보', '사진고수'];
  const timeOfDay = ['점심동행', '저녁동행', '하루종일'];
  const tours = ['오로라투어', '팁투어', '야경투어', '와인투어', '쿠킹클래스', '근교투어', '가이드투어'];

  return (
    <>
      <div className="searchContainer">
        <form>
          <div className="topSearch">
            <p>여행 메이트를 찾아보세요</p>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              className="topSearchBar"
              placeholder="검색어를 입력하세요"
              value={passingTags.search.inputTerm}
              onChange={e =>
                setPassingTags({
                  ...passingTags,
                  search: { inputTerm: e.target.value }
                })
              }
            />
            <button type="button" className="searchBtn">
              <img className="searchBtnIcon" src={searchBtn} alt="searchBtn" />
            </button>
          </div>
        </form>
      </div>
      <div className="filterContainer">
        <div className="filterGroup">
          <h3>지역</h3>
          {renderFilterButtons(regions, 'region')}
        </div>
        <div className="filterGroup">
          <h3>성별</h3>
          {renderFilterButtons(genders, 'gender')}
        </div>
        <div className="filterGroup">
          <h3>타입</h3>
          {renderFilterButtons(types, 'type')}
        </div>
        <div className="filterGroup">
          <h3>예산</h3>
          {renderFilterButtons(budgets, 'budget')}
        </div>
        <div className="filterGroup">
          <h3>같이 즐겨요</h3>
          {renderFilterButtons(activities, 'activities')}
        </div>
        <div className="filterGroup">
          <h3>자기 피알</h3>
          {renderFilterButtons(selfPR, 'selfPR')}
        </div>
        <div className="filterGroup">
          <h3>시간대</h3>
          {renderFilterButtons(timeOfDay, 'timeOfDay')}
        </div>
        <div className="filterGroup">
          <h3>투어</h3>
          {renderFilterButtons(tours, 'tour')}
        </div>
      </div>
    </>
  );
}

export default SideFilter;