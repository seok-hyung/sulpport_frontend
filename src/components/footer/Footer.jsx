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
  padding: 20px;
  margin: auto;
  hr {
    margin-bottom: 20px;
    background-color: #767676;
    border: 0;
    height: 1px;
  }
  img {
    width: 180px;
    @media (max-width: 430px) {
      width: 140px;
    }
  }
  .footerTxtDiv {
    margin-top: 10px;
    font-size: 22px;
    line-height: 28px;
    color: #767676;
    @media (max-width: 430px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
`;
