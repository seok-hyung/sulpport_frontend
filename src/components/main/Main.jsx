import React, { useRef } from 'react';
import { styled } from 'styled-components';
import Carousel from '../carousel/Carousel';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { informationList } from './informationList';

const Main = () => {
  const navitgate = useNavigate();
  return (
    <MainWrapper>
      <section className="logoNTxt">
        <img src="/assets/main-logo.svg" alt="메인 로고" />
        <img src="/assets/main-txt.svg" alt="메인 텍스트" />
      </section>
      <IntroduceSection>
        <ul className="menusUl">
          <li
            className="blessing"
            onClick={() => {
              navitgate('/blessing');
            }}
          >
            <img src="/assets/logo-pocket.svg" alt="로고 이미지" />
            <p>덕담 가이드</p>
          </li>
          <li
            className="present"
            onClick={() => {
              navitgate('/moneyPresent');
            }}
          >
            <img src="/assets/present.svg" alt="선물 이미지" />
            <p>용돈/선물 추천</p>
          </li>
          <li
            className="informtion"
            onClick={() => {
              navitgate('/knowledge');
            }}
          >
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
              <button
                onClick={() => {
                  navitgate('/blessing');
                }}
              >
                덕담 만들기
              </button>
            </div>
            <div className="right">
              <img src="/assets/logo-pocket.svg" alt="" />
            </div>
          </li>
          <li className="presentTestLi">
            <div className="left">
              <p className="tags">#설날 연휴 #뭐줄지_고민될_때</p>
              <img src="/assets/present-txt-black.svg" alt="" />
              <button
                onClick={() => {
                  navitgate('/moneyPresent');
                }}
              >
                추천 받기
              </button>
            </div>
            <div className="right">
              <img src="/assets/present-bird.svg" alt="" />
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
        <Carousel2 />
      </ChalyeSection>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  .logoNTxt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img:first-of-type {
      width: 450px;
      margin-left: 70px;
      @media (max-width: 768px) {
        width: 300px;
      }
    }
    img:last-of-type {
      width: 400px;
    }
    @media (max-width: 768px) {
      img:first-of-type {
        width: 200px;
        margin-left: 50px;
      }
      img:last-of-type {
        width: 300px;
      }
    }
  }
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
    @media (max-width: 768px) {
      width: 690px;
    }

    @media (max-width: 768px) {
      img {
        width: 90px;
      }
      gap: 50px;
    }
    li {
      border-radius: 20px;
      padding: 15px 40px 25px 40px;
      cursor: pointer;
      @media (max-width: 768px) {
        width: 180px;
        height: 196px;
        padding: 10px;
      }
      img {
        width: 200px;
        @media (max-width: 768px) {
          width: 120px;
          margin-top: -30px;
        }
      }
      p {
        margin-top: 20px;
        font-size: 36px;
        color: white;
        font-weight: 700;
        @media (max-width: 768px) {
          margin-top: 0px;
          font-size: 22px;
        }
      }
    }
    /* li:nth-child(2) {
      width: 10px;
    } */
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
  margin-top: 70px;
  width: 1300px;
  margin: 120px auto 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    gap: 10px;
    @media (max-width: 768px) {
      justify-content: flex-start;
    }
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
      background: linear-gradient(to bottom, #eee 20%, rgba(25, 100, 126, 0.2) 80%);
      @media (max-width: 768px) {
        width: 100vw;
      }
      .left {
        margin-right: 250px;
        @media (max-width: 768px) {
          margin-right: -75px;
        }
        .tags {
          font-size: 30px;
          color: #37392e;
          @media (max-width: 768px) {
            min-width: 320px;
            font-size: 24px;
          }
        }
        img {
          width: 200px;
          margin-top: 20px;
          height: fit-content;
          @media (max-width: 768px) {
            width: 180px;
          }
        }
        button {
          background-color: #19647e;
          color: white;
          font-size: 24px;
          display: block;
          margin-top: 220px;
          border-radius: 10px;
          padding: 10px 20px;
        }
      }
      .right {
        img {
          width: 450px;
          @media (max-width: 768px) {
            width: 350px;
          }
        }
      }
    }
    .presentTestLi {
      display: flex;
      width: 100%;
      padding: 50px;
      border-radius: 20px;
      background: linear-gradient(to bottom, #eee 20%, rgba(25, 100, 126, 0.2) 80%);
      @media (max-width: 768px) {
        width: 100vw;
      }
      .left {
        margin-right: 150px;
        @media (max-width: 768px) {
          margin-right: -200px;
        }
        .tags {
          font-size: 30px;
          color: #37392e;
          @media (max-width: 768px) {
            min-width: 400px;
          }
        }
        img {
          width: 300px;
          margin-top: 20px;
          height: fit-content;
          @media (max-width: 768px) {
            width: 250px;
          }
        }
        button {
          background-color: #19647e;
          color: white;
          font-size: 24px;
          display: block;
          margin-top: 190px;
          border-radius: 10px;
          padding: 10px 20px;
        }
      }
      .right {
        img {
          width: 600px;
          @media (max-width: 768px) {
            width: 400px;
          }
        }
      }
    }
  }
`;

const ChalyeSection = styled.section`
  width: 1300px;
  margin: 120px auto 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    margin: 60px auto 0 auto;
  }
  .chlyeHeaderDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 40px;
    @media (max-width: 768px) {
      justify-content: flex-start;
    }
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;

      .left2 {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        img {
          width: 40px;
        }
        h2 {
          font-size: 36px;
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
    }
  }
`;

const Carousel2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startDrag, setStartDrag] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const infoList = informationList;
  const carouselRef = useRef();

  const handleScroll = (event) => {
    const index = Math.round(
      event.target.scrollLeft / (event.target.scrollWidth / infoList.length),
    );
    setCurrentIndex(index);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartDrag(e.clientX);
    setScrollStart(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const scrollLeft = scrollStart - (e.clientX - startDrag);
    carouselRef.current.scrollLeft = scrollLeft;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handlePrevClick = () => {
    if (currentIndex >= 0) {
      setCurrentIndex(currentIndex - 4);
      carouselRef.current.scrollLeft =
        (carouselRef.current.scrollWidth / infoList.length) * (currentIndex - 4);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < infoList.length - 4) {
      setCurrentIndex(currentIndex + 4);
      carouselRef.current.scrollLeft =
        (carouselRef.current.scrollWidth / infoList.length) * (currentIndex + 4);
    }
  };

  return (
    <CarouselWrapper>
      <CarouselContainer
        ref={carouselRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="circle left">
          <img
            className="icon"
            onClick={handlePrevClick}
            src="/assets/chevron-left.svg"
            alt="좌측 이동 화살표"
          />
        </div>
        {infoList.map((item) => (
          <CarouselItem
            key={item.id}
            style={{ backgroundImage: `url(${item.url})` }}
          ></CarouselItem>
        ))}

        <div className="circle right">
          <img
            className="icon"
            onClick={handleNextClick}
            src="/assets/chevron-right.svg"
            alt="우측 이동 화살표"
          />
        </div>
      </CarouselContainer>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  position: relative;
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100%;
  height: 420px;

  @media (max-width: 768px) {
    height: 250px;
  }
  border-radius: 20px;
  gap: 20px;

  .circle {
    position: absolute;
    z-index: 100;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #e9e9ec;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    .icon {
      max-width: 80px;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  .circle:hover {
    background-color: #f0f0f3;
  }
  .circle:active {
    background-color: white;
  }
  .circle.left {
    left: -47px;
  }
  .circle.right {
    right: -49px;
  }
`;

const CarouselItem = styled.div`
  flex: 0 0 calc(25% - 10px);
  @media (max-width: 768px) {
    flex: 0 0 calc(33% - 10px);
  }
  scroll-snap-align: start;
  scroll-snap-stop: always;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  p {
    color: white;
    font-size: 24px;
    text-align: center;
  }
`;
