import React, { useState, useEffect } from 'react';
import { receiveMessage } from '../../api';
import { ChatState } from '../../types';
import styled from 'styled-components';

type ReceiveMessageButtonProps = {
  setChatState: React.Dispatch<React.SetStateAction<ChatState>>;
  activeChatNumber: number;
};

function ReceiveMessageButton({
  setChatState,
  activeChatNumber,
}: ReceiveMessageButtonProps) {
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState<boolean>(false);

  useEffect(() => {
    if (showError) {
      const timeout = setTimeout(() => {
        setShowError(false);
        setError(null);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [showError]);

  const handleReceiveMessage = async () => {
    try {
      const receivedNotification = await receiveMessage();
      console.log(receivedNotification);
      if (
        activeChatNumber &&
        receivedNotification.body.senderData.sender ===
          `${activeChatNumber}@c.us`
      ) {
        const receivedMessage =
          receivedNotification.body.messageData.extendedTextMessageData.text;
        setChatState((prevState) => ({
          ...prevState,
          [activeChatNumber]: [
            ...(prevState[activeChatNumber] || []),
            { content: receivedMessage, type: 'received' },
          ],
        }));
        setError(null);
      }
    } catch (error: any) {
      setError(error.message);
      setShowError(true);
    }
  };

  return (
    <Wrapper>
      {showError ? (
        <p>{error}</p>
      ) : (
        <button onClick={handleReceiveMessage}>Check replies...</button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 1rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  padding-bottom: 1rem;
  align-items: center;
  height: 2rem;

  button {
    border: none;
    background: none;
    color: #1717bc;
    cursor: pointer;
    z-index: 100;
    position: relative;

    &:focus {
      outline: none;
    }
  }
  p {
    color: #cb4242;
  }
`;

export default ReceiveMessageButton;
