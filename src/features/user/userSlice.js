import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  email: '',
  status: 'idle',
  loggedIn: false,
  loginFailed: false
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

export const logoutAsync = createAsyncThunk(
  'user/logout',
  async () => {
    const response = await axios({
      method: 'post',
      url: 'https://0e95fd4f-620f-4d03-9de4-336c6201a8a4.mock.pstmn.io'
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
        state.status = 'success';
        state.email = action.payload.email;
        state.loggedIn = true;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.email = '';
        state.loggedIn = false;
        state.loginFailed = true;
      })
      .addCase(logoutAsync.pending, (state) => {
        state.status = 'loading';
        state.loggedIn = true;
      })
      .addCase(logoutAsync.fulfilled, (state, action) => {
        console.log(action.payload)
        state.status = 'success';
        state.email = '';
        state.loggedIn = false;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.loggedIn = true;
      })
  },
});

export const userSelector = (state) => state.user;

export default userSlice.reducer;