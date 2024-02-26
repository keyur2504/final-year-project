// import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, userLogin, userRegister } from "./authActions";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  user: null,
  token,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //login User
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    // Register User
    builder.addCase(userRegister.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload && action.payload.user) {
        state.user = action.payload.user;
      }
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //Current User
    builder.addCase(getCurrentUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
    });
    builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default authSlice;
