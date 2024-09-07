import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie'; 
import animationData from '../lottie/flashcards-animation.json'; 

const HomePage = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <header className="text-center mt-10">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg animate-fadeInDown text-gray-100">
          Cardify
        </h1>
        <p className="mb-10 text-lg text-gray-300 max-w-md mx-auto animate-fadeIn">
          Create and manage your flashcards with ease. Enhance your learning experience with our premium features.
        </p>
      </header>
      
      <div className="p-6 rounded-lg shadow-xl mb-8"> 
        <Lottie options={lottieOptions} height={320} width={320} />
      </div>

      <div className="flex space-x-6 mb-10">
        <Link
          to="/create"
          className="transform transition-all duration-500 ease-in-out bg-purple-600 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 hover:bg-purple-500"
        >
          Create Flashcards
        </Link>
        <Link
          to="/dashboard"
          className="transform transition-all duration-500 ease-in-out bg-purple-600 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 hover:bg-purple-500"
        >
          View Dashboard
        </Link>
      </div>

      <section className="bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-2xl max-w-md text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-100">Upgrade to Premium</h2>
        <p className="text-gray-300 mb-6">
          You can create up to 25 flashcards for free. To create more, please upgrade to our premium plan.
        </p>
        <Link
          to="/payment"
          className="transform transition-all duration-500 ease-in-out bg-yellow-500 text-dark-purple px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 hover:bg-yellow-600"
        >
          Buy Premium
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
