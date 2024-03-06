import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CardCarousel from '../carousel/CardCarousel';
import MainCarousel from '../carousel/MainCarousel';

const Main = () => {
  const navitgate = useNavigate();
  const moveToBlessing = () => {
    navitgate('/blessing');
  };
  const moveToMoneyPresent = () => {
    navitgate('/moneyPresent');
  };
  const moveToKnowledge = () => {
    navitgate('/knowledge');
  };
  return (
    <MainWrapper>
      <section className="logoNTxt">
        <img src="/assets/main-logo.webp" alt="메인 로고" />
        <img src="/assets/main-txt.svg" alt="메인 텍스트" />
      </section>
      <IntroduceSection>
        <ul className="menusUl">
          <li className="blessing" onClick={moveToBlessing}>
            <img src="/assets/logo-pocket.webp" alt="로고 이미지" />
            <p>덕담 가이드</p>
          </li>
          <li className="present" onClick={moveToMoneyPresent}>
            <img src="/assets/present.webp" alt="선물 이미지" />
            <p>용돈/선물 추천</p>
          </li>
          <li className="informtion" onClick={moveToKnowledge}>
            <img src="/assets/dictionary-icon.webp" alt="사전 이미지" />
            <p>설날 상식백과</p>
          </li>
        </ul>
      </IntroduceSection>
      <MainCarousel />
      <TestSection>
        <h2>
          <img src="/assets/logo-circle-orange.svg" alt="원모양 로고" />
          설날 뭐하지? 진단테스트
        </h2>

        <ul className="testUl">
          <li className="blessingTestLi">
            <p className="tags">#설날 연휴 #덕담멘트_고민될_때</p>
            <div className="content">
              <div className="left">
                <img src="/assets/blessing-txt-black.svg" alt="" className="title" />
                <button onClick={moveToBlessing}>덕담 만들기</button>
              </div>
              <div className="right">
                <img src="/assets/logo-pocket.svg" alt="" className="blessingImg" />
              </div>
            </div>
          </li>

          <li className="presentTestLi">
            <p className="tags">#설날 연휴 #뭐줄지_고민될_때</p>
            <div className="content">
              <div className="left">
                <img src="/assets/present-txt-black.svg" className="title" alt="" />
                <button onClick={moveToMoneyPresent}>추천 받기</button>
              </div>
              <div className="right">
                <img src="/assets/present-bird.svg" alt="" className="presentImg" />
              </div>
            </div>
          </li>
        </ul>
      </TestSection>
      <ChalyeSection>
        <div className="chlyeHeaderDiv">
          <div className="left">
            <div className="left2">
              <img src="/assets/logo-circle-orange.svg" alt="원모양 로고" />
              <h2>궁금증을 해결해드립니다.</h2>
            </div>
            <img
              className="knowledgeTxt"
              src="/assets/knowledge-txt.svg"
              alt="설날 상식 백과 텍스트"
            />
          </div>
          <button
            onClick={() => {
              navitgate('/knowledge');
            }}
          >
            더보기
          </button>
        </div>
        <CardCarousel />
      </ChalyeSection>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.main`
  width: 100vw;
  max-width: 1300px;
  margin: 0 auto;
  font-size: 24px;

  @media (max-width: 430px) {
    font-size: 16px;
    width: 100%;
  }

  .logoNTxt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img:first-of-type {
      width: 250px;
      margin-left: 30px;
      margin-bottom: 10px;
      @media (max-width: 430px) {
        width: 160px;
      }
    }
    img:last-of-type {
      width: 300px;
      @media (max-width: 430px) {
        width: 200px;
      }
    }
  }
`;

const IntroduceSection = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 40px auto;
  @media (max-width: 430px) {
    margin: 30px auto;
    width: 100%;
  }
  .menusUl {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 60px;
    width: 100%;
    max-width: 1300px;
    @media (max-width: 430px) {
      gap: 10px;
    }

    li {
      width: 25%;
      min-width: 260px;
      border-radius: 20px;
      cursor: pointer;

      @media (max-width: 430px) {
        width: 30%;
        min-width: 0;
      }
      img {
        width: 150px;
        height: 150px;
        @media (max-width: 430px) {
          width: 70px;
        }
      }
      p {
        margin: 20px auto;
        font-size: 30px;
        color: white;
        font-weight: 700;
        @media (max-width: 430px) {
          font-size: 14px;
          margin: 10px auto;
        }
      }
    }
    .blessing {
      background-color: var(--main-color);
    }
    .present {
      background-color: var(--sub-color);
    }
    .informtion {
      background-color: #37392e;
    }
  }
`;

const TestSection = styled.section`
  width: 100vw;
  max-width: 1300px;
  margin: 70px auto 0 auto;
  overflow: hidden;
  @media (max-width: 430px) {
    width: 100%;
    margin: 30px auto 0 auto;
  }
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    gap: 5px;
    margin-bottom: 30px;
    @media (max-width: 430px) {
      justify-content: flex-start;
      font-size: 20px;
      margin-bottom: 10px;
    }
    img {
      width: 40px;
      @media (max-width: 430px) {
        width: 25px;
      }
    }
  }
  .testUl {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .tags {
      font-size: 30px;
      display: block;
      color: #37392e;
      margin: 0 auto;
      @media (max-width: 430px) {
        font-size: 20px;
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          width: 200px;
          height: 200px;
          @media (max-width: 430px) {
            width: 100px;
            height: 100px;
          }
        }
        button {
          background-color: #19647e;
          color: white;
          font-size: 24px;
          border-radius: 10px;
          padding: 5px 20px;
          @media (max-width: 430px) {
            font-size: 14px;
            padding: 5px 15px;
          }
        }
      }
    }
    li {
      padding: 50px;
      border-radius: 20px;
      background: linear-gradient(to bottom, #eee 20%, rgba(25, 100, 126, 0.2) 80%);
      width: 100%;
      @media (max-width: 430px) {
        margin-bottom: 20px;
        width: 100vw;
        border-radius: 0;
        padding: 25px;
      }
    }
    .blessingTestLi {
      margin-bottom: 50px;
      @media (max-width: 430px) {
        margin-bottom: 20px;
      }
      .blessingImg {
        width: 380px;
        @media (max-width: 430px) {
          width: 150px;
        }
      }
    }
    .presentTestLi {
      .presentImg {
        width: 500px;
        @media (max-width: 430px) {
          width: 200px;
        }
      }
    }
  }
`;

const ChalyeSection = styled.section`
  width: 100vw;
  max-width: 1300px;
  margin: 120px auto 0 auto;

  @media (max-width: 430px) {
    width: 100%;
    padding: 0 20px;
    margin: 40px auto 0 auto;
  }
  .chlyeHeaderDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 40px;
    @media (max-width: 430px) {
      justify-content: flex-start;
      margin-bottom: 20px;
    }
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .left2 {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 20px;
        @media (max-width: 430px) {
          margin-bottom: 10px;
          gap: 6px;
        }
        img {
          width: 40px;
          @media (max-width: 430px) {
            width: 30px;
          }
        }
        h2 {
          font-size: 36px;
          @media (max-width: 430px) {
            font-size: 18px;
          }
        }
      }
    }
    button {
      background-color: #19647e;
      color: white;
      font-size: 28px;
      border-radius: 10px;
      padding: 12px 40px;
      height: fit-content;
      position: absolute;
      right: 0;
      @media (max-width: 430px) {
        padding: 5px 10px;
        font-size: 20px;
      }
    }
  }
`;
