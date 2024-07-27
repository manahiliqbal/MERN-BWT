import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/userSlice';

function Protected() {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

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

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Protected</h1>
      {user && <p>Welcome, {user.username}</p>}
      <p>{message}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Protected;

