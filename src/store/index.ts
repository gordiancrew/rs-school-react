import { configureStore } from '@reduxjs/toolkit';
import { mortiApi } from './api/morti.api';

export const store = configureStore({
  reducer: {
    [mortiApi.reducerPath]: mortiApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mortiApi.middleware),
});
