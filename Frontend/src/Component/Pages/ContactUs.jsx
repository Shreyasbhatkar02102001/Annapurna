import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactUsServiceImpl from './ContactUsService';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const navigate = useNavigate();

  const saveUser = (values) => {
    const user = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    };
    ContactUsServiceImpl.createContactUs(user)
      .then(() => navigate('/'))
      .catch((error) => {
        console.error('Error creating user:', error);
        alert('Failed to save user. Please try again.');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUser(formData);
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '50px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="subject" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <button type="submit" style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '10px',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '5px',
          fontSize: '16px'
        }}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
