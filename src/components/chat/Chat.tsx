import { useState, useRef, useEffect } from 'react';
import SendMessageForm from './SendMessageForm';
import { useAppSelector } from '../../hooks/app';
import { ChatState } from '../../types';
import Messages from './Messages';
import gravatar from '../../assets/gravatar.png';
import styled from 'styled-components';
import { scrollStyles } from '../../styles/helpers';
import chatBg from '../../assets/chatBg.png';

function Chat() {
  const [chatState, setChatState] = useState<ChatState>({});
  const activeChatNumber = useAppSelector((state) => state.activeChat.number);
  let activeChatMessages;
  if (activeChatNumber) {
    activeChatMessages = chatState[activeChatNumber] || [];
  }
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [activeChatMessages]);

  return (
    <>
      <Header>
        <img src={gravatar} alt='profile' />
        <p>{activeChatNumber}</p>
      </Header>
      <Wrapper className={`${activeChatNumber ? '' : 'intro'}`}>
        {activeChatNumber ? (
          <>
            <div className='chat-container'>
              <div className='background'></div>
              <div className='chat' ref={messagesContainerRef}>
                {activeChatMessages && (
                  <Messages activeChatMessages={activeChatMessages} />
                )}
              </div>
            </div>
          </>
        ) : (
          <div className='no-chat'>
            Send and receive messages without keeping your phone online.
          </div>
        )}
      </Wrapper>
      {activeChatNumber && (
        <SendMessageForm
          setChatState={setChatState}
          activeChatNumber={activeChatNumber}
        />
      )}
    </>
  );
}

const Wrapper = styled.div`
  border-left: 1px solid #e9edef;
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  background-color: #efeae2;
  transition: background-color 0.3s ease;
  padding-bottom: 1rem;
  position: relative;

  .background {
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-image: url(${chatBg});
    background-repeat: repeat;
    background-size: auto;
  }

  &.intro {
    background-color: #f0f2f5;
  }
  .chat-container {
    height: 100%;
    display: flex;
  }
  .chat {
    width: 100%;
    position: relative;
    ${scrollStyles}
    &::-webkit-scrollbar-track {
      background-color: #efeae2;
    }
  }
  .no-chat {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 250px;
    transform: translate(-50%, -50%);
  }
`;

const Header = styled.div`
  height: 6rem;
  width: 100%;
  background-color: #f0f2f5;
  padding: 1rem 1.6rem;
  display: flex;
  align-items: center;
  border-left: 1px solid #d1d7db;
  img {
    width: 4rem;
    height: 4rem;
    border: 1px solid grey;
    border-radius: 50%;
    margin-right: 1.5rem;
  }
`;

export default Chat;
