import React from 'react';

type MessageType = {
  content: string;
  type: 'sent' | 'received';
};

type MessagesListProps = { activeChatMessages: MessageType[] };

function MessagesList({ activeChatMessages }: MessagesListProps) {
  return (
    <>
      {activeChatMessages.map((msg, index) => (
        <div key={index} className={msg.type}>
          {msg.content}
        </div>
        /* <div className='sent'>test</div>
        <div className='received'>idk</div>
        <div className='sent'>test</div>
        <div className='received'>idk</div>
        <div className='sent'>test</div>
        <div className='received'>idk</div>
        <div className='sent'>test</div>
        <div className='received'>idk</div>
        <div className='sent'>test</div>
        <div className='received'>idk</div>
        <div className='sent'>test</div>
        <div className='received'>idk</div>
        <div className='sent'>test</div> */
      ))}
    </>
  );
}

export default MessagesList;
