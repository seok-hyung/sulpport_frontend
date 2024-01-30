import React from 'react';
import { styled } from 'styled-components';

const Main = () => {
  return (
    <MainWrapper>
      <section>
        <div className="logo">메인 캐릭터 or 로고</div>
        <p>우리들의 설날을 더욱 알차게!</p>
        <Text>support 설, 설포트</Text>
        <BoxContainer>
          <Box>선물/용돈 추천</Box>
          <Box>덕담 추천</Box>
          <Box>설날 상식백과</Box>
        </BoxContainer>
      </section>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.main`
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .logo {
      padding: 30px 20px;
      border: 1px solid black;
      font-size: 26px;
    }
    p {
      font-size: 32px;
      font-weight: 600;
      margin-top: 30px;
      min-width: 380px;
      text-align: center;
    }
  }
`;
const Text = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin-top: 30px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const BoxContainer = styled.div`
  display: none;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 800px) {
    display: flex;
    margin-top: 30px;
  }
`;

const Box = styled.div`
  width: 30%;
  border: 1px solid black;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 35px;
`;
