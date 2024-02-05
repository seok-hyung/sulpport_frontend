import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      <ul className="headerUl">
        <li>
          <img src="/assets/logo-circle-orange.svg" alt="원모양 로고" />
        </li>
        <SearchWrapper>
          {isInputOpen ? (
            <SearchInputSlideIn
              type="text"
              placeholder="검색할 단어를 입력해주세요."
              onChange={handleSearchInput}
              value={searchValue}
            />
          ) : (
            <SearchInputSlideOut
              type="text"
              placeholder="검색할 단어를 입력해주세요."
              onChange={handleSearchInput}
              value={searchValue}
            />
          )}
          <img src={searchIcon} alt="검색 이미지" onClick={handleSearchClick} />
        </SearchWrapper>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  .headerUl {
    width: 1300px;
    margin: 40px auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: 396px) {
      width: 100%;
      padding: 10px 20px;
    }
    img {
      width: 50px;
      @media (max-width: 396px) {
        width: 30px;
      }
    }
  }
`;

const slideIn = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    width: calc(100% - 50px);
    opacity: 1;
  }
`;
const slideOut = keyframes`
  0%{
    width: calc(100% - 50px);
    opacity: 1;
  }
  100%{
    width: 0;
    opacity: 0;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  img {
    margin-left: auto;
    margin-right: 40px;
    z-index: 10;
  }
  @media (max-width: 396px) {
    img {
      margin-right: 10px;
    }
  }
`;

const SearchInputSlideIn = styled.input`
  position: absolute;
  right: 0px;
  z-index: 0;
  padding: 30px;
  border-radius: 40px;
  border: none;
  outline: none;
  background-color: #f2f2f2;
  animation: ${slideIn} 0.5s forwards ease-out;
  font-size: 24px;
  &:focus {
    background-color: #ffffff;
    border: 1px solid var(--main-color);
  }
  @media (max-width: 396px) {
    font-size: 14px;
    padding: 15px 20px;
  }
`;

const SearchInputSlideOut = styled(SearchInputSlideIn)`
  animation: ${slideOut} 0.5s forwards ease-out;
`;
