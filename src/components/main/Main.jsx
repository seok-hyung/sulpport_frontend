import React from 'react';
import { styled } from 'styled-components';
import Carousel from '../carousel/Carousel';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { informationList } from './informationList';
import { useEffect } from 'react';

const Main = () => {
  const navitgate = useNavigate();
  return (
    <>
      <MainWrapper>
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
            <button>더보기</button>
          </div>
          <CardCarousel />
        </ChalyeSection>
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
  @media (max-width: 768px) {
    font-size: 16px;
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

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const infoList = informationList;
  const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const handleMouseDown = (e) => {
    setStartPosition(getPositionX(e));
    setIsDragging(true);
    requestAnimationFrame(animation);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const currentPosition = getPositionX(e);
      setCurrentTranslate(prevTranslate + currentPosition - startPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setPrevTranslate(currentTranslate);

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && currentIndex < infoList.length - 1) {
      goToNextSlide();
    }

    if (movedBy > 100 && currentIndex > 0) {
      goToPrevSlide();
    }
  };
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 이미지가 드래그 중일떄 이미지를 움직이는 함수
  const animation = () => {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
  };
  const setSliderPosition = () => {
    const imgContainer = document.querySelector('.img-container');
    imgContainer.style.transform = `translateX(${currentTranslate}px)`;
  };

  const getPositionX = (e) => {
    if (e.type.includes('mouse')) {
      // 마우스 이벤트
      return e.pageX;
    } else {
      // 터치 이벤트
      return e.touches[0].clientX;
    }
  };
  const goToNextSlide = () => {
    const increment = windowDimensions >= 768 ? 4 : 3;
    if (currentIndex + increment < infoList.length) {
      setCurrentIndex(currentIndex + increment);
    }
  };

  const goToPrevSlide = () => {
    const decrement = windowDimensions >= 768 ? 4 : 3;
    if (currentIndex - decrement >= 0) {
      setCurrentIndex(currentIndex - decrement);
    }
  };

  return (
    <>
      <CarouselContainerDiv>
        <div
          className="circle left"
          style={{ display: windowDimensions < 768 ? 'none' : 'block' }}
        >
          <img
            className="icon"
            onClick={goToPrevSlide}
            src="/assets/chevron-left.svg"
            alt="좌측 이동 화살표"
          />
        </div>

        {windowDimensions <= 768 ? (
          <div>
            <div
              className="img-container"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {infoList
                .slice(currentIndex, currentIndex + (windowDimensions >= 768 ? 4 : 3))
                .map((info, index) => (
                  <CarouselItem key={info.id} windowDimensions={windowDimensions}>
                    <CarouselImg
                      index={index}
                      key={info.id}
                      src={info.url}
                      alt="캐러셀 이미지"
                      windowDimensions={windowDimensions}
                    />
                  </CarouselItem>
                ))}
            </div>
          </div>
        ) : (
          <>
            <div className="img-container">
              {infoList
                .slice(currentIndex, currentIndex + (windowDimensions >= 768 ? 4 : 3))
                .map((info, index) => (
                  <CarouselItem key={info.id} windowDimensions={windowDimensions}>
                    <CarouselImg
                      index={index}
                      key={info.id}
                      src={info.url}
                      alt="캐러셀 이미지"
                      windowDimensions={windowDimensions}
                    />
                  </CarouselItem>
                ))}
            </div>
          </>
        )}
        <div
          className="circle right"
          style={{ display: windowDimensions < 768 ? 'none' : 'block' }}
        >
          <img
            className="icon"
            onClick={goToNextSlide}
            src="/assets/chevron-right.svg"
            alt="우측 이동 화살표"
          />
        </div>
      </CarouselContainerDiv>
    </>
  );
};

const CarouselContainerDiv = styled.div`
  position: relative;
  width: 1300px;
  margin: 60px auto 0 auto;
  @media (max-width: 768px) {
    margin-top: 40px;
    width: 100%;
  }
  .img-container {
    position: relative;
    width: 100%;
    height: 500px; // 또는 적절한 고정 높이 설정
    overflow: hidden;
    border-radius: 20px;
    display: flex;
  }
  .circle {
    position: absolute;
    z-index: 1000;
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
  }
  .circle:hover {
    background-color: #f0f0f3;
  }
  .circle:active {
    background-color: white;
  }
  .circle.left {
    left: -45px;
  }
  .circle.right {
    right: -25px;
  }
`;

const CarouselItem = styled.div`
  position: relative;
  min-width: ${(props) =>
    props.windowDimensions >= 768 ? 'calc(25% - 15px)' : 'calc(33.33% - 20px)'};
  height: 500px;
  @media (max-width: 768px) {
    height: 300px;
  }
  margin-right: 90px;
  transition: transform 0.5s ease-out;
  &:last-child {
    margin-right: 0;
  }
`;

const CarouselImg = styled.img`
  position: absolute;
  transform: ${(props) =>
    `translateX(-${props.index * (props.windowDimensions >= 768 ? 25 : 33.33)}%)`};
  transition: transform ease-out 0.5s;
  border-radius: 20px;
`;
