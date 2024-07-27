import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './context/AuthContext';

function Protected() {
  const [message, setMessage] = useState('');
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchProtected = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/auth/protected', {
          headers: {
            'auth-token': token,
          },
        });
        setMessage(res.data);
      } catch (err) {
        console.error(err);
        setMessage('Failed to fetch protected data');
      }
    };
    fetchProtected();
  }, []);

  return (
    <div>
      <h1>Protected</h1>
      {user && <p>Welcome, {user.username}</p>}
      <p>{message}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Protected;
