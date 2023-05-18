import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ActiveChat = {
  number: number | null;
};

const initialState: ActiveChat = {
  number: null,
};

const numberSlice = createSlice({
  name: 'number',
  initialState,
  reducers: {
    changeActiveChat(state, action: PayloadAction<number>) {
      state.number = action.payload;
    },
  },
});

export const { changeActiveChat } = numberSlice.actions;

export default numberSlice;
