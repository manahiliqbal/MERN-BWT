import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchFlashcards = async () => {
      const response = await fetch('/api/flashcards/sample-user-id');
      const data = await response.json();
      setFlashcards(data);
    };

    fetchFlashcards();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Flashcards</h2>
      <ul>
        {flashcards.map((flashcard, index) => (
          <li key={index} className="mb-2">
            <div className="bg-dark-purple p-4 rounded-lg">
              <p><strong>Q:</strong> {flashcard.question}</p>
              <p><strong>A:</strong> {flashcard.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
