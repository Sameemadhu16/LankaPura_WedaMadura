import React from "react";
import landing3 from "../assets/Blog_Assets/blog2.jpeg";
import { ChevronDown } from "lucide-react";
import Cards2 from "../components/Blog_Compo/Cards";

const Blog = () => {
  const scrollToContent = () => {
    document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-hidden">
      <main
        className="relative flex flex-col items-center justify-center h-screen px-4 text-white bg-center bg-cover md:px-0"
        style={{ backgroundImage: `url(${landing3})` }}
      >
        <h1
          className="mb-4 text-4xl font-bold text-center md:text-5xl lg:text-5xl"
          style={{
            fontFamily: "'Merriweather', serif",
            fontWeight: 200,
          }}
        >
          Welcome To Lankapura Ayurweda Medical Center
        </h1>

        <p className="max-w-2xl px-4 mb-8 text-base text-center md:text-lg lg:text-xl">
  Which has found many successful medicines for many diseases, relying only on Herbs.
  <br />
  <strong>Dr. Tharanga Wickramasooriya</strong>
</p>

        <br />

        {/* Scroll Down Button */}
        <button
          onClick={scrollToContent}
          className="text-white transition-colors transform -translate-x-1/2 cursor-pointer lg:bottom-60 md:bottom-60 left-1/2 hover:text-gray-300 animate-bounce"
          aria-label="Scroll to content"
        >
          <ChevronDown size={50} />
        </button>
      </main>

      {/* Vcards Section */}
      <div id="content" className="px-4 md:px-0">
        <div className="max-w-6xl mx-auto text-center">
          <p
            className="mb-6 text-base text-center md:text-md lg:text-lg"
            style={{
              color: "#006400",
              fontFamily: "'Playfair Display SC', serif",
              fontSize: "1.3rem",
              fontWeight: 540,
              marginTop: "2rem",
            }}
          >
            {"W e   c u r e   d i s e a s e s    w i t h   H e l a m e d i c i n e    i n    S r i L a n k a"
              .split("")
              .map((char, index) => (
                <span
                  key={index}
                  style={{ marginRight: char === " " ? "0.3em" : "0.001em" }}
                >
                  {char}
                </span>
              ))}
          </p>
          <p className="px-4 mb-6 text-base text-black md:text-md lg:text-lg">
            Our team of experts focuses on providing holistic treatments to
            ensure your complete well-being. Discover the difference of truly
            personalized care.
          </p>
        </div>

        <Cards2 />
      </div>
    </div>
  );
};

export default Blog;
