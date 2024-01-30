import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useEffect } from 'react';
import { carouselList } from './CarouselList';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = carouselList;

  const moveSlide = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
  };

  // 5초마다 다음 이미지를 자동으로 보여주기
  useEffect(() => {
    const slideShow = setInterval(moveSlide, 5000);
    return () => clearInterval(slideShow);
  }, [currentIndex]);
  return (
    <>
      <CarouselSection>
        <div className="img-container">
          {items.map((item, index) => (
            <CarouselContent
              index={index}
              currentIndex={currentIndex}
              key={item.id}
              bgColor={item.bgColor}
            >
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </CarouselContent>
          ))}
        </div>
        <ButtonWrapper>
          {items.map((_, index) => (
            <Button
              key={index}
              onClick={() => setCurrentIndex(index)}
              active={index === currentIndex}
            />
          ))}
        </ButtonWrapper>
      </CarouselSection>
    </>
  );
};

export default Carousel;

const CarouselSection = styled.section`
  padding: 10px 30px;
  position: relative;
  display: flex;
  height: 300px;
  .img-container {
    position: relative;
    width: 100%;
    display: flex;
    overflow: hidden;
    border-radius: 10px;
  }
`;
const CarouselContent = styled.div`
  width: 100%;
  height: 300px;
  position: absolute;
  background-color: ${(props) => props.bgColor};
  padding: 20px;
  box-sizing: border-box;
  transition: transform ease-out 0.5s;
  transform: ${(props) =>
    `translateX(${(props.index - props.currentIndex) * 100}%)`};
  h2 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
  }
`;
const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  right: 50px;
  bottom: 30px;
`;

const Button = styled.button`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  border: none;
  background-color: grey;
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;
  ${(props) =>
    props.active &&
    `
    padding: 5px;
    scale:1.3;
    background-color: white;
  `}
`;
