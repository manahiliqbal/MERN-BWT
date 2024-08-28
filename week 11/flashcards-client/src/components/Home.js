import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Flashcard Generator</h1>
      <Link to="/create" className="bg-light-purple px-4 py-2 rounded-lg">Create Flashcards</Link>
    </div>
  );
};

export default Home;
