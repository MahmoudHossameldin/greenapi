import store from '../store';
import axios from 'axios';

type body = {
  number: number;
  message: string;
};

export const sendMessage = async ({ number, message }: body) => {
  const { idInstance, apiToken } = store.getState().credentials;

  try {
    const response = await axios.post(
      `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiToken}`,
      {
        chatId: `${number}@c.us`,
        message,
      }
    );
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};

export const receiveMessage = async () => {
  const { idInstance, apiToken } = store.getState().credentials;

  try {
    const response = await axios.get(
      `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiToken}`
    );

    if (response.data === null) {
      throw new Error('No new messages');
    }

    if (response.data.receiptId) {
      const secondResponse = await axios.delete(
        `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiToken}/${response.data.receiptId}`
      );
    }

    return response.data;
  } catch (error) {
    console.error('Error receiving message:', error);
    throw new Error('Failed to receive message. Please try again.');
  }
};
