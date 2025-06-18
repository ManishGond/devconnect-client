import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import type { RootState } from "../app/store";
import type { Post } from "../features/post/postSlice";
import SkeletonPostCard from "../components/SkeletonPostCard";
import PostCard from "../components/PostCard";
import { Helmet } from "react-helmet-async";

const FETCH_COUNT = 4; // Consistent fetch count

const Feed = () => {
  const allPosts: Post[] = useSelector((state: RootState) => state.post.posts);

  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisiblePosts(allPosts.slice(0, FETCH_COUNT));
      setLoading(false);
    }, 1000); // Simulate initial loading delay

    return () => clearTimeout(timer);
  }, [allPosts]);

  const fetchMoreData = () => {
    setIsFetchingMore(true);
    setTimeout(() => {
      const nextPosts = allPosts.slice(
        visiblePosts.length,
        visiblePosts.length + FETCH_COUNT
      );
      setVisiblePosts((prev) => [...prev, ...nextPosts]);
      setIsFetchingMore(false);
    }, 1000); // Simulate API delay
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
    <>
      <Helmet>
        <title>DevConnect | Feed</title>
        <meta name="description" content="See what everyone is talking about on DevConnect. Latest posts from your network." />
      </Helmet>

      <div className="w-full p-4 bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow scrollbar-hide">
        <InfiniteScroll
          dataLength={ visiblePosts.length }
          next={ fetchMoreData }
          hasMore={ visiblePosts.length < allPosts.length }
          loader={
            isFetchingMore && (
              <div className="w-full mx-auto p-4 mt-1">
                <SkeletonPostCard />
                <SkeletonPostCard />
              </div>
            )
          }
          endMessage={
            <p className="text-center mt-4 text-gray-500 dark:text-gray-400">
              Yay! You have seen it all 😊
            </p>
          }
        >
          { visiblePosts.map((post) => (
            <PostCard key={ post.id } post={ post } />
          )) }
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Feed;
