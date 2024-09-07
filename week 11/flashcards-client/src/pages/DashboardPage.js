import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState({});
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);      
  const token = localStorage.getItem('token');
  const navigate = useNavigate();  

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await fetch('/api/flashcards', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token, 
          },
        });

        if (response.ok) {
          const data = await response.json();
          setFlashcards(data);
        } else {
          const errorData = await response.json();
          console.error('Failed to fetch flashcards:', errorData);
          setError('Failed to fetch flashcards');
        }
      } catch (error) {
        console.error('Error fetching flashcards:', error);
        setError('Error fetching flashcards');
      } finally {
        setLoading(false); 
      }
    };

    if (token) {
      fetchFlashcards(); 
    } else {
      console.error('No token found, redirecting to login page');
      navigate('/login');  
    }
  }, [token, navigate]);


  if (loading) {
    return <p>Loading flashcards...</p>;  
  }

  if (error) {
    return <p>{error}</p>;  
  }

  const toggleFlip = (index) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="p-8 bg-dark-purple min-h-screen text-white">
  <h2 className="text-2xl font-bold mb-6 text-center">Your Flashcards</h2>
  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {flashcards.length > 0 ? (
      flashcards.map((flashcard, index) => (
        <li key={index}>
          <div
            className={`relative bg-purple-600 text-white-700 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${
              flipped[index] ? 'flipped' : ''
            }`}
            style={{ backgroundColor: '#9F7AEA' }} 
          >
            <div className="flip-card-inner">
              <div
                className={`flip-card-front ${
                  flipped[index] ? 'hidden' : 'block'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xl font-semibold p-4">Question</p>
                  <span className="text-sm text-white">#{index + 1}</span>
                </div>
                <p className="text-lg mb-3 font-medium text-white">
                  {flashcard.question}
                </p>
                <button
                  onClick={() => toggleFlip(index)}
                  className="bg-purple-800 text-white px-4 py-2 rounded-lg mt-4 transition duration-300 hover:bg-purple-900"
                >
                  Show Answer
                </button>
              </div>

              <div
                className={`flip-card-back ${
                  flipped[index] ? 'block' : 'hidden'
                }`}
              >
                <p className="text-xl font-semibold p-4">Answer</p>
                <p className="text-lg mt-2 text-white">
                  {flashcard.answer}
                </p>
                <button
                  onClick={() => toggleFlip(index)}
                  className="bg-purple-800 text-white px-4 py-2 rounded-lg mt-4 transition duration-300 hover:bg-purple-900"
                >
                  Show Question
                </button>
              </div>
            </div>
          </div>
        </li>
      ))
    ) : (
      <p>No flashcards available</p>
    )}
    </ul>
  </div>
  );
};

export default DashboardPage;
