import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/articles/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched articles:", data.articles);
        setArticles(data.articles);
      })
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div className="container p-6 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">Latest Articles</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article._id}
            className="overflow-hidden transition-shadow bg-white border border-gray-200 shadow-lg cursor-pointer rounded-xl hover:shadow-2xl"
            onClick={() => navigate(`/article/${article._id}`)}
          >
            <div className="relative">
              {article.image && (
                <img
                  src={`http://localhost:5000/${article.image.replace("\\", "/")}`}
                  alt={article.topic}
                  className="object-cover w-full h-52"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h2 className="text-xl font-semibold text-white">{article.topic}</h2>
              </div>
            </div>
            <div className="p-5">
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {article.description.split(".")[0]}...
              </p>
              <button
                className="w-full px-5 py-2 mt-4 text-white transition-all bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/article/${article._id}`);
                }}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
