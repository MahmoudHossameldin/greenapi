import store from '../store';
import axios from 'axios';

type body = {
  number: number;
  message: string;
};

const baseUrl = 'https://api.green-api.com';

export const sendMessage = async ({ number, message }: body) => {
  const { idInstance, apiToken } = store.getState().credentials;

  try {
    await axios.post(
      `${baseUrl}/waInstance${idInstance}/SendMessage/${apiToken}`,
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
      `${baseUrl}/waInstance${idInstance}/ReceiveNotification/${apiToken}`
    );

    if (response.data.receiptId) {
      await axios.delete(
        `${baseUrl}/waInstance${idInstance}/DeleteNotification/${apiToken}/${response.data.receiptId}`
      );
    }

    if (
      response.data === null ||
      response.data.body.typeWebhook !== 'incomingMessageReceived'
    ) {
      throw new Error('No replies!');
    }

    return response.data;
  } catch (error: any) {
    if (error.message === 'No replies!') {
      throw error;
    } else {
      throw new Error('Failed to receive message. Please try again.');
    }
  }
};
