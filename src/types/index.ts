export type MessageType = {
  content: string;
  type: 'sent' | 'received';
};

export type ChatState = {
  [key: number]: MessageType[];
};

// for catch{} type assertion if needed!
export type CustomError = Error & {
  message: string;
};
