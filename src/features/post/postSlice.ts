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
    { id: "4", user: "Meesho", content: "First Post!" },
    { id: "5", user: "Pikachu", content: "Pika Pika!" },
    { id: "6", user: "Naruto", content: "Believe it!" },
    { id: "7", user: "Luffy", content: "I'm gonna be King of the Pirates!" },
    { id: "8", user: "Tony Stark", content: "I am Iron Man." },
    { id: "9", user: "Batman", content: "I'm Batman." },
    { id: "10", user: "Superman", content: "Up, up, and away!" },
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
