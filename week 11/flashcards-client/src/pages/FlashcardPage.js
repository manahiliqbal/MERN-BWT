import React, { useState } from 'react';

const FlashcardPage = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/flashcards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question, answer, userId: 'sample-user-id' }),
    });

    if (response.ok) {
      setQuestion('');
      setAnswer('');
      alert('Flashcard created successfully!');
    } else {
      alert('Failed to create flashcard.');
    }
  };

  return (
    <div className="p-8 bg-dark-purple min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-4">Create a New Flashcard</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Question</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-2 bg-dark-purple border border-light-purple rounded-lg"
          />
        </div>
        <div>
          <label className="block">Answer</label>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full p-2 bg-dark-purple border border-light-purple rounded-lg"
          />
        </div>
        <button type="submit" className="bg-light-purple px-4 py-2 rounded-lg">Save Flashcard</button>
      </form>
    </div>
  );
};

export default FlashcardPage;
