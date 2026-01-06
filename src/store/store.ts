import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import batchSlice from './slices/batchSlice';
import blockchainSlice from './slices/blockchainSlice';
import uiSlice from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    batches: batchSlice,
    blockchain: blockchainSlice,
    ui: uiSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        ignoredPaths: ['auth.user.createdAt', 'batches.items', 'blockchain.transactions'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;