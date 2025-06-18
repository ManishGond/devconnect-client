import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import PostCard from "../components/PostCard";
import { useState, useEffect } from "react";
import type { Post } from "../features/post/postSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "../components/LoadingSpinner";
import SkeletonPostCard from "../components/SkeletonPostCard";

const Feed = () => {
  const allPosts = useSelector((state: RootState) => state.post.posts);
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchCount = 4;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisiblePosts(allPosts.slice(0, fetchCount));
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [allPosts]);

  const fetchMoreData = () => {
    const nextPosts = allPosts.slice(
      visiblePosts.length,
      visiblePosts.length + fetchCount
    );
    setVisiblePosts((prev) => [...prev, ...nextPosts]);
  };


  if (loading) {
    return (
      <div className="flex-1 items-center justify-center">
        <div className="w-full mx-auto p-4 mt-1">
          { [1, 2, 3].map((n) => (
            <SkeletonPostCard key={ n } />
          )) }
        </div>
      </div>
    );
  }

  return (
    <div
      id="scrollableDiv"
      className="h-[80vh] overflow-y-auto mx-4 p-4 mt-6 bg-white dark:bg-gray-800 text-black dark:text-white rounded shadow scrollbar-hide overflow-x-auto"
    >

      <h2 className="text-xl mb-4 text-center">Feed</h2>
      <InfiniteScroll
        dataLength={ visiblePosts.length }
        next={ fetchMoreData }
        hasMore={ visiblePosts.length < allPosts.length }
        loader={ <LoadingSpinner /> }
        endMessage={
          <p className="text-center mt-4 text-gray-500 dark:text-gray-400">
            Yay! You have seen it all 😊
          </p>
        }
        scrollableTarget="scrollableDiv" // super important!
      >
        { visiblePosts.map((post) => (
          <PostCard key={ post.id } post={ post } />
        )) }
      </InfiniteScroll>
    </div>
  );

};

export default Feed;

