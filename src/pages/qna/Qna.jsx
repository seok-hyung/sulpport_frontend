import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
// import { blessingNameState, blessingRelationState } from '../../atoms/Atoms';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
const NavigationButtons = ({
  previousQuestion,
  nextQuestion,
  isNextDisabled,
  question,
  nextButtonClassName,
  nextButtonText,
  nextButtonIcon,
}) => {
  return (
    <ButtonContainer question={question}>
      {question !== 1 && (
        <button onClick={previousQuestion} className="previousBtn">
          <img src="/assets/arrow-left-orange-icon.svg" alt="왼쪽 화살표" />
          <p>이전으로</p>
        </button>
      )}
      <button
        onClick={nextQuestion}
        disabled={isNextDisabled}
        className={nextButtonClassName}
      >
        <p>{nextButtonText || '다음으로'}</p>
        <img
          src={nextButtonIcon || '/assets/arrow-right-orange-icon.svg'}
          alt="오른쪽 화살표"
        />
      </button>
    </ButtonContainer>
  );
};

const Qna = () => {
  //q1
  const [question, setQuestion] = useState(1);
  const [progress, setProgress] = useState(0);
  const [name, setName] = useState('');
  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  const previousQuestion = () => {
    if (progress > 0) {
      setProgress(progress - 20);
    }
    if (question > 1) {
      setQuestion(question - 1);
    }
  };
  const nextQuestion = () => {
    if (progress < 100) {
      setProgress(progress + 20);
      setQuestion(question + 1);
    }
  };

  //q2
  const [selectedOptions, setSelectedOptions] = useState([]);
  const q2Options = ['응원하는', '위로하는', '정중한', '부드러운', '반말', '존댓말'];
  const handleSelect = (value) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else if (selectedOptions.length < 3) {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  //q3
  const [q3SelectedOption, setQ3SelectedOption] = useState('');
  const [q3InputValue, setQ3InputValue] = useState('');
  const q3Options = ['부모', '자녀', '친척', '직장동료', '직장 상사', '친구'];
  const q3HandleSelect = (value) => {
    if (q3SelectedOption === value) {
      setQ3SelectedOption('');
    } else {
      setQ3SelectedOption(value);
    }
  };
  const q3HandleInputChange = (e) => {
    setQ3InputValue(e.target.value);
    setQ3SelectedOption('');
  };

  //q4
  const [q4SelectedOption, setQ4SelectedOption] = useState('');
  const [q4InputValue, setQ4InputValue] = useState('');
  const q4Options = ['취업준비', '공부중', '시험합격', '이사 계획', '여행 중'];
  const q4ImgNames = ['studying', 'books', 'hundred', 'truck', 'airplane'];
  const q4HandleSelect = (value) => {
    if (q4SelectedOption === value) {
      setQ4SelectedOption('');
    } else {
      setQ4SelectedOption(value);
    }
  };
  const q4HandleInputChange = (e) => {
    setQ4InputValue(e.target.value);
    setQ4SelectedOption('');
  };

  //q5
  const [q5Value, setQ5Value] = useState(0);
  const q5HandleChange = (e) => {
    setQ5Value(e.target.value);
  };
  // loading
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    setIsLoading(true); // 로딩 시작
    // 제출 처리 코드
    // 처리가 끝나면 setIsLoading(false)
  };
  return (
    <QnaWrapper>
      <header>
        <img src="/assets/blessingTxtOrange.svg" alt="" />
      </header>

      <ProgressBar progress={progress}>
        <div className="progress"></div>
      </ProgressBar>

      {question === 1 && (
        <>
          <div className="qDiv q1Div">
            <div className="q1Contents">
              <p>Q1 덕담을 받을 사람은?</p>
              <input
                type="text"
                value={name}
                placeholder="이름을 입력해주세요."
                onChange={handleInputChange}
              />
              <small className="skip" onClick={nextQuestion}>
                건너뛰기
              </small>
            </div>
          </div>
          <NavigationButtons
            previousQuestion={previousQuestion}
            nextQuestion={nextQuestion}
            isNextDisabled={!name}
            question={question}
          />
        </>
      )}

      {question === 2 && (
        <>
          <div className="qDiv q2Div">
            <p>
              Q2 <strong>{name}</strong>에게 덕담을 하는 나의 <strong>어조</strong>는?
            </p>
            <small>최대 3개를 선택할 수 있어요</small>
            <OptionList>
              {q2Options.map((value) => (
                <OptionItem
                  key={value}
                  selected={selectedOptions.includes(value)}
                  onClick={() => handleSelect(value)}
                >
                  {value}
                </OptionItem>
              ))}
            </OptionList>
          </div>
          <NavigationButtons
            previousQuestion={previousQuestion}
            nextQuestion={nextQuestion}
            isNextDisabled={selectedOptions.length < 1}
            question={question}
          />
        </>
      )}

      {question === 3 && (
        <>
          <div className="qDiv q3Div">
            <p>
              Q3 <strong>{name}</strong>(와)과의 관계는?
            </p>
            <OptionList>
              {q3Options.map((value) => (
                <OptionItem
                  key={value}
                  selected={q3SelectedOption === value}
                  onClick={() => q3HandleSelect(value)}
                >
                  {value}
                </OptionItem>
              ))}
            </OptionList>
            <input
              type="text"
              value={q3InputValue}
              placeholder="직접 입력할 수 있어요"
              onChange={q3HandleInputChange}
            />
          </div>
          <NavigationButtons
            previousQuestion={previousQuestion}
            nextQuestion={nextQuestion}
            isNextDisabled={!q3SelectedOption && !q3InputValue}
            question={question}
          />
        </>
      )}

      {question === 4 && (
        <>
          <div className="qDiv q4Div">
            <p>
              Q4 <strong>{name}</strong>의 상황은?
            </p>
            <OptionList>
              {q4Options.map((value, index) => (
                <OptionItem
                  key={value}
                  selected={q4SelectedOption === value}
                  onClick={() => q4HandleSelect(value)}
                >
                  <img
                    src={`/assets/${q4ImgNames[index]}-icon.svg`}
                    alt="상황 이미지들"
                  />
                  {value}
                </OptionItem>
              ))}
            </OptionList>
            <input
              type="text"
              placeholder="직접 입력할 수 있어요"
              onChange={q4HandleInputChange}
            />
          </div>
          <NavigationButtons
            previousQuestion={previousQuestion}
            nextQuestion={nextQuestion}
            isNextDisabled={!q4SelectedOption && !q4InputValue}
            question={question}
          />
        </>
      )}

      {question === 5 && (
        <>
          <div className="qDiv q5Div">
            <p>
              Q5 <strong>{name}</strong>(은)는 &nbsp;
              <strong>
                {q5Value === 0 || q5Value === '0'
                  ? '10대 미만'
                  : q5Value === '70'
                  ? '70대 이상'
                  : `${q5Value}대`}
              </strong>
              (이)다.
            </p>
            <small>드래그해서 연령대를 조절할 수 있어요</small>
            <RangeInput
              type="range"
              min="0"
              max="70"
              step="10"
              value={q5Value}
              onChange={q5HandleChange}
            />
            <Scale>
              <div>0</div>
              <div>10</div>
              <div>20</div>
              <div>30</div>
              <div>40</div>
              <div>50</div>
              <div>60</div>
              <div>70</div>
            </Scale>
          </div>
          <NavigationButtons
            previousQuestion={previousQuestion}
            nextQuestion={nextQuestion}
            isNextDisabled={!q4SelectedOption && !q4InputValue}
            question={question}
            nextButtonClassName="nextButton"
            nextButtonText="제출하기"
            nextButtonIcon="/assets/arrow-right-white-icon.svg"
          />
        </>
      )}
    </QnaWrapper>
  );
};

export default Qna;

const ProgressBar = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  border-radius: 10px;
  height: 25px;
  margin: 40px 0;
  .progress {
    width: ${(props) => props.progress}%;
    height: 20px;
    background-color: #fc764a;
  }
`;
const QnaWrapper = styled.div`
  strong {
    color: var(--main-color);
    font-size: 40px;
  }
  header {
    background-color: #fcfafa;
    width: 100%;
    img {
      width: 650px;
      display: block;
      padding: 50px 0;
      margin: 0 auto;
    }
  }

  .qDiv {
    width: 800px;
    margin: 0 auto;
    background-color: #fae9e4;
    text-align: center;
    padding: 100px 50px 150px 50px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    p {
      font-size: 38px;
      font-weight: 900;
      margin-bottom: 70px;
    }
    input {
      padding: 20px 60px;
      border-radius: 20px;
      border: none;
      outline: none;
      margin-top: 30px;
      color: white;
      text-align: center;
      font-size: 24px;
      &::placeholder {
        color: white;
        font-size: 24px;
        text-align: center;
      }
    }
  }
  .q1Div {
    .q1Contents {
      p {
        margin-bottom: 70px;
      }
      input {
        background-color: var(--main-color);
      }
      .skip {
        display: block;
        margin-top: 40px;
        color: #aeaeae;
        text-decoration: underline;
        text-decoration-thickness: 3px;
        text-underline-position: under;
        font-size: 28px;
        cursor: pointer;
      }
    }
  }
  .q2Div {
    p {
      margin-bottom: 30px;
    }
    small {
      font-size: 30px;
      color: #bdbdbd;
      display: block;
      margin-bottom: 60px;
    }
  }
  .q3Div {
    input {
      background-color: #dccfcd;
    }
  }
  .q4Div {
    input {
      background-color: #dccfcd;
    }
    img {
      width: 40px;
    }
  }
  .q5Div {
    p {
      font-size: 36px;
      span {
        text-decoration: underline;
        text-decoration-thickness: 3px;
      }

      strong:last-of-type {
        text-decoration: underline;
      }
    }
    small {
      font-size: 24px;
      color: #bdbdbd;
      display: block;
      margin-bottom: 200px;
    }
    .range-labels {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const ButtonContainer = styled.div`
  width: 700px;
  margin: 80px auto;
  display: flex;
  justify-content: ${(props) => (props.question === 1 ? 'flex-end' : 'space-between')};
  button {
    display: flex;
    align-items: center;
    gap: 20px;
    p {
      font-size: 32px;
      color: ${(props) => (props.disabled ? '#000000' : '#fc764a')};
      font-weight: bolder;
    }

    img {
      width: 60px;
    }
  }
  .previousBtn {
    opacity: 0.4;
  }
  button[disabled] {
    opacity: 0.4;
    pointer-events: none;
  }
  button:not(:disabled) img {
    opacity: 2;
  }
  .nextButton {
    padding: 10px 24px;
    border-radius: 40px;
    background-color: var(--main-color);
    p {
      color: white;
    }
  }
`;

// q2
const OptionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const OptionItem = styled.li`
  flex-basis: calc(50% - 10px);
  background-color: ${(props) => (props.selected ? '#fc764a' : 'white')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  padding: 20px;
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 15px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.selected ? '#fc764a' : '#eee')};
  }
`;

//q5
const RangeInput = styled.input`
  -webkit-appearance: none;
  position: relative;
  width: 100%;
  height: 40px;
  background: repeating-linear-gradient(
    to right,
    #000 1px,
    transparent 1px,
    transparent 10%
  );
  outline: none;
  overflow: hidden;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 45px;
    height: 45px;
    background-color: var(--main-color);
    border-radius: 50%;
    cursor: pointer;
    transition: left 1s ease-in-out;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    background: linear-gradient(
      to right,
      var(--main-color) ${({ value }) => (value / 70) * 100}%,
      white ${({ value }) => (value / 70) * 100}%
    );
    min-width: 699px;
    margin-left: -60px;
    border-radius: 40px;
  }
`;
const Scale = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
`;
