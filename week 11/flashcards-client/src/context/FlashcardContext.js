import React, { createContext, useState, useContext } from 'react';

const FlashcardContext = createContext();

export const useFlashcards = () => {
  return useContext(FlashcardContext);
};

export const FlashcardProvider = ({ children }) => {
  const [flashcards, setFlashcards] = useState([]);

  const addFlashcard = (flashcard) => {
    setFlashcards([...flashcards, flashcard]);
  };

  const removeFlashcard = (id) => {
    setFlashcards(flashcards.filter(flashcard => flashcard._id !== id));
  };

  return (
    <FlashcardContext.Provider value={{ flashcards, addFlashcard, removeFlashcard }}>
      {children}
    </FlashcardContext.Provider>
  );
};
