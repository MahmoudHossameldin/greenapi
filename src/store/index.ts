import { configureStore } from '@reduxjs/toolkit';
import credentialsSlice from './slices/credentialsSlice';
import activeChatSlice from './slices/activeChatSlice';

const store = configureStore({
  reducer: {
    credentials: credentialsSlice.reducer,
    activeChat: activeChatSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
