import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: false,
  });

  const [formMessage, setFormMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      setFormMessage('To submit this form, please consent to being contacted');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormMessage('Message Sent! Thanks for completing the form. We\'ll be in touch soon!');
      } else {
        setFormMessage('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormMessage('Error sending message.');
    }
  };

  return (
    <div className="App">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Query Type</label>
          <div>
            <label>
              <input type="radio" name="queryType" value="General Enquiry" onChange={handleChange} required />
              General Enquiry
            </label>
            <label>
              <input type="radio" name="queryType" value="Support Request" onChange={handleChange} required />
              Support Request
            </label>
          </div>
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <div>
          <label>
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
            I consent to being contacted by the team
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {formMessage && <p>{formMessage}</p>}
    </div>
  );
}

export default App;
