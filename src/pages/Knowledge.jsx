import React, { useState } from 'react';
import Header from '../components/common/header/Header';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Knowledge = () => {
  const navigate = useNavigate();
  const chalyeList = [
    { id: 1, url: '/assets/chalye1.svg' },
    { id: 2, url: '/assets/chalye2.svg' },
    { id: 3, url: '/assets/chalye3.svg' },
  ];
  const playList = [
    { id: 1, url: '/assets/play1.svg' },
    { id: 2, url: '/assets/play2.svg' },
    { id: 3, url: '/assets/play3.svg' },
    { id: 4, url: '/assets/play4.svg' },
  ];
  const foodList = [
    { id: 1, url: '/assets/food1.svg' },
    { id: 2, url: '/assets/food2.svg' },
    { id: 3, url: '/assets/food3.svg' },
  ];

  const [selectedOption, setSelectedOption] = useState('추천순');
  return (
    <Wrapper>
      <Header />
      <section className="bgSection">
        <img src="/assets/dictionary-icon.svg" alt="사전 이미지" />
        <img src="/assets/knowledge-logo-txt.svg" alt="" />
      </section>

      <div className="sortDiv">
        <div className="selectWrapper">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="추천순">추천순</option>
            <option value="인기도순">인기도순</option>
            <option value="제목순">제목순</option>
          </select>
        </div>
      </div>

      <section className="chalyeSection">
        <div className="txtDiv">
          <img src="/assets/logo-circle-orange.svg" alt="원 모양 로고" />
          <img src="/assets/chalye-txt.svg" alt="차례 텍스트" />
        </div>
        <ul className="chalyeUl">
          {chalyeList.map((item) => (
            <li key={item.id} onClick={() => navigate(`/chalye/${item.id}`)}>
              <img src={item.url} alt="차례 이미지" />
            </li>
          ))}
        </ul>
      </section>

      <section className="playSection">
        <div className="txtDiv">
          <img src="/assets/logo-circle-orange.svg" alt="원 모양 로고" />
          <img src="/assets/play-txt.svg" alt="차례 텍스트" />
        </div>
        <ul className="playUl">
          {playList.map((item) => (
            <li key={item.id} onClick={() => navigate(`/play/${item.id}`)}>
              <img src={item.url} alt="놀이 이미지" />
            </li>
          ))}
        </ul>
      </section>

      <section className="foodSection">
        <div className="txtDiv">
          <img src="/assets/logo-circle-orange.svg" alt="원 모양 로고" />
          <img src="/assets/food-txt.svg" alt="차례 텍스트" />
        </div>
        <ul className="foodUl">
          {foodList.map((item) => (
            <li key={item.id} onClick={() => navigate(`/food/${item.id}`)}>
              <img src={item.url} alt="음식 이미지" />
            </li>
          ))}
        </ul>
      </section>
    </Wrapper>
  );
};

export default Knowledge;

const Wrapper = styled.div`
  .bgSection {
    background: linear-gradient(to bottom, #eff2f2 20%, #d2e1e6 80%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img:first-of-type {
      width: 300px;
    }
    img:last-of-type {
      margin-bottom: 20px;
      width: 450px;
    }
  }
  .sortDiv {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 40px;
    .selectWrapper {
      position: relative;
      display: inline-block;
    }
    select {
      appearance: none; /* 기본 브라우저 스타일링을 제거합니다. */
      background: transparent;
      padding: 15px 30px;
      font-size: 24px;
      border: none;
      outline: none;
      border-radius: 10px;
      background-color: #19647e;
      color: white;
    }
    .sortDiv::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 15px;
      border-width: 8px;
      border-style: solid;
      background-color: white;
      color: white;
    }
  }
  section {
    .txtDiv {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
      gap: 10px;
      img:first-of-type {
        width: 60px;
      }
      img:last-of-type {
        width: 500px;
        margin-bottom: 30px;
      }
    }
    ul {
      width: 1100px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      li {
        width: calc(50% - 10px);
        cursor: pointer;
      }
    }
  }
  .chalyeSection {
    margin-bottom: 100px;
  }
  .playSection {
  }
`;
