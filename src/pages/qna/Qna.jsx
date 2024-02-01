import React, { useState } from 'react';
import { styled } from 'styled-components';

const NavigationButtons = ({
  previousQuestion,
  nextQuestion,
  isNextDisabled,
  question,
}) => {
  return (
    <ButtonContainer question={question}>
      {question !== 1 && (
        <button onClick={previousQuestion} className="previousBtn">
          <img src="/assets/arrow-left-orange-icon.svg" alt="왼쪽 화살표" />
          <p>이전으로</p>
        </button>
      )}
      <button onClick={nextQuestion} disabled={isNextDisabled}>
        <p>다음으로</p>
        <img src="/assets/arrow-right-orange-icon.svg" alt="오른쪽 화살표" />
      </button>
    </ButtonContainer>
  );
};

const Qna = () => {
  //q1
  const [question, setQuestion] = useState(1);
  const [progress, setProgress] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
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
          <div className="q1Div">
            <div className="q1Contents">
              <p>덕담을 받을 사람은?</p>
              <input
                type="text"
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
            isNextDisabled={!inputValue}
            question={question}
          />
        </>
      )}

      {question === 2 && (
        <>
          <div className="q2Div">
            <p>상대방에게 덕담을 하는 나의 어조는?</p>
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
        <div>
          <p>상대방(와)과의 관계는?</p>
          <select>
            <option value="부모">부모</option>
            <option value="자녀">자녀</option>
            <option value="친척">친척</option>
            <option value="직장동료">직장동료</option>
            <option value="직장 상사">직장 상사</option>
            <option value="친구">친구</option>
          </select>
          <button onClick={nextQuestion}>다음</button>
        </div>
      )}

      {question === 4 && (
        <div>
          <p>상대방의 상황은?</p>
          <select>
            <option value="취업준비">취업준비</option>
            <option value="공부중">공부중</option>
            <option value="시험합격">시험합격</option>
            <option value="이사 계획">이사 계획</option>
            <option value="여행 중">여행 중</option>
            <option value="직접입력">직접입력</option>
          </select>
          <input type="text" />
          <button onClick={nextQuestion}>다음</button>
        </div>
      )}

      {question === 5 && (
        <div>
          <p>상대방은</p>
          <input type="range" min="10" max="60" />
          <button onClick={nextQuestion}>덕담 만들기</button>
        </div>
      )}
      {question === 6 && (
        <div>
          <img src="/assets/thumbUp-img.svg" alt="엄지 척 이미지" />
        </div>
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
  header {
    background-color: #fcfafa;
    box-shadow: inset 0 0 0 3px red;
    width: 100%;
    img {
      width: 700px;
      display: block;
      padding: 50px 0;
      margin: 0 auto;
    }
  }
  .q1Div {
    width: 700px;
    margin: 0 auto;
    background-color: #fae9e4;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 150px 50px 200px 50px;
    text-align: center;
    .q1Contents {
      p {
        font-size: 40px;
        font-weight: 900;
        margin-bottom: 70px;
      }
      input {
        padding: 20px 60px;
        border-radius: 20px;
        border: none;
        outline: none;
        background-color: var(--main-color);
        color: white;
        text-align: center;
        font-size: 20px;
        &::placeholder {
          color: white;
          font-size: 20px;
          text-align: center;
        }
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
    width: 700px;
    margin: 0 auto;
    background-color: #fae9e4;
    text-align: center;
    padding: 150px 50px 200px 50px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    p {
      font-size: 36px;
      font-weight: 900;
      margin-bottom: 30px;
    }
    small {
      font-size: 24px;
      color: #bdbdbd;
      display: block;
      margin-bottom: 60px;
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
      font-size: 30px;
      color: ${(props) => (props.disabled ? '#000000' : '#fc764a')};
      font-weight: bolder;
    }

    img {
      width: 60px;
    }
  }
  .previousBtn {
    opacity: 0.5;
  }
  button[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
  button:not(:disabled) img {
    opacity: 1;
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
  flex-basis: calc(50% - 50px);
  background-color: ${(props) => (props.selected ? '#fc764a' : 'white')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  padding: 10px;
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 15px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.selected ? '#fc764a' : '#eee')};
  }
`;
