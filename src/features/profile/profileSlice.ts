import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "User 1",
  username: "@userone",
  bio: "",
  github: "https://github.com/ManishGond/",
  profilePic: "https://avatars.githubusercontent.com/u/91088463?v=4",
  bannerPic: "https://raw.githubusercontent.com/ManishGond/devconnect-client/main/src/assets/banner.png",
  location: "India",
  connections: 452,
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
