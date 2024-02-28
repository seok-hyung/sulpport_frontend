import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
{
  /* <img src="/assets/chalye1-article.svg" alt="" /> */
}
const Sequence = () => {
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
              <strong>차례 지내는 순서</strong>
              <br />
              알려줘
            </h1>
          </div>
        </div>
      </header>
      <main>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>1. 강신: 조상님을 맞이함</h2>
          </div>
          <p>
            제주, 즉 장자 또는 장손이 앞에서 향을 피우고 차례를 돕는 집사자가 술을
            따라줍니다. 술은 쌀을 담아둔 그릇에 3번 나누어 부어요. 이후 제주가 2번
            절합니다.
          </p>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>2. 참신: 조상님께 인사를 드림</h2>
          </div>
          <p>
            차례에 참석한 모든 가족이 두 번 절을 합니다. 음양의 원리에 따라 남자는 두 번,
            여자는 네 번 절하기도 합니다.
          </p>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>3. 헌작: 조상님께 잔을 올림</h2>
          </div>
          <p>
            각 신위마다 잔을 올려야 하는데요, 이때 신위는 신주를 모셔 두는 자리를
            의미해요. 제주가 직접 술을 따르거나 집사자가 따라주기도 합니다.
          </p>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>4. 계반삽시: 조상님의 식사를 도움</h2>
          </div>
          <p>
            먼저 밥 뚜껑을 열어 숟가락을 꽂아요. 젓가락은 구이 요리나 편에 올려놓습니다.
            명절 중 설날에는 떡국에 숟가락을 올려둡니다.
          </p>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>5. 합문: 조상님이 식사하실 시간을 드림</h2>
          </div>
          <p>
            차례에 참석한 사람들은 밖으로 나가 문을 닫아야 해요. 밖으로 나가 문을 닫기
            힘든 경우에는 모두 무릎을 꿇고 잠시 기다립니다.
          </p>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>6. 철시복반: 음식 뚜껑을 덮음.</h2>
          </div>
          <p>숟가락을 거두고 음식의 뚜껑을 닫습니다.</p>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>7. 사신: 모셨던 조상님을 배웅함</h2>
          </div>
          <p>
            차례에 참석한 사람들은 모두 두 번 절합니다. 이때에도 남자는 두 번, 여자는 네
            번 절을 하기도 해요. 절을 한 후, 차례에 사용했던 지방과 축문을 불사릅니다.
          </p>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>8. 철상: 차례 음식과 도구를 정리함</h2>
          </div>
          <p>차례 음식과 차례 도구를 뒤에서부터 정리합니다.</p>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>9. 음복: 조상님께서 남기신 음식을 나눠 먹음</h2>
          </div>
          <p>
            차례에 참석한 사람들이 음복주와 음식을 함께 나눠먹으며 조상의 덕을 기립니다.
          </p>
        </div>
      </main>
    </Wrapper>
  );
};

export default Sequence;

const Wrapper = styled.div`
  width: 100vw;

  header {
    position: relative;
    width: 100%;
    background-image: url('/assets/long3.svg');
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
