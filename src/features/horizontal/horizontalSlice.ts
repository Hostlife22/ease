import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { WindowSize } from '../../hooks/useWindowSize';
import { IHorizontalState } from './horizontal.interface';

const initialState: IHorizontalState = {
  size: {
    width: 0,
    height: 0,
  },
  isHorizontal: false,
};

export const horizontalSlice = createSlice({
  name: 'horizontal',
  initialState,
  reducers: {
    setSize: (state, action: PayloadAction<WindowSize>) => {
      state.size = action.payload;
      state.isHorizontal = state.size.width / state.size.height > 1.3;
    },
  },
});

export const { setSize } = horizontalSlice.actions;

export const selectHorizontal = (state: RootState) => state.size.isHorizontal;

export default horizontalSlice.reducer;
