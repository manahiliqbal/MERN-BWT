import React, { useState } from 'react';

const FlashcardForm = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [flashcards, setFlashcards] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/flashcards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, answer, userId: 'sample-user-id' }),
      });

      if (response.status === 201) {
        const data = await response.json();
        setFlashcards([...flashcards, data]); 
        setQuestion(''); 
        setAnswer('');
      } else {
        throw new Error('Failed to create flashcard');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Create a Flashcard</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Question"
          required
        />
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Answer"
          required
        />
        <button type="submit">Create Flashcard</button>
      </form>

      <h3>Created Flashcards:</h3>
      <ul>
        {flashcards.map((flashcard, index) => (
          <li key={index}>
            <strong>Question:</strong> {flashcard.question} <br />
            <strong>Answer:</strong> {flashcard.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashcardForm;
