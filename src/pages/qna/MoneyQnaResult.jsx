import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MoneyQnaResult = () => {
  const location = useLocation();
  const response = location.state.choices[0].message.content;
  const [chat, setChat] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState('');
  const [isShareActive, setIsShareActive] = useState(false);
  const navigate = useNavigate();

  // 다시 답변 받는 함수
  // const fetchServerResponse = async () => {
  //   const response = await fetch('/api/server-response');
  //   const data = await response.json();
  //   setChat([...chat, data]);
  // };
  useEffect(() => {
    let initialChat = [];

    // response를 채팅 로그에 추가
    initialChat.push({
      sender: 'server',
      text: response,
    });

    setChat(initialChat);
  }, []);
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

  // 추천금액 복사하기
  const [toastVisible, setToastVisible] = useState(false);
  const handleCopyClick = () => {
    if (selectedMessage) {
      // selectedMessage가 존재하는지 확인
      const amount = selectedMessage.text.match(/\d+/g).join('');
      navigator.clipboard.writeText(amount);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000); // 3초 후 메시지 숨김
    } else {
      alert('복사할 메시지를 선택해주세요.');
    }
  };
  return (
    <Wrapper>
      <header>
        <img src="/assets/money-txt.svg" alt="" />
      </header>

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
      {toastVisible && <ToastMessage>클립보드에 복사되었습니다</ToastMessage>}
      <BtnSection>
        <button onClick={handleCopyClick} disabled={!selectedMessage}>
          추천 금액 복사하기
        </button>
        <button
          onClick={() => {
            navigate('/moneyQna');
          }}
        >
          테스트 다시하기
        </button>
      </BtnSection>
    </Wrapper>
  );
};

export default MoneyQnaResult;

const Wrapper = styled.div`
  box-shadow: 0 0 0 10px orange;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(to bottom, #ffffff 20%, #e1eae9 80%);
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
  .bg {
    background: linear-gradient(to bottom, #ffffff 20%, #e1eae9 80%);
  }
`;

const ChatBox = styled.div`
  width: 1300px;
  height: 800px;
  padding: 50px 40px;
  margin: 100px auto 0 auto;
  transition: all 0.5s ease-in-out;
  overflow-y: auto;
  .chat-message {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .server-message {
    width: 580px;
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

const BtnSection = styled.section`
  width: 1300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 0 auto;
  button {
    padding: 10px 20px;
    color: white;
    font-size: 32px;
    border-radius: 10px;
  }
  button:first-of-type {
    background-color: #4fbdbd;
  }
  button:last-of-type {
    background-color: #417f95;
  }
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
