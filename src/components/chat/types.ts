export type MessageType = {
  content: string;
  type: 'sent' | 'received';
};

export type ChatState = {
  [key: number]: MessageType[];
};
