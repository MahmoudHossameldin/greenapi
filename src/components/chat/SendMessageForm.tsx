import React, { useState, useRef } from 'react';
import useInput from '../../hooks/useInput';
import { sendMessage } from '../../api';
import { ChatState } from '../../types';
import styled from 'styled-components';
import { scrollStyles } from '../../styles/helpers';
import ReceiveMessageButton from './ReceiveMessageButton';

type SendMessageFormProps = {
  setChatState: React.Dispatch<React.SetStateAction<ChatState>>;
  activeChatNumber: number;
};
type EnterBtnPress = React.KeyboardEvent<HTMLTextAreaElement>;
type FormSubmitEvent = React.FormEvent<HTMLFormElement> | EnterBtnPress;

function SendMessageForm({
  setChatState,
  activeChatNumber,
}: SendMessageFormProps) {
  const [message, setMessage, resetMessage] = useInput('');
  const [error, setError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: FormSubmitEvent) => {
    event.preventDefault();

    if (activeChatNumber && message) {
      try {
        sendMessage({ number: activeChatNumber, message });
        setChatState((prevState) => ({
          ...prevState,
          [activeChatNumber]: [
            ...(prevState[activeChatNumber] || []),
            { content: message, type: 'sent' },
          ],
        }));
        setError(null);
      } catch (error: any) {
        setError(error.message);
      }
    }

    resetMessage();
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (event: EnterBtnPress) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <Wrapper>
      <ReceiveMessageButton
        setChatState={setChatState}
        activeChatNumber={activeChatNumber}
      />
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <textarea
          ref={textareaRef}
          value={message}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          onChange={setMessage}
          placeholder='Type a message'
        />
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f0f2f5;
  padding: 1rem 0 1.5rem;

  form {
    width: 80%;
    margin: 0 auto;

    textarea {
      width: 100%;
      background-color: #fff;
      border: none;
      border-radius: 8px;
      resize: none;
      padding-top: 1rem;
      padding-left: 1rem;
      max-height: 10rem;

      ${scrollStyles}

      &:focus {
        outline: #fff;
      }
    }
  }
`;

export default SendMessageForm;
