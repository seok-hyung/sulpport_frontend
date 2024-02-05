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
const CarouselSection = styled.section`
  width: 1100px;
  border-radius: 20px;
  position: relative;
  display: flex;
  height: 300px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 680px;
  }
  /* .img-container {
    position: relative;
    width: 100%;
    display: flex;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
  } */
`;

const CarouselImage = styled.img`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;
const CarouselContent = styled.div`
  width: 100%;
  height: 300px;
  position: absolute;
  border-radius: 20px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 40px;
  box-sizing: border-box;
  transition: transform ease-out 0.5s;
  transform: ${(props) => `translateX(${(props.index - props.currentIndex) * 100}%)`};
  h2 {
    font-size: 30px;
    margin-bottom: 20px;
    color: white;
  }
  p {
    font-size: 44px;
    color: white;
    font-weight: 900;
  }
`;
const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 60px;
  bottom: 35px;
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
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 1100px;
  position: relative;
  /* 스크롤 바를 숨김 */
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselItem = styled.div`
  flex: 0 0 100%;
  height: 400px;
  border-radius: 10px;
  cursor: grab;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .txtDiv {
    position: absolute;
    top: 30px;
    left: 20px;
    small {
      display: block;
      font-size: 30px;
      color: white;
      margin-bottom: 30px;
    }
    p {
      font-size: 44px;
      color: white;
      font-weight: 900;
    }
  }
`;
