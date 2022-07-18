import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ILamp } from './lamps.interface';

export const getAllLamps = createAsyncThunk('lamps/fetch', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<ILamp[]>(
      'https://private-anon-55da72830f-lampshop.apiary-mock.com/lamps',
    );

    return data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return rejectWithValue(e.message);
    }

    if (e instanceof Error) {
      return rejectWithValue(e.message);
    }

    return rejectWithValue('different error than axios');
  }
});
