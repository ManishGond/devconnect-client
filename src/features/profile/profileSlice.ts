import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Manish Gond",
  username: "manishgond",
  bio: "",
  github: "",
  profilePic: "",
  bannerPic: "",
  location: "",
  connections: 0,
  openToWork: false, // ✅ New field added
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
