import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cardCarouselList } from './cardCarouselList';
import styled from 'styled-components';

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startDrag, setStartDrag] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const infoList = cardCarouselList;
  const carouselRef = useRef();
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
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
            onClick={() => handleClick(item.path)}
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
export default CardCarousel;

const CarouselWrapper = styled.div`
  position: relative;
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100vw;
  max-width: 1300px;
  height: 420px;
  gap: 20px;
  @media (max-width: 430px) {
    width: 100%;
    height: 160px;
    gap: 10px;
  }

  .circle {
    position: absolute;
    z-index: 100;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #e9e9ec;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    .icon {
      width: 40px;
    }
    @media (max-width: 430px) {
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
    left: -27px;
  }
  .circle.right {
    right: -27px;
  }
`;

const CarouselItem = styled.div`
  flex: 0 0 calc(25% - 15px);
  @media (max-width: 430px) {
    flex: 0 0 calc(33% - 5px);
    background-size: contain;
    background-repeat: no-repeat;
  }
  scroll-snap-align: start;
  scroll-snap-stop: always;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    color: white;
    font-size: 24px;
    text-align: center;
  }
`;
