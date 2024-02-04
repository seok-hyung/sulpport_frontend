import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const PresentQnaResult = () => {
  const location = useLocation();
  const name = location.state.name;
  const result = location.state.res.giftName;

  return (
    <Wrapper>
      <ul className="headerUl">
        <li>
          <img src="/assets/logo-circle-orange.svg" alt="원모양 로고" />
        </li>
      </ul>
      <div className="bg">
        <img src="/assets/present.svg" alt="선물 이미지" />
        <div className="txtDiv">
          <p className="sub">
            <strong>{name}</strong>님에게 딱 맞는 설날 선물은...
          </p>
          <p className="result">{result.replace(/\n/g, '')} </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default PresentQnaResult;

const Wrapper = styled.div`
  .headerUl {
    width: 1100px;
    margin: 40px auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    img {
      width: 50px;
    }
    @media (max-width: 768px) {
      width: 100%;
      padding: 0 30px;
    }
  }
  strong {
    font-weight: 700;
    color: #19647e;
  }
  .bg {
    background: linear-gradient(to bottom, #f4f8f7 20%, #dbf1f0 80%);
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 350px;
      height: 350px;
    }
    .sub {
      font-size: 36px;
      margin-top: 20px;
    }
    .result {
      font-size: 60px;
      color: #19647e;
      font-weight: 900;
      text-align: center;
      margin-top: 30px;
      margin-bottom: 40px;
    }
  }
`;
