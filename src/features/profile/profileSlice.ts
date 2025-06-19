import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "User 1",
  username: "@userone",
  bio: "",
  github: "",
  profilePic: "https://avatars.githubusercontent.com/u/91088463?v=4",
  bannerPic: "https://media.licdn.com/dms/image/v2/D5616AQEzBfCoUOV1eg/profile-displaybackgroundimage-shrink_350_1400/B56ZeG.9AHHoAg-/0/1750316342683?e=1755734400&v=beta&t=F9YA4czxSrybONPvlQ-vKb_4Xu3x6Ldue4XSaWkg3N8",
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
