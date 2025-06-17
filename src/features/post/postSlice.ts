import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  id: string;
  user: string;
  content: string;
  image?: string;
}

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [
    { id: "1", user: "Manish", content: "Hello!" },
    { id: "2", user: "Meesho", content: "Shopp karo guys!!" },
    { id: "3", user: "Ash Ketchum", content: "First Post!" },
  ],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.unshift(action.payload);
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
