import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavBtns from '../../components/common/navBtns/NavBtns';
import { postMoneyValue } from '../../api/postMoneyValue';

const PresentQna = () => {
  const navigate = useNavigate();
  //q1 이름
  const [question, setQuestion] = useState(1);
  const [progress, setProgress] = useState(16);
  const [name, setName] = useState('');
  const nameInputChange = (e) => {
    setName(e.target.value);
  };
  const previousQuestion = () => {
    if (progress > 0) {
      setProgress(progress - 16.5);
    }
    if (question > 1) {
      setQuestion(question - 1);
    }
  };
  const nextQuestion = () => {
    setQuestion(question + 1);
    setProgress(progress + 16.5);
  };

  //q2 관계
  const [relation, setRelation] = useState('');
  const [relationInputValue, setRelationInputValue] = useState('');
  const q3Options = ['부모', '자녀', '친척', '직장 동료', '직장 상사', '친구'];
  const handleRelation = (value) => {
    if (relation === value) {
      setRelation('');
    } else {
      setRelation(value);
    }
  };
  const relationInputChange = (e) => {
    setRelationInputValue(e.target.value);
    setRelation('');
  };

  //q3 나이
  const [age, setAge] = useState(0);
  const ageInputChange = (e) => {
    setAge(e.target.value);
  };

  //q4 가격대

  const [price, setPrice] = useState(0);
  const priceInputChange = (e) => {
    setPrice(e.target.value);
  };

  // q5 category
  const [categorys, setCategorys] = useState([]);
  const categoryOptions = [
    '설날 한정',
    '학습',
    '건강',
    '의약외품',
    '생필품',
    '장난감',
    '음식',
    '장식품',
    '응원',
  ];
  const [categoryInputValue, setCategoryInputValue] = useState('');

  const handleCategorySelect = (value) => {
    if (categorys.includes(value)) {
      setCategorys(categorys.filter((option) => option !== value));
    } else if (categorys.length < 3) {
      setCategorys([...categorys, value]);
    }
  };

  //q6 현재 상황
  const [situation, setSituation] = useState('');
  const [situationInputValue, setsituationInputValue] = useState('');
  const situationOptions = ['취업준비', '공부중', '시험합격', '이사 계획', '여행 중'];
  const situationImgNames = ['studying', 'books', 'hundred', 'truck', 'airplane'];
  const situationSelect = (value) => {
    if (situation === value) {
      setSituation('');
    } else {
      setSituation(value);
    }
  };
  const q4HandleInputChange = (e) => {
    setsituationInputValue(e.target.value);
    setSituation('');
  };

  // 로딩
  const [isLoading, setIsLoading] = useState(false);

  const goToQnaResult = () => {
    setIsLoading(true); // 로딩 시작
    postMoneyValue(formData).then((res) => {
      setTimeout(() => {
        setIsLoading(false); // 로딩 종료
        navigate('/presentQnaResult', { state: res });
      }, 2000);
    });
  };

  const [formData, setFormData] = useState({
    name: name,
    relations: relation || relationInputValue,
    ageGroup: age,
  });

  useEffect(() => {
    setFormData({
      name: name,
      relations: relation || relationInputValue,
      ageGroup: age,
    });
  }, [name, relation, relationInputValue, age]);
  return (
    <QnaWrapper>
      <header>
        <img src="/assets/present-txt.svg" alt="" />
      </header>

      {progress <= 100 && (
        <ProgressBar progress={progress}>
          <div className="progress"></div>
        </ProgressBar>
      )}

      {/* q1 이름 */}
      {question === 1 && (
        <>
          <div className="qDiv q1Div">
            <div className="q1Contents">
              <p>Q1 선물을 받을 사람은?</p>
              <input
                type="text"
                value={name}
                placeholder="이름을 입력해주세요."
                onChange={nameInputChange}
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
            nextButtonIcon={`/assets/arrow-right-subcolor.svg`}
            color={'var(--sub-color)'}
          />
        </>
      )}

      {/* q2 관계 */}
      {question === 2 && (
        <>
          <div className="qDiv q2Div">
            <p>
              Q2 <strong>{name}</strong>(와)과의 관계는?
            </p>
            <OptionList>
              {q3Options.map((value) => (
                <OptionItem
                  key={value}
                  selected={relation === value}
                  onClick={() => handleRelation(value)}
                >
                  {value}
                </OptionItem>
              ))}
            </OptionList>
            <input
              type="text"
              value={relationInputValue}
              placeholder="직접 입력할 수 있어요"
              onChange={relationInputChange}
            />
          </div>
          <NavBtns
            previousQuestion={previousQuestion}
            nextQuestion={nextQuestion}
            isNextDisabled={!relation && !relationInputValue}
            question={question}
            nextButtonIcon={`/assets/arrow-right-subcolor.svg`}
            color={'var(--sub-color)'}
          />
        </>
      )}

      {/* q3 나이 */}
      {question === 3 && (
        <>
          <div className="qDiv q3Div">
            <p>
              Q3 <strong>{name}</strong>(은)는 &nbsp;
              <strong>
                {age === 0 || age === '0'
                  ? '10대 미만'
                  : age === '70'
                  ? '70대 이상'
                  : `${age}대`}
              </strong>
              (이)다.
            </p>
            <small>드래그해서 연령대를 조절할 수 있어요</small>
            <RangeInput
              type="range"
              min="0"
              max="70"
              step="10"
              value={age}
              onChange={ageInputChange}
              maxValue={70}
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
            isNextDisabled={!age}
            question={question}
            color={'var(--sub-color)'}
            nextButtonIcon={`/assets/arrow-right-subcolor.svg`}
          />
        </>
      )}

      {/* q4 가격대  */}
      {question === 4 && (
        <>
          <div className="qDiv q3Div">
            <p>
              Q4 선물의 가격대는
              <strong>
                {price === 1 || price === '1'
                  ? '만원대'
                  : price === '50'
                  ? '50만원대 이상'
                  : `${price}만원대`}
              </strong>
              (이)다.
            </p>
            <small>드래그해서 연령대를 조절할 수 있어요</small>
            <RangeInput
              type="range"
              min="0"
              max="50"
              step="10"
              value={price}
              onChange={priceInputChange}
              maxValue={50}
            />
            <Scale>
              <div>1+</div>
              <div>3</div>
              <div>5</div>
              <div>10</div>
              <div>20</div>
              <div>50</div>
            </Scale>
          </div>
          <NavBtns
            previousQuestion={previousQuestion}
            nextQuestion={nextQuestion}
            isNextDisabled={!price}
            question={question}
            nextButtonIcon={`/assets/arrow-right-subcolor.svg`}
            color={'var(--sub-color)'}
          />
        </>
      )}
      {/* 카테고리 */}
      {question === 5 && (
        <>
          <div className="qDiv q5Div">
            <p>
              Q5 <strong>{name}</strong>에게 줄 선믈의 카테고리는?
            </p>
            <small>최대 3개를 선택할 수 있어요</small>
            <OptionList>
              {categoryOptions.map((value) => (
                <OptionItem
                  key={value}
                  selected={categorys.includes(value)}
                  onClick={() => handleCategorySelect(value)}
                >
                  {value}
                </OptionItem>
              ))}
            </OptionList>
          </div>
          <NavBtns
            previousQuestion={previousQuestion}
            nextQuestion={nextQuestion}
            isNextDisabled={categorys.length < 1}
            question={question}
            nextButtonIcon={`/assets/arrow-right-subcolor.svg`}
            color={'var(--sub-color)'}
          />
        </>
      )}

      {/* 상황 */}
      {question === 6 && (
        <>
          <div className="qDiv q4Div">
            <p>
              Q4 <strong>{name}</strong>의 상황은?
            </p>
            <OptionList>
              {situationOptions.map((value, index) => (
                <OptionItem
                  key={value}
                  selected={situation === value}
                  onClick={() => situationSelect(value)}
                >
                  <img
                    src={`/assets/${situationImgNames[index]}-icon.svg`}
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
            isNextDisabled={!situation && !situationInputValue}
            question={question}
            nextButtonIcon="/assets/arrow-right-white-icon.svg"
            nextButtonClassName="nextButton"
            nextButtonText="제출하기"
            backgroundColor={'var(--sub-color)'}
          />
        </>
      )}

      {question === 7 &&
        (isLoading ? (
          <LoadingComponent
            name={name}
            relation={relation}
            relationInputValue={relationInputValue}
            age={age}
            color={'var(--sub-color)'}
          />
        ) : (
          <div className="resultDiv">
            <img src="/assets/falling-money.svg" alt="돈 이미지" />
            <div className="txtDiv">
              <h2>적당한 금액을 찾았어요!</h2>
              <p>다음 페이지에서 딱 맞는 용돈 금액을 확인해보세요.</p>
            </div>
            <button onClick={goToQnaResult}>용돈 추천 결과</button>
          </div>
        ))}
    </QnaWrapper>
  );
};

export default PresentQna;

const LoadingComponent = ({ name, relation, relationInputValue, age }) => {
  return (
    <div className="loadingDiv">
      <img src="/assets/loading-card-blue.svg" alt="Loading" />
      <div className="txtDiv">
        <strong>
          {age === 0 || age === '0'
            ? '10대 미만'
            : age === '70'
            ? '70대 이상'
            : `${age}대`}
        </strong>{' '}
        <strong>
          <strong>{relation || relationInputValue}</strong> &quot;{name}&quot;
        </strong>
        님에게 보낼 용돈
        <p>적당한 금액을 찾는중...</p>
      </div>
    </div>
  );
};
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
    background-color: var(--sub-color);
  }
`;
const QnaWrapper = styled.div`
  strong {
    color: var(--sub-color);
    font-size: 38px;
    font-weight: 900;
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
    background-color: rgba(34, 127, 139, 0.2);
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
  /* 이름 */
  .q1Div {
    .q1Contents {
      p {
        margin-bottom: 70px;
      }
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
      }
    }
  }
  /* 관계 */
  .q2Div {
    input {
      background-color: #dccfcd;
    }
    p {
      margin-bottom: 30px;
    }
  }
  /* 나이 */
  .q3Div {
    input {
      background-color: #dccfcd;
    }
    small {
      font-size: 30px;
      color: #bdbdbd;
      display: block;
      margin-bottom: 60px;
    }
  }
  /* 카테고리 */
  .q5Div {
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

  .loadingDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 32px;
    img {
      margin-top: 120px;
      width: 250px;
    }

    .txtDiv {
      margin-top: 40px;
      text-align: center;
      line-height: 70px;
      h2 {
        font-size: 40px;
        font-weight: 700;
      }
      p {
        margin-top: 90px;
        font-weight: 700;
      }
    }
  }

  .resultDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 32px;
    img {
      margin-top: 120px;
      width: 250px;
    }
    .txtDiv {
      margin-top: 20px;
      text-align: center;
      line-height: 70px;
      h2 {
        font-size: 44px;
        font-weight: 900;
        margin-bottom: 10px;
      }
      span {
        font-weight: 700;
      }
    }
    button {
      margin-top: 120px;
      padding: 15px 45px;
      border-radius: 10px;
      background-color: var(--sub-color);
      font-size: 26px;
      font-weight: 700;
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
  background-color: ${(props) => (props.selected ? 'var(--sub-color)' : 'white')};
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
    background-color: ${(props) => (props.selected ? 'var(--sub-color)' : '#eee')};
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
    background-color: var(--sub-color);
    border-radius: 50%;
    cursor: pointer;
    transition: left 1s ease-in-out;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    background: linear-gradient(
      to right,
      var(--sub-color) ${({ value, maxValue }) => (value / maxValue) * 100}%,
      white ${({ value, maxValue }) => (value / maxValue) * 100}%
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
