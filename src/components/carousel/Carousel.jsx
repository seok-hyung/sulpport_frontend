import React, { useRef, useState } from 'react';
import { carouselList } from './CarouselList';
import styled from 'styled-components';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startDrag, setStartDrag] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const itemLists = carouselList;
  const carouselRef = useRef();

  const handleScroll = (event) => {
    const index = Math.round(event.target.scrollLeft / event.target.scrollWidth);
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

  return (
    <CarouselContainer
      ref={carouselRef}
      onScroll={handleScroll}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {itemLists.map((item) => (
        <CarouselItem key={item.id} style={{ backgroundImage: `url(${item.url})` }}>
          <dic className="txtDiv">
            <small>{item.tags}</small>
            <p>{item.txt}</p>
          </dic>
        </CarouselItem>
      ))}
      <ButtonWrapper>
        {itemLists.map((_, index) => (
          <Button
            key={index}
            onClick={() => setCurrentIndex(index)}
            active={index === currentIndex}
          />
        ))}
      </ButtonWrapper>
    </CarouselContainer>
  );
};
export default Carousel;
const CarouselContainer = styled.div`
  /* box-shadow: 0 0 0 5px blue; */
  display: flex;
  overflow: auto;
  margin: 0 auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100vw;
  max-width: 1300px;
  border-radius: 10px;
  position: relative;
  @media (max-width: 430px) {
    width: 100%;
    height: 200px;
  }
  /* 스크롤 바를 숨김 */
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselItem = styled.div`
  flex: 0 0 100%;
  height: 400px;
  cursor: grab;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  @media (max-width: 430px) {
    width: 100%;
    height: 200px;
  }

  .txtDiv {
    position: absolute;
    top: 50px;
    left: 40px;
    @media (max-width: 430px) {
      top: 30px;
      left: 25px;
    }
    small {
      display: block;
      font-size: 34px;
      color: white;
      margin-bottom: 30px;
      @media (max-width: 430px) {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 14px;
      }
    }
    p {
      font-size: 50px;
      color: white;
      font-weight: 900;
      @media (max-width: 430px) {
        font-size: 28px;
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 60px;
  bottom: 35px;
  @media (max-width: 430px) {
    left: 30px;
    bottom: 18px;
  }
`;

const Button = styled.button`
  width: 15px;
  height: 15px;
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
    background-color: var(--main-color);
  `}
  @media (max-width: 430px) {
    width: 10px;
    height: 10px;
  }
`;
