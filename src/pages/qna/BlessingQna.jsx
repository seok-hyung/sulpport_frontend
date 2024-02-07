import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import NavBtns from '../../components/common/navBtns/NavBtns';
import { useNavigate } from 'react-router-dom';
import { postBlessingMent } from '../../api/postBlessingMent';

const BlessingQna = () => {
  const navigate = useNavigate();
  //q1
  const [question, setQuestion] = useState(1);
  const [progress, setProgress] = useState(20);
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
    setQuestion(question + 1);
    setProgress(progress + 20);
  };

  //q2
  const [selectedOptions, setSelectedOptions] = useState([]);
  const toneOptions = ['응원하는', '위로하는', '정중한', '부드러운', '반말', '존댓말'];
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
  const relationOptions = ['부모', '자녀', '친척', '직장 동료', '직장 상사', '친구'];
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
  //q7

  const [formData, setFormData] = useState({
    name: name,
    tone: selectedOptions,
    relations: q3SelectedOption || q3InputValue,
    situation: q4SelectedOption || q4InputValue,
    ageGroup: q5Value,
    formality: '반말의',
  });

  useEffect(() => {
    setFormData({
      name: name,
      tone: selectedOptions,
      relations: q3SelectedOption || q3InputValue,
      situation: q4SelectedOption || q4InputValue,
      ageGroup: q5Value,
      formality: '반말의',
    });
  }, [
    name,
    selectedOptions,
    q3SelectedOption,
    q3InputValue,
    q4SelectedOption,
    q4InputValue,
    q5Value,
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const goToQnaResult = () => {
    setIsLoading(true); // 로딩 시작
    postBlessingMent(formData).then((res) => {
      setIsLoading(false); // 로딩 종료
      navigate('/blessingQnaResult', { state: { res, formData } });
    });
  };
  return (
    <QnaWrapper>
      <header>
        <img src="/assets/blessingTxtOrange.svg" alt="" />
      </header>

      {progress <= 100 && (
        <ProgressBar progress={progress}>
          <div className="progress"></div>
        </ProgressBar>
      )}

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
          <NavBtns
            previousQuestion={previousQuestion}
            nextQuestion={nextQuestion}
            isNextDisabled={!name}
            question={question}
            color={'var(--main-color)'}
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
              {toneOptions.map((value) => (
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
          <NavBtns
            previousQuestion={previousQuestion}
            nextQuestion={nextQuestion}
            isNextDisabled={selectedOptions.length < 1}
            color={'var(--main-color)'}
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
              {relationOptions.map((value) => (
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
          <NavBtns
            previousQuestion={previousQuestion}
            nextQuestion={nextQuestion}
            isNextDisabled={!q3SelectedOption && !q3InputValue}
            color={'var(--main-color)'}
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
          <NavBtns
            previousQuestion={previousQuestion}
            nextQuestion={nextQuestion}
            isNextDisabled={!q4SelectedOption && !q4InputValue}
            color={'var(--main-color)'}
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
          <NavBtns
            previousQuestion={previousQuestion}
            nextQuestion={nextQuestion}
            isNextDisabled={!q5Value}
            nextButtonClassName="nextButton"
            nextButtonText="제출하기"
            nextButtonIcon="/assets/arrow-right-white-icon.svg"
            color={'var(--main-color)'}
          />
        </>
      )}

      {question === 6 &&
        (isLoading ? (
          <LoadingComponent
            name={name}
            setQuestion={setQuestion}
            selectedOptions={selectedOptions}
            q3SelectedOption={q3SelectedOption}
            q3InputValue={q3InputValue}
            q4SelectedOption={q4SelectedOption}
            q4InputValue={q4InputValue}
            q5Value={q5Value}
            color={'var(--main-color)'}
          />
        ) : (
          <div className="q7ResultDiv">
            <img src="/assets/pocket.svg" alt="주머니 이미지" />
            <div className="txtDiv">
              <h2>덕담이 생성되었어요!</h2>
              <p>
                다음 페이지에서 <span>나만의 맞춤형 덕담</span>을 확인해보세요.
              </p>
            </div>
            <button onClick={goToQnaResult}>덕담 보러가기</button>
          </div>
        ))}
    </QnaWrapper>
  );
};

export default BlessingQna;

const LoadingComponent = ({
  q4SelectedOption,
  q4InputValue,
  q5Value,
  q3SelectedOption,
  q3InputValue,
  name,
  selectedOptions,
}) => {
  return (
    <div className="q6LoadingDiv">
      <img src="/assets/loading-card-orange.svg" alt="Loading" />
      <div className="txtDiv">
        <p>
          <strong>{q4SelectedOption || q4InputValue}</strong>(인)하는{' '}
          <strong>
            {q5Value === 0 || q5Value === '0'
              ? '10대 미만'
              : q5Value === '70'
              ? '70대 이상'
              : `${q5Value}대`}
          </strong>{' '}
          <strong>
            <strong>{q3SelectedOption || q3InputValue}</strong> &quot;{name}&quot;
          </strong>
          님에게
          <br /> 보내고 싶은 <strong>{selectedOptions.join(', ')}</strong> 덕담
        </p>
        <p>덕담을 만드는 중...</p>
      </div>
    </div>
  );
};
const ProgressBar = styled.div`
  width: 100vw;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  border-radius: 10px;
  height: 25px;
  margin: 40px auto;
  @media (max-width: 430px) {
    margin: 10px auto 15px auto;
    height: 15px;
  }
  .progress {
    width: ${(props) => props.progress}%;
    height: 25px;
    background-color: #fc764a;
    @media (max-width: 430px) {
      height: 15px;
    }
  }
`;
const QnaWrapper = styled.div`
  margin: 0 auto;
  strong {
    color: var(--main-color);
    font-size: 38px;
    font-weight: 900;
    @media (max-width: 430px) {
      font-size: 18px;
    }
  }
  header {
    background-color: #fcfafa;
    width: 100%;
    img {
      width: 40.625rem;
      display: block;
      padding: 50px 0;
      margin: 0 auto;
      @media (max-width: 430px) {
        width: 18rem;
        padding: 20px 10px;
      }
    }
  }

  .qDiv {
    max-width: 40rem;
    height: 50rem;
    margin: 0 auto;
    background-color: #fae9e4;
    text-align: center;
    padding: 100px 50px 150px 50px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 430px) {
      width: 20rem;
      height: 29.0625rem;
      padding: 40px 10px;
    }
    p {
      font-size: 38px;
      font-weight: 900;
      margin-bottom: 100px;
      @media (max-width: 430px) {
        font-size: 16px;
        margin-bottom: 20px;
      }
    }
    input {
      padding: 20px 60px;
      border-radius: 20px;
      border: none;
      outline: none;
      color: white;
      text-align: center;
      font-size: 24px;
      &::placeholder {
        color: white;
        font-size: 24px;
        text-align: center;
        @media (max-width: 430px) {
          font-size: 16px;
        }
      }
      @media (max-width: 430px) {
        padding: 10px 20px;
        font-size: 16px;
        margin-top: 10px;
      }
    }
    small {
      font-size: 30px;
      color: #bdbdbd;
      display: block;
      margin-bottom: 60px;
      @media (max-width: 430px) {
        font-size: 14px;
        margin-bottom: 20px;
      }
    }
  }
  .q1Div {
    .q1Contents {
      input {
        background-color: white;
        color: black;
        &::placeholder {
          color: #979393;
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
        @media (max-width: 430px) {
          margin-top: 20px;
          font-size: 16px;
        }
      }
    }
  }
  .q2Div {
    p {
      margin-bottom: 30px;
      @media (max-width: 430px) {
        margin-bottom: 10px;
      }
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
      @media (max-width: 430px) {
        width: 20px;
      }
    }
  }
  .q5Div {
    p {
      margin-bottom: 30px;
      @media (max-width: 430px) {
        margin-bottom: 10px;
        margin-top: -60px;
      }
    }
    span {
      text-decoration: underline;
      text-decoration-thickness: 3px;
    }

    strong:last-of-type {
      text-decoration: underline;
    }
    .range-labels {
      display: flex;
      justify-content: space-between;
    }
    small {
      margin-bottom: 100px;
      @media (max-width: 430px) {
        margin-bottom: 60px;
      }
    }
  }
  .q6LoadingDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 32px;
    img {
      margin-top: 120px;
      width: 250px;
      @media (max-width: 430px) {
        width: 160px;
        margin-top: 40px;
      }
    }

    .txtDiv {
      margin-top: 40px;
      text-align: center;
      line-height: 70px;
      @media (max-width: 430px) {
        margin-top: 0px;
        line-height: 30px;
      }
      h2 {
        font-size: 40px;
        font-weight: 700;
        @media (max-width: 430px) {
          font-size: 28px;
        }
      }
      p:first-of-type {
        margin-top: 100px;
        font-weight: 700;
        @media (max-width: 430px) {
          margin-top: 80px;
          font-size: 16px;
        }
      }
      p:last-of-type {
        margin-top: 80px;
        font-size: 40px;
        font-weight: 900;
        @media (max-width: 430px) {
          font-size: 30px;
          margin-top: 50px;
        }
      }
    }
  }
  .q7ResultDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 32px;
    img {
      margin-top: 120px;
      width: 250px;
      @media (max-width: 430px) {
        width: 200px;
        margin-top: 40px;
      }
    }
    .txtDiv {
      margin-top: 20px;
      text-align: center;
      line-height: 70px;
      @media (max-width: 430px) {
        line-height: 25px;
      }
      h2 {
        font-size: 44px;
        font-weight: 900;
        margin-bottom: 10px;
        @media (max-width: 430px) {
          font-size: 26px;
        }
      }
      p {
        @media (max-width: 430px) {
          font-size: 20px;
        }
      }
      span {
        font-weight: 700;
      }
    }
    button {
      margin-top: 120px;
      padding: 15px 45px;
      border-radius: 10px;
      background-color: var(--main-color);
      font-size: 26px;
      font-weight: 700;
      color: white;
      @media (max-width: 430px) {
        margin-top: 60px;
        padding: 10px 20px;
        font-size: 20px;
      }
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
    @media (max-width: 430px) {
      background-color: ${(props) => (props.selected ? '#fc764a' : 'white')};
    }
  }
  @media (max-width: 430px) {
    font-size: 14px;
    padding: 12px;
  }
`;

//q5
const RangeInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 40px;
  outline: none;
  overflow: visible;
  /* box-shadow: inset 0 0 0 3px blue; */
  @media (max-width: 430px) {
    height: 20px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 55px;
    height: 55px;
    margin-top: -7px;
    background-color: var(--main-color);
    border-radius: 50%;
    cursor: pointer;
    transition: left 1s ease-in-out;
    @media (max-width: 430px) {
      width: 30px;
      height: 30px;
      margin-top: -5px;
    }
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    min-width: 534px;
    /* box-shadow: 0 0 0 3px red; */
    margin-left: -58px;
    height: 40px;
    background: linear-gradient(
      to right,
      var(--main-color) ${({ value }) => (value / 70) * 100}%,
      transparent ${({ value }) => (value / 70) * 100}%
    );
    border-radius: 40px;

    /* background: repeating-linear-gradient(
      to right,
      #000 0,
      #000 1px,
      transparent 1px,
      transparent calc(100% / 8)
    ); */
    background-position: center;
    background-size: 100% 1px;
    @media (max-width: 430px) {
      min-width: 300px;
      margin-left: -20px;
      height: 20px;
    }
  }
`;
const Scale = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  width: 100%;
  margin-top: 10px;
  font-size: 24px;

  @media (max-width: 430px) {
    padding: 5px;
    margin-top: 5px;
    font-size: 14px;
  }
`;
