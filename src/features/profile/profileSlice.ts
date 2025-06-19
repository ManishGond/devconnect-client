import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "User 1",
  username: "@userone",
  bio: "",
  github: "https://github.com/ManishGond/",
  profilePic: "",
  bannerPic: "https://raw.githubusercontent.com/ManishGond/devconnect-client/main/src/assets/banner.png",
  location: "India",
  connections: 452,
  openToWork: false,
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
