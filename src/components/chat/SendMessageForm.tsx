import React, { useState } from 'react';
import useInput from '../../hooks/useInput';
import { sendMessage } from '../../api';
import { ChatState } from './types';

type SendMessageFormProps = {
  setChatState: React.Dispatch<React.SetStateAction<ChatState>>;
  activeChatNumber: number;
};

function SendMessageForm({
  setChatState,
  activeChatNumber,
}: SendMessageFormProps) {
  const [message, setMessage, resetMessage] = useInput('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Send new message:
        <input type='text' value={message} onChange={setMessage} />
      </label>
      <button type='submit'>Send</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default SendMessageForm;
