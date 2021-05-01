import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  email: '',
  status: 'idle',
}

export const loginAsync = createAsyncThunk(
  'user/login',
  async (phone, password) => {
    const response = await axios({
      method: 'post',
      url: 'https://0e95fd4f-620f-4d03-9de4-336c6201a8a4.mock.pstmn.io',
      data: {
          phone,
          password
      }
    });
    console.log(response.data)
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      // Reducer comes here
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        console.log(action.payload)
        state.status = 'success';
        state.email = action.payload.email;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.email = '';
      })
  },
});

export const userSelector = (state) => state.user;

export default userSlice.reducer;