import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Blessing = () => {
  const navigate = useNavigate();
  return (
    <BlessingWrapper>
      <header className="topImg">
        <img src="/assets/thumbUp-img.svg" alt="엄지척 이미지" />
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
            navigate('/qna');
          }}
        >
          맞춤형 덕담 찾아보기!
        </button>
      </main>
      <div>
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
      </div>
    </BlessingWrapper>
  );
};

export default Blessing;

const BlessingWrapper = styled.div`
  margin: 0 auto;
  .topImg {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom, white, #fee8e1);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    img:first-of-type {
      width: 200px;
    }
    img:last-of-type {
      width: 400px;
      padding: 30px 0;
    }
  }
  main {
    .buttons {
      display: flex;
      justify-content: center;
      gap: 70px;
      margin-top: 60px;
      button {
        border-radius: 15px;
        background-color: #eaeaea;
        padding: 10px 60px;
        display: flex;
        font-size: 24px;
      }
    }
    .txtDiv {
      text-align: center;
      margin: 70px auto;
      p {
        font-size: 36px;
        margin-bottom: 20px;
        line-height: 50px;
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
      font-size: 32px;
      display: block;
      padding: 10px 40px;
      border-radius: 10px;
      margin: 120px auto 60px auto;
    }
  }
  .imgs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-bottom: 100px;
    div {
      width: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    img {
      width: 60px;
      margin-bottom: 10px;
    }
  }
`;
