import React from 'react';
import styled from 'styled-components';

const NavBtns = ({
  previousQuestion,
  nextQuestion,
  isNextDisabled,
  question,
  nextButtonClassName,
  nextButtonText,
  nextButtonIcon,
  color,
  backgroundColor,
}) => {
  return (
    <ButtonContainer question={question} color={color} backgroundColor={backgroundColor}>
      {question !== 1 && (
        <button onClick={previousQuestion} className="previousBtn">
          <img src="/assets/arrow-left-icon.svg" alt="왼쪽 화살표" />
          <p>이전으로</p>
        </button>
      )}
      <button
        onClick={nextQuestion}
        disabled={isNextDisabled}
        className={nextButtonClassName}
      >
        <p className="nextTxt">{nextButtonText || '다음으로'}</p>
        <img
          src={nextButtonIcon || '/assets/arrow-right-orange-icon.svg'}
          alt="오른쪽 화살표"
        />
      </button>
    </ButtonContainer>
  );
};

export default NavBtns;

const ButtonContainer = styled.div`
  max-width: 40rem;
  margin: 80px auto 0 auto;
  display: flex;
  justify-content: ${(props) => (props.question === 1 ? 'flex-end' : 'space-between')};
  @media (max-width: 430px) {
    width: 100%;
    max-width: 20rem;
    margin: 20px auto 0 auto;
  }
  button {
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 430px) {
      gap: 5px;
    }
    p {
      font-size: 32px;
      color: #000000;
      font-weight: bolder;
      @media (max-width: 430px) {
        font-size: 18px;
      }
    }
    .nextTxt {
      color: ${(props) => (props.disabled ? '#000000' : `${props.color}`)};
    }

    img {
      width: 60px;
      @media (max-width: 430px) {
        width: 30px;
      }
    }
  }
  .previousBtn {
    opacity: 0.3;
  }
  button[disabled] {
    opacity: 0.3;
    pointer-events: none;
  }
  button:not(:disabled) img {
    opacity: 2;
  }
  .nextButton {
    padding: 10px 24px;
    border-radius: 40px;
    background-color: ${(props) =>
      props.backgroundColor ? 'var(--sub-color)' : 'var(--main-color)'};
    p {
      color: white;
    }
  }
`;
