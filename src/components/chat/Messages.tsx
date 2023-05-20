import React from 'react';
import styled from 'styled-components';
import { MessageType } from '../../types';
import TestMessages from './TestMessages';

type MessagesProps = { activeChatMessages: MessageType[] };

function Messages({ activeChatMessages }: MessagesProps) {
  return (
    <Wrapper>
      {/* <TestMessages /> */}
      {activeChatMessages.map((msg, index) => {
        const isFirstOfType =
          index === 0 || msg.type !== activeChatMessages[index - 1].type;

        const classNames = `${msg.type} ${
          isFirstOfType ? `first first-${msg.type}` : ''
        }`;

        return (
          <div key={index} className={`msg ${classNames}`}>
            <p>{msg.content}</p>
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;
  position: relative;
  height: 100%;

  .msg {
    margin-bottom: 0.2rem;
    padding: 0.6rem 0.7rem 1.5rem 0.9rem;
    text-align: left;
    max-width: 95%;
    border-radius: 0.8rem;

    p {
      white-space: pre-wrap;
    }

    &.sent {
      align-self: flex-end;
      background-color: #d9fdd3;
    }
    &.received {
      align-self: flex-start;
      background-color: #fff;
    }
    &.first {
      margin-top: 1.2rem;
      position: relative;

      ::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: -0.8rem;
        background-color: #d9fdd3;
        width: 0.8rem;
        height: 1.3rem;
        clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
      }

      &.received {
        border-top-left-radius: 0;
      }

      &.sent {
        border-top-right-radius: 0;
      }

      &.received::before {
        left: -0.7rem;
        right: unset;
        background-color: #fff;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
      }
    }
  }
`;

export default Messages;
