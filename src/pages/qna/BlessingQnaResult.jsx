import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { postBlessingMent } from '../../api/postBlessingMent';

const BlessingQnaResult = () => {
  const location = useLocation();
  // const formInfo = location.state.formData;
  const response = location.state.res.choices[0].message.content;
  const [selectedMessage, setSelectedMessage] = useState();
  const [chat, setChat] = useState([]);
  const [isFolded, setIsFolded] = useState(false);
  const [isActive, setIsActive] = useState({
    어조: false,
    관계: false,
    상황: false,
    나이: false,
  });

  // // 채팅 답변 받는 함수
  // const fetchServerResponse = async () => {
  //   postBlessingMent((res)=>{
  //   })
  //   const data = await response.json();
  //   setChat([...chat, data]);
  // };
  // const handleRecreate = () => {
  //   if (Object.values(isActive).some((value) => value)) {
  //     fetchServerResponse();
  //   }
  // };

  const handleClick = (button) => {
    setIsActive({ ...isActive, [button]: !isActive[button] });
  };

  // 덕담 공유하기 버튼
  const [isShareActive, setIsShareActive] = useState(false);
  const [showShareButton, setShowShareButton] = useState(true);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleChatMessageClick = (msg) => {
    if (msg.sender === 'server') {
      if (selectedMessage === msg) {
        setIsShareActive(false);
        setSelectedMessage(null);
      } else {
        setIsShareActive(true);
        setSelectedMessage(msg);
      }
    }
  };
  const handleShareClick = () => {
    if (isShareActive) {
      setIsShareActive(true);
      setShowShareOptions(true);
      setShowShareButton(false);
    }
  };

  const handleBackClick = () => {
    setShowShareOptions(false);
    setShowShareButton(true);
  };
  useEffect(() => {
    let initialChat = [];

    // response를 채팅 로그에 추가
    initialChat.push({
      sender: 'server',
      text: response,
    });

    setChat(initialChat);
  }, []);

  // 카카오톡 공유하기
  const handleKakaoClick = () => {
    // 카카오톡 공유하기
    window.Kakao.init('ab36dcefbb0413d6fa467641c2864216');
    window.Kakao.Link.sendDefault({
      objectType: 'text',
      text: selectedMessage,
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
      },
    });
  };

  // 클립보드에 복사
  const [toastVisible, setToastVisible] = useState(false);
  const handleCopyClick = () => {
    navigator.clipboard.writeText(selectedMessage.text);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000); // 3초 후 메시지 숨김
  };
  return (
    <Wrapper>
      <header>
        <img src="/assets/blessingTxtOrange.svg" alt="" />
      </header>
      {toastVisible && <ToastMessage>클립보드에 복사되었습니다</ToastMessage>}
      <ChatBox>
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${
              msg.sender === 'server' ? 'server-message' : 'user-message'
            }`}
            style={{
              backgroundColor: msg === selectedMessage ? '#37392E' : undefined,
              color: msg === selectedMessage ? 'white' : undefined,
            }}
            onClick={() => handleChatMessageClick(msg)}
          >
            {msg.text}
          </div>
        ))}
      </ChatBox>
      <FoldableArea isFolded={isFolded}>
        <FoldBar
          onClick={() => {
            setIsFolded(!isFolded);
          }}
        ></FoldBar>
        <ContentWrapper isFolded={isFolded}>
          <p>
            덕담을 원하는 방식으로 자유롭게 수정해보세요. <br />
            이전의 덕담 내역은 유지됩니다.
          </p>
          <div className="toneGroups">
            <ToneButton onClick={() => handleClick('어조')} isActive={isActive.어조}>
              어조
            </ToneButton>
            <ToneButton onClick={() => handleClick('관계')} isActive={isActive.관계}>
              관계
            </ToneButton>
            <ToneButton onClick={() => handleClick('상황')} isActive={isActive.상황}>
              상황
            </ToneButton>
            <ToneButton onClick={() => handleClick('나이')} isActive={isActive.나이}>
              나이
            </ToneButton>
          </div>
          <div className="btnGroups">
            <EmphasizeBtn
              // onClick={handleRecreate}
              isActive={Object.values(isActive).some((value) => value)}
            >
              강조해서 다시 만들기
            </EmphasizeBtn>
            <button className="remakeBtn">다시만들기</button>
            {showShareButton && (
              <ShareBtn onClick={handleShareClick} isActive={isShareActive}>
                덕담 공유하기
              </ShareBtn>
            )}
            {/* //! 카카오톡 공유하기 기능, 클립보드 복사 기능 */}
            {showShareOptions && (
              <>
                <ShareOptions>
                  <div className="imgGroups">
                    <img
                      src="/assets/kakao.svg"
                      alt="Share option 1"
                      onClick={handleKakaoClick}
                    />
                    <img
                      src="/assets/clipboard.svg"
                      alt="Share option 2"
                      onClick={handleCopyClick}
                    />
                  </div>
                  <p>
                    <span>공유 방식</span>을 선택하세요
                  </p>
                </ShareOptions>
                <BackBtn onClick={handleBackClick}>이전으로</BackBtn>
              </>
            )}
          </div>
        </ContentWrapper>
      </FoldableArea>
    </Wrapper>
  );
};

export default BlessingQnaResult;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  header {
    background-color: #fcfafa;
    width: 100%;
    img {
      width: 450px;
      display: block;
      padding: 50px 0;
      margin: 0 auto;
    }
  }
`;

const ChatBox = styled.div`
  width: 100%;
  height: 600px;
  padding: 50px 40px;
  flex-grow: 1;
  transition: all 0.5s ease-in-out;
  overflow-y: auto;
  .chat-message {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .server-message {
    width: 520px;
    background-color: #f2f2f2;
    color: black;
    margin-right: auto;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 30px 40px;
    font-size: 26px;
    line-height: 30px;
  }
  .user-message {
    background-color: var(--main-color);
    color: white;
    margin-left: auto;
  }
`;

const FoldableArea = styled.div`
  position: relative;
  overflow: hidden;
  transition: height 0.5s ease-in-out;
  height: ${(props) => (props.isFolded ? '50px' : '500px')};
  background: #fef0ea;
  text-align: center;
  p {
    color: #979393;
    font-size: 22px;
    line-height: 25px;
    margin-bottom: 20px;
  }
  .toneGroups {
    display: flex;
    gap: 25px;
    margin-bottom: 15px;
    justify-content: center;
  }

  .btnGroups {
    .remakeBtn {
      display: block;
      background-color: var(--main-color);
      color: white;
      padding: 5px 10px;
      font-size: 24px;
      border-radius: 10px;
      margin: 0 auto 30px auto;
    }
    .shareTxt {
      color: black;

      span {
        font-weight: bolder;
      }
    }
  }
`;
const ContentWrapper = styled.div`
  opacity: ${(props) => (props.isFolded ? '0' : '1')};
  transition: opacity 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const FoldBar = styled.div`
  height: ${(props) => (props.isFolded ? '50px' : '500px')};
  left: 430px;
  width: 100px;
  height: 10px;
  margin: 16px auto;
  border-radius: 10px;
  background-color: #dccfcd;
  margin-bottom: 30px;
  cursor: pointer;
`;
const ToneButton = styled.button`
  background-color: ${(props) => (props.isActive ? `var(--main-color)` : 'white')};
  color: ${(props) => (props.isActive ? 'white' : 'black')};
  padding: 3px 20px;
  border-radius: 15px;
  font-size: 20px;
`;
const EmphasizeBtn = styled.button`
  background-color: ${(props) => (props.isActive ? 'var(--main-color)' : '#b5b5b5')};
  color: white;
  padding: 5px 10px;
  font-size: 24px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const ShareBtn = styled.button`
  background-color: ${(props) => (props.isActive ? 'var(--main-color)' : '#b5b5b5')};
  color: white;
  padding: 5px 10px;
  font-size: 28px;
  border-radius: 10px;
  margin-bottom: 15px;
`;
const ShareOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .imgGroups {
    display: flex;
    gap: 20px;
  }
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-bottom: 15px;
    cursor: pointer;
  }
  p {
    color: black;
  }
  span {
    font-weight: bolder;
  }
`;

const BackBtn = styled.button`
  background-color: var(--main-color);
  color: white;
  padding: 5px 10px;
  font-size: 24px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const ToastMessage = styled.div`
  position: fixed;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  background: #37392e;
  color: #fff;
  padding: 10px 30px;
  border-radius: 5px;
`;
