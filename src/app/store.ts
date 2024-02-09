import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchSlice from './redux/slices/searchSlice/searchSlice';
import { tourApi } from './redux/APIs/tourApi';
import { timeApi } from './redux/APIs/timeApi';
import { transportationApi } from './redux/APIs/transportationApi';
export const store = configureStore({
  reducer: {
    search:searchSlice,
    [tourApi.reducerPath]:tourApi.reducer,
    [timeApi.reducerPath]:timeApi.reducer,
    [transportationApi.reducerPath]:transportationApi.reducer,
  },
  middleware:(buildGetDefaultMiddleware)=>buildGetDefaultMiddleware().concat(timeApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
