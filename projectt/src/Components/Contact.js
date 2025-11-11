 import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Successfully Submitted!");
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset the form
      } else {
        const errorData = await response.json();
        alert(`Failed to submit the form: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    }
  };

  return (
    <div style={{
      backgroundImage: 'url("https://i.pinimg.com/564x/ba/05/b8/ba05b8c89b014a348910bc2dc484f018.jpg")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}>
        {/* Centered Contact Information */}
        <div style={{
          textAlign: 'center',
          marginBottom: '20px',
          padding: '20px',
          borderBottom: '2px solid #007BFF',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
        }}>
          <h2 style={{ fontSize: '1.8rem', color: '#007BFF' }}>Contact Information</h2>
          <p><strong>WhatsApp:</strong>97019 55533</p>
          <p><strong>Email:</strong><a href="mailto:passination2016@gmail.com" style={{ color: '#007BFF' }}> passination2016@gmail.com</a></p>
          <p><strong>Phone:</strong> 97019 55533</p>
          <p><strong>Facebook:</strong> <a href="https://m.facebook.com/premaanandasociety/" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>facebook.com/company</a></p>
          <p><strong>Address:</strong> H.NO.1-112/2/23,SRI LAKSHMI NAGAR COLONY,500049, MIYAPUR,RANGA REDDY, TELANGANA. Regd.No.416 of 2018.</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                margin: '5px 0',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                margin: '5px 0',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
            />
          </label>
          <label>
            Subject:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                margin: '5px 0',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: '100%',
                padding: '10px',
                margin: '5px 0',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
            />
          </label>
          <button type="submit" style={{
            padding: '10px 15px', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer',
            fontSize: '1rem', borderRadius: '5px'
          }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
