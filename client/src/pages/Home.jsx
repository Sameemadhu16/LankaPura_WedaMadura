import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import landing from '../assets/landing_banner.jpg';

const Home = () => {
  return (
    <div>
      <Header />
      <main
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: `url(${landing})` }}
      >
        {/* Main content goes here */}
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <div className="text-lg mb-2">dvknfdlvkjd</div>
        <div className="text-lg">sdafsdfsdf</div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

