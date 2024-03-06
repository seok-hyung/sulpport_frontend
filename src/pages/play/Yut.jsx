import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Yut = () => {
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
          <div className="tag">#전통놀이</div>
          <div>
            <div className="timeDiv">
              <img src="/assets/time-icon.svg" alt="" />
              <p>약 1분</p>
            </div>
            <h1>
              <strong>윷놀이</strong>에 대하여
            </h1>
          </div>
        </div>
      </header>
      <main>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>필요한 도구 </h2>
          </div>
          <p>1. 윷판: 윷놀이를 하기 위한 판으로, 여러 칸이 그려져 있어요.</p>
          <p>
            2.윷: 나무나 플라스틱으로 만들어진 작은 막대입니다. 한쪽 면에 표시가
            되어있어요.
          </p>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>참여 인원</h2>
          </div>
          <p>4명</p>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>기본 방법</h2>
          </div>
          <p>
            각 신위마다 잔을 올려야 하는데요, 이때 신위는 신주를 모셔 두는 자리를
            의미해요. 제주가 직접 술을 따르거나 집사자가 따라주기도 합니다.
          </p>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>기본 방법</h2>
          </div>
          <ul>
            <li>
              <span>시작</span>
              <br />각 참여자는 윷판의 시작 위치에서 출발해요.
            </li>
            <li>
              <span>윷 던지기</span> <br />
              차례가 오면 윷을 땅에 던져요. 윷의 떨어진 면에 따라서 앞면과 뒷면 중 하나가
              선택됩니다.
            </li>
            <li>
              <span>이동</span>
              <br />
              도가 나오면 한 번 더 던질 수 있어요. 각 플레이어는 던진 윷에 따라 말을
              이동시킵니다. 각 말은 윷판을 따라 이동합니다.
            </li>
            <li>
              <span>도, 개, 걸, 윷, 모</span>
              <br />
              도: 한 칸 이동 <br />
              개: 두 칸 이동
              <br />
              걸: 세 칸 이동
              <br />
              윷: 네 칸 이동
              <br />
              모: 다섯 칸 이동
              <br />
              윷이나 모가 나오면 한 번 더 던질 수 있어요.
            </li>
            <li>
              <span>승리</span>
              <br />
              말이 윷판을 한 바퀴 돌아서 시작 위치로 돌아오면 도착합니다. 먼저 도착점에
              도착한 참여자가 승리해요.
            </li>
          </ul>
        </div>
      </main>
    </Wrapper>
  );
};

export default Yut;

const Wrapper = styled.div`
  width: 100vw;
  header {
    position: relative;
    width: 100%;
    background-image: url('/assets/play1-long.svg');
    background-repeat: no-repeat;
    background-size: cover;
    .backDiv {
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
      padding: 30px 60px;
      display: flex;
      flex-direction: column;
      .tag {
        width: 150px;
        background-color: rgba(255, 255, 255, 0.8);
        font-size: 26px;
        padding: 8px 16px;
        border-radius: 20px;
        margin-bottom: 150px;
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
      padding: 30px 60px;
      font-size: 20px;
      line-height: 24px;
      p {
        font-size: 20px;
      }
      span {
        font-weight: 900;
      }
      ul {
        margin-left: 20px;
      }
      li {
        list-style: decimal;
        margin-bottom: 15px;
        &:last-of-type {
          margin-bottom: 0;
        }
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
