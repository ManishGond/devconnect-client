import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const NEWS_API = import.meta.env.VITE_NEWS_API;

const LeftSideBar = () => {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://gnews.io/api/v4/top-headlines?category=technology&token=${NEWS_API}`
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md space-y-4">
      <h3 className="font-semibold text-lg mb-4">🌐 Global Tech News</h3>
      <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
        { news.map((article, index) => (
          <li key={ index } className="flex flex-col space-y-1">
            <a
              href={ article.url }
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline text-blue-600 dark:text-blue-400"
            >
              { article.title }
            </a>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              { article.source.name } &middot; { moment(article.publishedAt).fromNow() }
            </div>
          </li>
        )) }
      </ul>
    </div>
  );
};

export default LeftSideBar;
