import React, { useState } from 'react';
import { styled, keyframes } from 'styled-components';

const Header = () => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchIcon, setSearchIcon] = useState('/assets/search-icon.svg');

  const handleSearchClick = () => {
    setIsInputOpen(!isInputOpen);
    setSearchIcon(
      isInputOpen ? '/assets/search-icon.svg' : '/assets/search-orange-icon.svg',
    );
  };

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <HeaderWrapper>
      <header>
        <img src="/assets/logo-circle-orange.svg" alt="원모양 로고" />
        <SearchWrapper>
          <SearchInput
            type="text"
            placeholder="검색할 단어를 입력해주세요."
            onChange={handleSearchInput}
            value={searchValue}
            $isOpen={isInputOpen}
          />
          <img src={searchIcon} alt="검색 이미지" onClick={handleSearchClick} />
        </SearchWrapper>
      </header>
    </HeaderWrapper>
  );
};

export default Header;

const slideIn = keyframes`
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
`;
const slideOut = keyframes`
  0%{
    transform: scaleX(1);
    opacity: 1;
  }
  100%{
    transform: scaleX(0);
    opacity: 0;
  }
`;

const HeaderWrapper = styled.header`
  header {
    width: 100vw;
    max-width: 1300px;
    margin: 15px auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: 430px) {
      width: 100%;
      padding: 10px 20px;
    }
    img:first-of-type {
      width: 50px;
      @media (max-width: 430px) {
        width: 30px;
      }
    }
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  img {
    margin-left: auto;
    width: 40px;
    height: 40px;
    margin-right: 20px;
    z-index: 10;
    @media (max-width: 430px) {
      margin-right: 10px;
      width: 30px;
      height: 30px;
    }
  }
`;

// 검색창
const SearchInput = styled.input`
  position: absolute;
  width: calc(100% - 50px);
  right: 0px;
  z-index: 0;
  padding: 20px;
  border-radius: 40px;
  border: none;
  outline: none;
  background-color: #f2f2f2;
  font-size: 20px;
  transform: scaleX(${(props) => (props.$isOpen ? '1' : '0')});
  transform-origin: right;
  animation: ${(props) => (props.$isOpen ? slideIn : slideOut)} 0.5s forwards ease-out;

  &:focus {
    background-color: #ffffff;
    border: 1px solid var(--main-color);
  }
  @media (max-width: 430px) {
    width: calc(100% - 30px);
    font-size: 14px;
    padding: 15px 20px;
  }
`;
