import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dateSlice from '@slices/date/dateSlice';
export const store = configureStore({
  reducer: {
    date: dateSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
