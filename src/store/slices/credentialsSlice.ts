import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  idInstance: string;
  apiToken: string;
}

const initialState: FormState = {
  idInstance: '',
  apiToken: '',
};

const credentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    setIdInstance: (state, action: PayloadAction<string>) => {
      state.idInstance = action.payload;
    },
    setApiToken: (state, action: PayloadAction<string>) => {
      state.apiToken = action.payload;
    },
  },
});

export const { setIdInstance, setApiToken } = credentialsSlice.actions;

export default credentialsSlice;
