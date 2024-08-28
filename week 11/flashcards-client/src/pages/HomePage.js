import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dark-purple text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Flashcard Generator</h1>
      <p className="mb-6">Create and manage your flashcards with ease.</p>
      <Link to="/create" className="bg-light-purple px-4 py-2 rounded-lg">Create Flashcards</Link>
    </div>
  );
};

export default HomePage;
