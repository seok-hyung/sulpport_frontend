import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Blessing = () => {
  const navigate = useNavigate();
  return (
    <BlessingWrapper>
      <header className="topImg">
        <img src="/assets/logo-pocket.svg" alt="포켓 든 드래곤" />
        <img src="/assets/blessingTxtOrange.svg" alt="덕담 헤더 텍스트" />
      </header>
      <main>
        <div className="buttons">
          <button>#관계별</button>
          <button>#연령대별</button>
          <button>#상황별</button>
        </div>
        <div className="txtDiv">
          <p>
            설날에 덕담을 주고 싶은데.. <br />
            &quot;새해 복 많이 받으세요&quot; 밖에 생각나지 않는다.
          </p>
          <p>
            <strong>똑같은 멘트만 반복</strong>하는 것도 질렸어😞 <br />
            식상한 덕담, <strong>더 재미있고 감동이 크게</strong>
          </p>
        </div>
        <button
          className="blessingBtn"
          onClick={() => {
            navigate('/blessingQna');
          }}
        >
          맞춤형 덕담 찾아보기!
        </button>
      </main>
      <div className="imgs">
        <div>
          <img src="/assets/time-icon.svg" alt="시계 이미지" />
          <p>약 1분 소요</p>
        </div>
        <div>
          <img src="/assets/pencil-icon.svg" alt="연필 이미지" />
          <p>무제한 생성</p>
        </div>
      </div>
    </BlessingWrapper>
  );
};

export default Blessing;

const BlessingWrapper = styled.div`
  margin: 0 auto;
  width: 100vw;
  max-width: 1300px;
  @media (max-width: 430px) {
    width: 100%;
  }
  .topImg {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom, white, #fee8e1);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    img:first-of-type {
      width: 180px;
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
    width: 100vw;
    max-width: 1300px;
    .buttons {
      display: flex;
      justify-content: center;
      gap: 50px;
      margin-top: 40px;
      @media (max-width: 430px) {
        gap: 10px;
        margin-top: 20px;
      }
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
        @media (max-width: 430px) {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 20px;
        }
      }
      strong {
        font-weight: 700;
      }
      strong:last-of-type {
        color: #fc8a65;
      }
    }
    .blessingBtn {
      background-color: #fc6736;
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
