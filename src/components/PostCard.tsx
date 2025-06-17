import type { Post } from "../features/post/postSlice";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div>
      <h3></h3>
      <p></p>
      { post.image && (
        <img src={ post.image } alt="Post" className="w-full rounded mt-2" />
      ) }
    </div>
  );
};

export default PostCard;
