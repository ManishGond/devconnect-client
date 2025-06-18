import Feed from "./Feed";
import AppLayout from "./AppLayout/AppLayout";
import ErrorBoundary from "../components/ErrorBoundary";

const FeedPage = () => {
  return (
    <AppLayout>
      <ErrorBoundary>
        <Feed />
      </ErrorBoundary>
    </AppLayout>
  );
};

export default FeedPage;
