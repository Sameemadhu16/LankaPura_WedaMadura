import React from "react";
import Header from "../components/headerb";
import landing3 from "../assets/landing3.jpeg";
import Cards from "../components/Cards";
import Footer from "../components/footerb";
import { ChevronDown } from "lucide-react";

const Blog = () => {
  const scrollToContent = () => {
    document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <main
        className="relative flex flex-col items-center justify-center h-screen text-white bg-center bg-cover"
        style={{ backgroundImage: `url(${landing3})` }}
      >
        <h1 className="relative mb-4 text-4xl font-bold text-white font-Libre Baskerville animated-title f ">
          <span className="relative inline-block">
            Welcome To Lankapura Ayurweda Medical Center
            <span className="absolute top-0 left-0 w-full h-[20%] text-black overflow-hidden">
              Welcome To Lankapura Ayurweda Medical Center
            </span>
          </span>
        </h1>

        <p className="max-w-2xl mb-8 text-lg text-center">
          Which has found many successful medicines for many diseases, relying
          only on Herbs.
          <br />
          <strong>Dr Tharanga Wickramasooriya</strong>
        </p>

        {/* Scroll Down Button */}
        <button
          onClick={scrollToContent}
          className="absolute text-white transition-colors transform -translate-x-1/2 cursor-pointer bottom-60 left-1/2 hover:text-gray-300 animate-bounce"
          aria-label="Scroll to content"
        >
          <ChevronDown size={48} />
        </button>
      </main>

      {/* Vcards Section */}
      <div id="content">
        <Cards />
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
