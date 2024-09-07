import React, { useState } from 'react';

const FlashcardPage = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setSuccessMessage(''); 
    setErrorMessage('');

    if (!question || !answer) {
      setErrorMessage('Both question and answer are required.');
      return;
    }

    try {
      const token = localStorage.getItem('token'); 
      const response = await fetch('/api/flashcards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token, 
        },
        body: JSON.stringify({ question, answer }), 
      });

      if (response.ok) {
        setSuccessMessage('Flashcard created successfully!');
        setQuestion('');  
        setAnswer('');
      } else {
        const errorData = await response.json();
        setErrorMessage(`Failed to create flashcard: ${errorData.message}`);
      }
    } catch (error) {
      setErrorMessage('Error in frontend request');
      console.error('Error in frontend request:', error); 
    }
  };

  return (
    <div className="p-8 bg-dark-purple min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-4">Create a New Flashcard</h2>
      {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">{successMessage}</span>
          </div>
        )}

        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
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
