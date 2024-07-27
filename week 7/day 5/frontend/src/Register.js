import React, { useState, useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { registerUser, loading, error } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    registerUser(username, email, password);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" disabled={loading}>Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Register;
