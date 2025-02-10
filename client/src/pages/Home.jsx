import React from 'react';
import Footer from '../components/footerb';
import Header from '../components/headerb';
import landing from '../assets/landing_banner.jpg';

const Home = () => {
  return (
    <div>
      <Header />
      <main
        className="flex flex-col items-center justify-center h-screen text-white bg-center bg-cover"
        style={{ backgroundImage: `url(${landing})` }}
      >
        {/* Main content goes here */}
        <h1 className="mb-4 text-4xl font-bold">Welcome to the Home Page</h1>
        <div className="mb-2 text-lg">dvknfdlvkjd</div>
        <div className="text-lg">sdafsdfsdf</div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

