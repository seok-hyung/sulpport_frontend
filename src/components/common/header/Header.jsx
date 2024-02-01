import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, keyframes } from 'styled-components';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <HeaderWrapper>
      <div className="topPink"></div>
      <div className="ulWrapperDiv">
        <ul className="leftUl">
          <li className="firstLi">설포트</li>
          <li className="lastLi">선물/용돈 추천</li>
          <li
            className="lastLi"
            onClick={() => {
              navigate('/blessing');
            }}
          >
            덕담 추천
          </li>
          <li className="lastLi">설날 상식백과</li>
          <li className="lastLi">서비스 추천</li>
          <li className="lastLi">About us</li>
        </ul>
        <ul className="rightUl">
          <li className="searchIcon">
            <img src="/assets/search-icon.svg" alt="검색 아이콘" />
          </li>
          <li className="hamburgerIcon" onClick={openModal}>
            <img src="/assets/hamburger-icon.svg" alt="햄버거 아이콘" />
          </li>
        </ul>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <Icons>
            <div>설포트</div>
            <div>
              <img
                className="searchIcon"
                src="/assets/search-icon.svg"
                alt="검색 아이콘"
              />
              <img
                src="/assets/close-icon.svg"
                alt="닫기 아이콘"
                onClick={() => setIsModalOpen(false)}
              />
            </div>
          </Icons>
          <ul>
            <li>선물/용돈 추천</li>
            <li>덕담 추천</li>
            <li>설날 상식백과</li>
            <hr />
            <li>서비스 추천하기</li>
            <li>About Us</li>
          </ul>
        </Modal>
      )}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.nav`
  font-weight: 600;
  font-size: 16px;
  .topPink {
    width: 100%;
    height: 47px;
    background-color: rgba(255, 113, 113, 0.3);
  }
  .ulWrapperDiv {
    width: 100%;
    display: flex;
    background-color: rgba(217, 217, 217, 0.2);
  }
  .leftUl {
    width: 80%;
    display: flex;
    padding: 16px 28px;
    .firstLi {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      max-width: 15%;
      min-width: 15%;
      height: 91px;
      border: 1px solid black;
    }
    .lastLi {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 11%;
      height: 45px;
      margin: auto 0;
      margin-right: 25px;
      border: 1px solid black;
      min-width: fit-content;
      cursor: pointer;
    }
    @media (max-width: 800px) {
      .firstLi {
        margin-right: auto;
        min-width: 25%;
        max-width: 25%;
      }
      .lastLi {
        display: none;
      }
    }
  }
  .rightUl {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    .hamburgerIcon {
      display: none;
      @media (max-width: 800px) {
        margin-left: 20px;
        display: block;
      }
    }
    img {
      width: 30px;
      height: 26px;
      cursor: pointer;
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
  z-index: 1000;
  animation: ${(props) => (props.isOpen ? slideIn : slideOut)} 0.3s forwards;
  li,
  hr {
    margin-bottom: 15px;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  img {
    width: 20px;
  }
  img:first-of-type {
    margin-right: 10px;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;
