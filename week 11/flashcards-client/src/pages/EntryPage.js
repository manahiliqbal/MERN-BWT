import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie'; 
import animationData from '../lottie/flashcards-animation.json'; 

const EntryPage = () => {
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
          Welcome to Cardify
        </h1>
        <p className="mb-10 text-lg text-gray-300 max-w-md mx-auto animate-fadeIn">
          Create and manage your flashcards with ease. Enhance your learning experience with our premium features.
        </p>
      </header>
      
      <div className="p-6 rounded-lg shadow-xl mb-8"> 
        <Lottie options={lottieOptions} height={320} width={320} />
      </div>

       <div className="flex space-x-4">
        <Link to="/signup" className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700">
          Sign Up
        </Link>
        <Link to="/login" className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700">
          Log In
        </Link> 
        </div>
    </div>
  );
};

export default EntryPage;
