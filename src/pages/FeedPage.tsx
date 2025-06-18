import { motion } from "framer-motion";
import Feed from "./Feed";
import AppLayout from "./AppLayout/AppLayout";
import ErrorBoundary from "../components/ErrorBoundary";
import CreatePost from "../components/CreatePost";

const FeedPage = () => {
  return (
    <AppLayout>
      <motion.div
        initial={ { opacity: 0, y: 20 } }
        animate={ { opacity: 1, y: 0 } }
        exit={ { opacity: 0, y: -20 } }
        transition={ { duration: 0.4 } }
      >
        <ErrorBoundary>
          <CreatePost />
          <Feed />
        </ErrorBoundary>
      </motion.div>
    </AppLayout>
  );
};

export default FeedPage;
