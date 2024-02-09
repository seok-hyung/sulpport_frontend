import React from 'react';
import { styled } from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <hr />
      <img src="/assets/footer-txt.svg" alt="팀 설포트" />
      <div className="footerTxtDiv">
        <p>디자인 | 이채영, 서단영</p>
        <p>개발(FE) | 이석형</p>
        <p>개발(BE) | 허인주, 신혜지</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100vw;
  max-width: 1300px;
  margin: 50px auto;
  @media (max-width: 430) {
    margin: 25px auto;
  }
  hr {
    margin-bottom: 50px;
    background-color: #767676;
    border: 0;
    height: 1px;
    @media (max-width: 430) {
      margin-bottom: 25px;
    }
  }
  img {
    width: 180px;
    @media (max-width: 430) {
      width: 80px;
    }
  }
  .footerTxtDiv {
    margin-top: 20px;
    font-size: 24px;
    line-height: 30px;
    color: #767676;
  }
`;
