import { useState } from 'react';
import SendMessageForm from './SendMessageForm';
import { useAppSelector } from '../../hooks/app';
import ReceiveMessageButton from './ReceiveMessageButton';
import { ChatState } from './types';
import MessagesList from './MessagesList';

function Chat() {
  const [chatState, setChatState] = useState<ChatState>({});
  const activeChatNumber = useAppSelector((state) => state.activeChat.number);
  let activeChatMessages;
  if (activeChatNumber) {
    activeChatMessages = chatState[activeChatNumber] || [];
  }

  if (!activeChatNumber) return <div>Start a conversation!</div>;
  console.log(activeChatMessages);

  return (
    <div>
      <p>active chat number: {activeChatNumber}</p>
      <SendMessageForm
        setChatState={setChatState}
        activeChatNumber={activeChatNumber}
      />
      <div className='conversation'>
        {activeChatMessages && (
          <MessagesList activeChatMessages={activeChatMessages} />
        )}
      </div>
      <ReceiveMessageButton
        setChatState={setChatState}
        activeChatNumber={activeChatNumber}
      />
    </div>
  );
}

export default Chat;
