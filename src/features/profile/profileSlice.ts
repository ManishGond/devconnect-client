import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface ProfileState{
  name: string,
  username: string,
  bio: string,
  github: string,
  profilePic: string,
}

const initialState: ProfileState = {
  name: "Manish Gond",
  username: "manishgond",
  bio: 'Full Stack Developer 🚀',
  github: "https://github.com/manishgond",
  profilePic: 'https://avatars.githubusercontent.com/u/91088463?v=4'
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers:{
    updateProfile: (state, action:PayloadAction<Partial<ProfileState>>) => {
      return {...state, ...action.payload};
    }
  }
})

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;