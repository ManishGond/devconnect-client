import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: { id: string; username: string } | null;
  token: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{
        user: { id: string; username: string };
        token: string;
      }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
