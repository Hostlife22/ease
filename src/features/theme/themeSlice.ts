import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IThemeState, Theme } from './theme.interface';

const initialState: IThemeState = {
  theme: Theme.Light,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const selectTeme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
