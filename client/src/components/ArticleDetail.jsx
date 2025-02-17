import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { Calendar, Clock } from "lucide-react";
import Header from "./headerb";
import img from "../assets/Profile.png";
import Header2 from "./header2";
import { Heart } from "lucide-react";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/articles/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!data.article) {
          throw new Error("Article not found");
        }
        setArticle(data.article);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown Date";
    return format(new Date(dateString), "MMMM dd, yyyy");
  };

  if (loading)
    return <div className="mt-10 text-center text-gray-600">Loading...</div>;
  if (error)
    return <div className="mt-10 text-center text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-[#FDF6F3]">
      <div className="sticky top-0 z-50 w-full shadow-md bg-white/80 backdrop-blur-md">
        <Header2 />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <main className="max-w-6xl px-4 py-12 mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h1 className="mb-4 font-serif text-4xl text-gray-800 md:text-5xl">
              {article?.topic}
            </h1>
            <div className="flex items-center gap-4 mb-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatDate(article?.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>10 min read</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6">
              <img
                src={img}
                alt="Author"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-800">Dr Tharanga Wickramasooriya</p>
                <p className="text-sm text-gray-600">Ayurvedic Expert</p>
              </div>
            </div>
            
          </div>
          <div className="order-1 md:order-2">
            {article.image && (
              <img
                src={`http://localhost:5000/${article.image.replace(
                  "\\",
                  "/"
                )}`}
                alt={article.title}
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            )}
          </div>
        </div>
        <div className="max-w-3xl px-4 py-12 mx-auto">
          {article?.description?.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-600 lea6ding-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="p-8 text-center bg-white shadow-sm rounded-xl">
        <Heart className="w-12 h-12 mx-auto mb-4 text-rose-500" />;
          <h3 className="mb-3 font-serif text-2xl text-gray-800">
            Start Your Mindfulness Journey Today
          </h3>
          <p className="mb-6 text-gray-600">
            Join our community and receive daily mindfulness tips and guided
            meditations.
          </p>
          <button className="px-8 py-3 text-white transition-colors rounded-full bg-rose-500 hover:bg-rose-600">
            Begin Your Practice
          </button>
        </div>
      </main>
    </div>
  );
};

export default ArticleDetail;
