import React from 'react';
import { styled } from 'styled-components';
import Carousel from '../carousel/Carousel';

const Main = () => {
  return (
    <>
      <MainWrapper>
        <IntroduceSection>
          <ul className="menusUl">
            <li className="blessing">
              <img src="/assets/logo-pocket.svg" alt="로고 이미지" />
              <p>덕담 가이드</p>
            </li>
            <li className="present">
              <img src="/assets/present.svg" alt="선물 이미지" />
              <p>용돈/선물 추천</p>
            </li>
            <li className="informtion">
              <img src="/assets/dictionary-icon.svg" alt="사전 이미지" />
              <p>설날 상식백과</p>
            </li>
          </ul>
        </IntroduceSection>
        <Carousel />
        <TestSection>
          <h2>
            <img src="/assets/logo-circle-orange.svg" alt="원모양 로고" />
            설날 뭐하지? 진단테스트
          </h2>

          <ul className="testUl">
            <li className="blessingTestLi">
              <div className="left">
                <p className="tags">#설날 연휴 #덕담멘트_고민될_때</p>
                <img src="/assets/blessing-txt-black.svg" alt="" />
                <button>덕담 만들기</button>
              </div>
              <div className="right">
                <img src="/assets/logo-pocket.svg" alt="" />
              </div>
            </li>
            <li className="presentTestLi">
              <div className="left">
                <p className="tags">#설날 연휴 #뭐줄지_고민될_때</p>
                <img src="/assets/present-txt-black.svg" alt="" />
                <button>추천 받기</button>
              </div>
              <div className="right">
                <img src="/assets/present-bird.svg" alt="" />
              </div>
            </li>
          </ul>
        </TestSection>
      </MainWrapper>
    </>
  );
};

export default Main;

const MainWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 24px;
`;

const IntroduceSection = styled.section`
  margin: 70px auto;
  .menusUl {
    width: 1300px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 100px;
    img {
      width: calc(650px / 3);
    }
    li {
      border-radius: 20px;
      padding: 40px;
      p {
        margin-top: 20px;
        font-size: 36px;
        color: white;
        font-weight: 700;
      }
    }
    .blessing {
      background-color: var(--main-color);
    }
    .present {
      background-color: #28afb0;
    }
    .informtion {
      background-color: #37392e;
    }
  }
`;

const TestSection = styled.section`
  margin-top: 70px;
  width: 1300px;
  margin: 120px auto 0 auto;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    img {
      width: 40px;
    }
  }
  .testUl {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    .blessingTestLi {
      display: flex;
      margin-bottom: 50px;
      width: 100%;
      padding: 50px;
      border-radius: 20px;
      background: linear-gradient(
        to bottom,
        rgba(232, 195, 161, 0.2) 20%,
        rgba(25, 100, 126, 0.2) 80%
      );
      .left {
        .tags {
          font-size: 30px;
          color: #37392e;
        }
        img {
          width: 200px;
          margin-top: 20px;
          height: fit-content;
        }
        button {
          background-color: #19647e;
          color: white;
          font-size: 24px;
          display: block;
          margin-top: 180px;
          border-radius: 10px;
          padding: 10px 20px;
        }
      }
      .right {
        img {
          width: 450px;
          margin-left: 250px;
          /* position: relative;
          right: 0;
          top: 0;

          &:after {
            content: '';
            position: absolute;
            top: 0;
            right: 100px;
            width: 100%;
            height: 100%;
            background-image: url('/assets/logo-pocket.svg');
            filter: blur(10px);
            opacity: 0.6;
            z-index: -1;
          } */
        }
      }
    }
    .presentTestLi {
      display: flex;
      width: 100%;
      padding: 50px;
      border-radius: 20px;
      background: linear-gradient(
        to bottom,
        rgba(232, 195, 161, 0.2) 20%,
        rgba(25, 100, 126, 0.2) 80%
      );
      .left {
        .tags {
          font-size: 30px;
          color: #37392e;
        }
        img {
          width: 300px;
          margin-top: 20px;
          height: fit-content;
        }
        button {
          background-color: #19647e;
          color: white;
          font-size: 24px;
          display: block;
          margin-top: 180px;
          border-radius: 10px;
          padding: 10px 20px;
        }
      }
      .right {
        img {
          width: 600px;
          margin-left: 150px;

          /* position: relative;

          &:after {
            content: '';
            position: absolute;
            top: 0;
            right: -40px;
            width: 100%;
            height: 100%;
            background-image: url('/assets/present-bird.svg');
            filter: blur(10px);
            opacity: 0.6;
            z-index: -1;
          } */
        }
      }
    }
  }
`;
