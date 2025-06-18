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
    { id: "11", user: "Elon Musk", content: "Mars mission in progress 🚀" },
    { id: "12", user: "Mark Zuckerberg", content: "Metaverse is the future!" },
    { id: "13", user: "Bill Gates", content: "Innovation in healthcare is essential." },
    { id: "14", user: "Sundar Pichai", content: "AI is transforming industries." },
    { id: "15", user: "Jeff Bezos", content: "Earth is the best planet. Let's take care of it." },
    { id: "16", user: "Goku", content: "Kamehamehaaa!" },
    { id: "17", user: "Vegeta", content: "It's over 9000!!" },
    { id: "18", user: "Doraemon", content: "I have a gadget for everything!" },
    { id: "19", user: "Iron Man", content: "Jarvis, deploy the suit." },
    { id: "20", user: "Captain America", content: "I can do this all day." },
    { id: "21", user: "Spiderman", content: "With great power comes great responsibility." },
    { id: "22", user: "Thanos", content: "Perfectly balanced, as all things should be." },
    { id: "23", user: "Deadpool", content: "Did someone break the 4th wall?" },
    { id: "24", user: "Shinchan", content: "Nene chan ke sath khelna hai!" },
    { id: "25", user: "Deku", content: "I will be the No.1 Hero!" },
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
