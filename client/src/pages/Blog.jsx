import React from "react";
import Header from "../components/headerb";
import landing from "../assets/landing_banner.jpg";
import Vcard from "../components/vcard";
import Footer from "../components/footerb";
import landing3 from "../assets/landing3.jpeg";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <Header />
      <main
        className="flex flex-col items-center justify-center h-screen text-white bg-center bg-cover"
        style={{ backgroundImage: `url(${landing3})` }}
      >
        <h1
          className="mb-4 text-4xl font-bold animated-title"
          style={{
            fontFamily: "'Playfair Display SC', serif",
            fontWeight: 700,
            color: "#2E8B57", // Deep Green for a natural Ayurvedic feel
          }}
        >
          Welcome To Lankapura Ayurweda Medical Center
        </h1>

        <p className="max-w-2xl mb-8 text-lg text-center">
          Which has found many successful medicines for many diseases, raying
          only on Herbs.<br></br>
          <strong>Dr Tharanga Wickramasooriya</strong>
        </p>

        {/* <button className="explore-button">
                Explore Our Services
                <span className="animated-arrow"></span>
              </button> */}
        <div className="animated-arrow-container">
          <span className="animated-arrow"></span> {/* Retain only the arrow */}
        </div>
      </main>

       

      {/* Vcards Section */}

      <div className="grid w-full grid-cols-1 gap-10 px-12 md:grid-cols-3">
        <Vcard size="large" />
        <Vcard size="large" />
        <Vcard size="large" />
        <Vcard size="large" />
        <Vcard size="large" />
        <Vcard size="large" />
        <Vcard size="large" />
        <Vcard size="large" />
        <Vcard size="large" />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
