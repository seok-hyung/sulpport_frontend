import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FoodPosition = () => {
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
              <strong>
                제사상 음식
                <br /> 배치
              </strong>
              를 해보자!
            </h1>
          </div>
        </div>
      </header>
      <main>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>1열</h2>
          </div>
          <p>
            설위패에서 가장 가까운 쪽을 기준으로 1열에는 주식인 밥과 국을 놓아요. 이
            음식은 우리의 주식이며 가장 영양가가 높은 음식입니다.
          </p>
          <ul>
            <li>
              <span>반서갱동:</span> 밥은 서쪽, 국은 동쪽에 배치 음식은 우리의 주식이며
              가장 영양가가 높은 음식입니다.
            </li>
            <li>
              <span>시접거중:</span> 수저를 담은 그릇은 신위의 앞 쪽 중앙에 배치
            </li>
          </ul>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>2열</h2>
          </div>
          <p>
            2열에는 찬 중에서 단백질 위주의 찬을 두어요. 제사상의 주 요리인 구이와 전 등이
            올라갑니다.
            <ul>
              <li>
                <span>어동육서:</span> 어류는 동쪽, 육류는 서쪽에 배치
              </li>
              <li>
                <span>두동미서:</span> 생선의 머리는 동쪽, 꼬리는 서쪽에 배치 올라갑니다.
              </li>
            </ul>
          </p>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>3열</h2>
          </div>
          <p>
            3열에는 탕 위주의 음식을 놓습니다. 부 요리인 생선과 두부, 고기탕 등 탕류가
            올라갑니다.
            <ul>
              <li>
                <span>면서병동:</span> 떡은 동쪽, 국수는 서쪽에 배치
              </li>
            </ul>
          </p>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>4열</h2>
          </div>
          <p>
            4열에는 채식 위주의 찬을 둡니다. 포, 삼색 나물, 간장, 식혜 등이 올라갑니다.
            <ul>
              <li>
                <span>좌포육혜:</span> 포는 왼쪽, 식혜는 오른쪽에 배치
              </li>
              <li>
                <span>생동숙서:</span> 날 것은 동쪽, 익힌 것은 서쪽에 배치
              </li>
            </ul>
          </p>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>5열</h2>
          </div>
          <p>
            5열에는 과일, 과자 등 후식을 놓아요.
            <ul>
              <li>
                <span>조율이시:</span> 왼쪽부터 대추, 밤, 배, 곶감순서로 배치{' '}
              </li>
              <li>
                <span>홍동백서:</span> 붉은 과일은 동쪽, 흰 과일은 서쪽에 배치
              </li>
            </ul>
          </p>
        </div>
        <div className="mainContentDiv">
          <div className="subTitleDiv">
            <img src="/assets/logo-circle-orange.svg" alt="" />
            <h2>제사상에 올리지 않는 음식</h2>
          </div>
          <ul>
            <li>
              <span>복숭아, 마늘, 고춧가루, 팥</span>은 올리면 안 돼요! <br />
              귀신을 쫒는 의미를 가지고 있는 식재료는 피해주세요.
            </li>
            <li>
              <span>잡곡밥 대신</span> 귀하게 여겨졌던 쌀밥이 올라가요. <br />
              잡곡 중 팥은 들어가지 않도록 주의하세요!
            </li>
            <li>
              <span>잉어, 붕어, 장어, 메기</span>는 올리면 안 돼요! <br />
              비늘이 없거나, 비늘이 두꺼운 생선은 올리지 않아요.
            </li>
            <li>
              <span>삼치, 갈치, 꽁치</span>는 피해주세요. <br />
              어리석을 ‘치’, 부끄러울 ‘치’와 같은 음이 포함된 식재료는 올리면 안 돼요.
            </li>
          </ul>
        </div>
      </main>
    </Wrapper>
  );
};

export default FoodPosition;

const Wrapper = styled.div`
  width: 100vw;
  max-width: 1300px;
  margin: 0 auto;
  header {
    position: relative;
    width: 100%;
    height: 500px;
    background-image: url('/assets/long2.svg');
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
        line-height: 50px;
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
      font-size: 20px;
      line-height: 24px;
      span {
        font-weight: 900;
      }
      ul {
        margin-left: 20px;
      }
      li {
        list-style: disc;
      }
    }
    .mainContentDiv:last-of-type {
      li {
        list-style: decimal;
        margin-bottom: 20px;
      }
      li:last-of-type {
        margin-bottom: 0;
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
