import React, { useState } from 'react';
import { receiveMessage } from '../../api';
import { ChatState } from './types';

type ReceiveMessageButtonProps = {
  setChatState: React.Dispatch<React.SetStateAction<ChatState>>;
  activeChatNumber: number;
};

function ReceiveMessageButton({
  setChatState,
  activeChatNumber,
}: ReceiveMessageButtonProps) {
  const [error, setError] = useState<string | null>(null);

  const handleReceiveMessage = async () => {
    try {
      const receivedNotification = await receiveMessage();
      console.log(receivedNotification);
      if (
        activeChatNumber &&
        receivedNotification.body.typeWebhook === 'incomingMessageReceived' &&
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
    }
  };

  return (
    <div>
      <button onClick={handleReceiveMessage}>Check new message</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default ReceiveMessageButton;
