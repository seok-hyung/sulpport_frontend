import React from 'react';
import { styled } from 'styled-components';
import Carousel from '../carousel/Carousel';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { informationList } from './informationList';

const Main = () => {
  const navitgate = useNavigate();
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
              <img src="/assets/information-txt.svg" alt="설날 상식 백과 텍스트" />
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
      padding: 15px 40px 25px 40px;
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
    gap: 10px;
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
        }
      }
    }
    .presentTestLi {
      display: flex;
      width: 100%;
      padding: 50px;
      border-radius: 20px;
      background: linear-gradient(to bottom, #eee 20%, rgba(25, 100, 126, 0.2) 80%);
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
          margin-top: 190px;
          border-radius: 10px;
          padding: 10px 20px;
          margin-bottom: 20px;
        }
      }
      .right {
        img {
          width: 600px;
          margin-left: 150px;
        }
      }
    }
  }
`;

const ChalyeSection = styled.section`
  width: 1300px;
  margin: 120px auto 0 auto;
  box-shadow: inset 0 0 0 3px blue;
  .chlyeHeaderDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 500px;
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
    }

    img:last-of-type {
      width: 200px;
    }
    button {
      background-color: #19647e;
      color: white;
      font-size: 24px;
      display: block;
      border-radius: 10px;
      padding: 10px 30px;
      height: fit-content;
    }
  }
`;

// const CardCarousel = styled.div`
//   display: flex;
//   overflow-x: auto;
//   scroll-snap-type: x mandatory;
//   position: relative;
//   scrollbar-width: none; /* Firefox */
//   -ms-overflow-style: none; /* IE and Edge */
//   &::-webkit-scrollbar {
//     display: none; /* Chrome, Safari and Opera */
//   }
// `;

// const CardList = styled.ul`
//   display: flex;
//   padding: 50px;
//   box-shadow: inset 0 0 0 3px orange;
//   gap: 40px;
//   li {
//     padding: 30px 50px;
//     background-size: cover;
//     background-repeat: no-repeat;
//   }
//   li:nth-child(1) {
//     background-image: url('/assets/chalye1-shadow.svg');
//   }
//   li:nth-child(2) {
//     background-image: url('/assets/chalye2-shadow.svg');
//   }
//   li:nth-child(3) {
//     background-image: url('/assets/chalye3-shadow.svg');
//   }
// `;

// const CardItem = styled.li`
//   flex: 0 0 auto;
//   width: 500px;
//   scroll-snap-align: start;
//   height: 600px;
//   padding: 30px 50px;
//   background-size: cover;
//   background-repeat: no-repeat;
//   .cardTags {
//     font-size: 20px;
//     color: black;
//     margin-bottom: 20px;
//   }
//   .cardTxt {
//     font-size: 28px;
//     color: black;
//     font-weight: 900;
//   }
// `;

// const ScrollButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   background-color: rgba(0, 0, 0, 0.5);
//   color: white;
//   border: none;
//   cursor: pointer;
//   z-index: 10;
//   padding: 10px 20px;
//   font-size: 18px;
//   border-radius: 5px;

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.7);
//   }
// `;

// const PrevButton = styled(ScrollButton)`
//   left: 10px;
//   visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
// `;

// const NextButton = styled(ScrollButton)`
//   right: 10px;
//   visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
// `;

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const infoList = informationList;

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % infoList.length;
    setCurrentIndex(nextIndex);
  };
  const goToPrevSlide = () => {
    const prevIndex = (currentIndex - 1 + infoList.length) % infoList.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <>
      <CarouselContainerDiv>
        <div className="circle left">
          <img
            className="icon"
            onClick={goToPrevSlide}
            src="/assets/chevron-left.svg"
            alt="좌측 이동 화살표"
          />
        </div>
        <div className="img-container">
          {infoList.map((info, index) => (
            <>
              <CarouselImg
                index={index}
                currentIndex={currentIndex}
                key={info.id}
                src={info.url}
                alt="캐러셀 이미지"
              />
              <Tag>{info.tags}</Tag>
              <Text>{info.txt}</Text>
            </>
          ))}
        </div>
        <div className="circle right">
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
  width: 1000px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  .circle {
    position: absolute;
    z-index: 10;
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
      max-width: 40px;
    }
  }
  .circle:hover {
    background-color: #f0f0f3;
  }
  .circle:active {
    background-color: white;
  }
  .circle.left {
    left: 80px;
  }
  .circle.right {
    right: 80px;
  }
  .img-container {
    position: relative;
    width: 100vw;
    overflow: hidden;
  }
`;

const CarouselImg = styled.img`
  position: absolute;
  object-fit: cover;
  width: 400px;
  transform: ${(props) => `translateX(${(props.index - props.currentIndex) * 100}%)`};
  transition: transform ease-out 0.5s;
  width: 200px;
  height: 300px;
`;

const Tag = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px;
  border-radius: 5px;
`;

const Text = styled.p`
  position: absolute;
  top: 30px;
  right: 10px;
  color: white;
`;
