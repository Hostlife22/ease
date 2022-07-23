import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { swap } from '../../utils';
import { defaultLamps } from '../../utils/data';
import { ILamp, ILampsState } from './lamps.interface';
import { getAllLamps } from './lampsAsyncThunk';

const initialState: ILampsState = {
  lamps: [],
  selectedLamp: null,
  loading: false,
  error: '',
};

export const lampsSlice = createSlice({
  name: 'lamps',
  initialState,
  reducers: {
    setLamp: (state, action: PayloadAction<ILamp>) => {
      state.selectedLamp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllLamps.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllLamps.fulfilled, (state, action: PayloadAction<ILamp[]>) => {
        state.lamps = action.payload.length >= 3 ? swap(action.payload, 1, 2) : action.payload;
        state.selectedLamp = action.payload.length ? action.payload[0] : null;
        state.loading = false;
      })
      .addCase(getAllLamps.rejected, (state, action: PayloadAction<unknown>) => {
        state.error = String(action.payload);
        state.lamps = defaultLamps;
        state.selectedLamp = defaultLamps[0];
        state.loading = false;
      });
  },
});

export const { setLamp } = lampsSlice.actions;

export const selectLamps = (state: RootState) => state.lamps.lamps;
export const selectLamp = (state: RootState) => state.lamps.selectedLamp;
export const selectLoading = (state: RootState) => state.lamps.loading;

export default lampsSlice.reducer;
