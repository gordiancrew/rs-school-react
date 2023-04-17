import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard } from 'types/i-card';
import { mortiApi } from './api/morti.api';

export interface TesstState {
  value: ICard[];
}

const initialState: TesstState = {
  value: [],
};
export const tesstSlice = createSlice({
  name: 'tesst',
  initialState,
  reducers: {
    tesstValue: (state, action: PayloadAction<ICard[]>) => {
      state.value = action.payload;
    },
  },
});
export const { tesstValue } = tesstSlice.actions;

export const store = configureStore({
  reducer: {
    tesst: tesstSlice.reducer,
    [mortiApi.reducerPath]: mortiApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mortiApi.middleware),
});
