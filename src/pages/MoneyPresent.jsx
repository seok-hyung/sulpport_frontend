import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const MoneyPresent = () => {
  const navigate = useNavigate();
  return (
    <PresentWrapper>
      <header className="topImg">
        <img src="/assets/present-bird.svg" alt="포켓 든 드래곤" />
        <img src="/assets/presentMoney-txt.svg" alt="덕담 헤더 텍스트" />
      </header>
      <main>
        <div className="classifyBtns">
          <button>#관계별</button>
          <button>#연령대별</button>
          <button>#상황별</button>
        </div>
        <div className="txtDiv">
          <p>
            부모님, 꼬마 조카, 선생님..
            <br />
            <strong>어떤 선물을 줘야 적합할지,</strong> <br />
            매년 달라지는 금액에 용돈은 얼마가 적당한지 모르겠어!
          </p>

          <p>
            걱정마시라, <span>고민하는 당신을 도와줄 설포트예요!</span>
          </p>
        </div>
        <button
          className="moneyBtn"
          onClick={() => {
            navigate('/moneyQna');
          }}
        >
          용돈 금액 추천받기
        </button>
        <button
          className="presentBtn"
          onClick={() => {
            navigate('/presentQna');
          }}
        >
          선물 추천받기
        </button>
      </main>
      <div>
        <div className="imgs">
          <div>
            <img src="/assets/time-icon.svg" alt="시계 이미지" />
            <p>약 30초 소요</p>
          </div>
          <div>
            <img src="/assets/pencil-icon.svg" alt="연필 이미지" />
            <p>무제한 생성</p>
          </div>
        </div>
      </div>
    </PresentWrapper>
  );
};

export default MoneyPresent;

const PresentWrapper = styled.div`
  margin: 0 auto;
  width: 100vw;
  @media (max-width: 430px) {
    width: 100%;
  }
  .topImg {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom, white 5%, rgba(25, 100, 126, 0.2) 95%);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    img:first-of-type {
      width: 180px;
      margin-bottom: 20px;
      @media (max-width: 430px) {
        width: 130px;
      }
    }
    img:last-of-type {
      width: 250px;
      margin: 20px auto;
      @media (max-width: 430px) {
        width: 200px;
        margin: 15px auto;
      }
    }
  }
  main {
    .classifyBtns {
      display: flex;
      justify-content: center;
      gap: 50px;
      margin-top: 40px;
      button {
        border-radius: 15px;
        background-color: #eaeaea;
        padding: 10px 50px;
        display: flex;
        font-size: 20px;
        @media (max-width: 430px) {
          font-size: 15px;
          padding: 5px 20px;
        }
      }
    }
    .txtDiv {
      text-align: center;
      margin: 40px auto;
      @media (max-width: 430px) {
        width: 100%;
        margin: 20px auto;
      }
      p {
        font-size: 24px;
        margin-bottom: 20px;
        line-height: 32px;
      }
      strong {
        font-weight: 700;
      }
      strong:last-of-type {
        color: var(--sub-color);
      }
    }
    .moneyBtn {
      background-color: var(--sub-color);
      color: white;
      font-weight: 700;
      font-size: 24px;
      display: block;
      padding: 10px 40px;
      border-radius: 10px;
      margin: 50px auto 40px auto;
      @media (max-width: 430px) {
        font-size: 18px;
        margin: 30px auto 20px auto;
        padding: 5px 20px;
      }
    }
    .presentBtn {
      background-color: var(--sub-color);
      color: white;
      font-weight: 700;
      font-size: 24px;
      display: block;
      padding: 10px 40px;
      border-radius: 10px;
      margin: 0px auto 50px auto;
      @media (max-width: 430px) {
        font-size: 18px;
        margin: 0 auto 20px auto;
        padding: 5px 20px;
      }
    }
  }
  .imgs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 100vw;
    max-width: 1300px;
    div {
      width: 3.125rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      @media (max-width: 430px) {
        width: 3rem;
      }
    }
    img {
      width: 40px;
      margin-bottom: 10px;
      @media (max-width: 430px) {
        width: 30px;
      }
    }
  }
`;
