import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Definition = () => {
  const navigate = useNavigate();
  const goToBack = () => {
    navigate(-1);
  };
  return (
    <Wrapper>
      <header>
        <div className="backDiv">
          <img src="/assets/back-icon.svg" onClick={goToBack} alt="" />
        </div>
        <div className="headerContent">
          <div className="tag">#전통차례</div>
          <div>
            <div className="timeDiv">
              <img src="/assets/time-icon.svg" alt="" />
              <p>약 2분</p>
            </div>
            <h1>
              <strong>차례가</strong> 뭐야?
            </h1>
          </div>
        </div>
      </header>
      <main>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>차례가 뭐야?</h2>
          </div>
          <p>
            차례는 설이나 추석과 같은 명절에 조상에게 올리는 제례입니다. 조상을 숭배하고
            은혜에 보답하려는 의미가 담겨 있어요.
          </p>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>차례는 누가, 언제 지내는 거지?</h2>
          </div>
          <p>
            종법의 원리에 따라 <span>장자와 장손</span>이 차례를 지내는 제주가 돼요. 차차,
            차손일 경우 그 집안의 가장이 제주입니다. 과거에는 새벽이나 아침 일찍, 매달
            초하루와 보름, 그리고 명절에 차례를 지냈지만, 현재는{' '}
            <span>설, 추석 등의 명절</span>에만 주로 차례를 지내고 있어요.
          </p>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>차례 지낼 때, 무엇을 준비해야 할까?</h2>
          </div>
          <p>
            원칙대로 4대 조상을 동시에 지낼 경우 <span>교의와 제상 4벌</span>이 필요해요.
            그러나 준비가 어렵다면, 윗대 조상부터 차례로 여러번 지내거나 하나의 큰 상에
            구분하여 차례상을 준비할 수 있어요.
          </p>
        </div>
      </main>
    </Wrapper>
  );
};

export default Definition;

const Wrapper = styled.div`
  width: 100vw;
  max-width: 1300px;
  margin: 0 auto;
  header {
    position: relative;
    width: 100%;
    height: 500px;
    background-image: url('/assets/long1.svg');
    background-repeat: no-repeat;
    background-size: cover;
    .backDiv {
      width: 100%;
      height: 100px;
      background-color: rgba(255, 255, 255, 0.6);
      img {
        width: 40px;
        height: 40px;
        margin-top: 50px;
        margin-left: 30px;
        cursor: pointer;
      }
    }
    .headerContent {
      padding: 40px 80px;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .tag {
        width: 150px;
        background-color: rgba(255, 255, 255, 0.8);
        font-size: 26px;
        padding: 8px 16px;
        border-radius: 20px;
      }
      img {
        width: 40px;
      }
      .timeDiv {
        display: flex;
        align-items: center;
        color: white;
        font-size: 24px;
        margin-bottom: 10px;
      }
      h1 {
        font-weight: 900;
        color: white;
        strong {
          color: var(--main-color);
        }
        font-size: 40px;
      }
    }
  }
  main {
    .mainContentDiv {
      padding: 40px 80px;
      p {
        font-size: 20px;
      }
      span {
        font-weight: 900;
      }
    }
    .subTitleDiv {
      display: flex;
      align-items: center;
      font-size: 30px;
      margin-bottom: 15px;
    }
    h2 {
      display: inline-block;
    }
    img {
      width: 40px;
    }
  }
`;
