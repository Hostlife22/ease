import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import horizontalReducer from '../features/horizontal/horizontalSlice';
import lampReducer from '../features/lamps/lampsSlice';
import themeReducer from '../features/theme/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    lamps: lampReducer,
    size: horizontalReducer,
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

export default store;
