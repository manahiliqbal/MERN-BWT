const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchFlashcards = async (userId) => {
  const response = await fetch(`${API_URL}/flashcards/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch flashcards');
  }
  return response.json();
};

export const createFlashcard = async (flashcard) => {
  const response = await fetch(`${API_URL}/flashcards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(flashcard),
  });
  if (!response.ok) {
    throw new Error('Failed to create flashcard');
  }
  return response.json();
};

export const makePayment = async (amount) => {
  const response = await fetch(`${API_URL}/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
  });
  if (!response.ok) {
    throw new Error('Failed to process payment');
  }
  return response.json();
};
