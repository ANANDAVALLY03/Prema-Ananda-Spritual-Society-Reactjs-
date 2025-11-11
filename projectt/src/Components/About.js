import React, { useState } from 'react';

const About = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="about-container">
      <style>
        {`
          .about-container {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-image: url('https://i.pinimg.com/564x/ba/05/b8/ba05b8c89b014a348910bc2dc484f018.jpg'); /* Replace with your image URL */
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            min-height: 100vh;
            text-align: center;
            animation: fadeIn 1s ease-in-out;
            color: #333; /* Text color for readability */
          }

          .header {
            background-color: rgba(248, 249, 250, 0.8); /* Semi-transparent background */
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
          }

          .section {
            margin: 20px 0;
            padding: 15px;
            background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent background */
            border-radius: 5px;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
            transform: scale(1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .section:hover {
            transform: scale(1.02);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }

          h1, h2 {
            color: #007bff;
            font-size: 2em;
            transition: color 0.3s ease;
          }

          h2:hover {
            color: #0056b3;
          }

          p {
            line-height: 1.6;
            color: #333;
            text-align: center;
            animation: fadeIn 1.5s ease-in-out;
          }

          .testimonial {
            background-color: #f9f9f9;
            border-left: 5px solid #007bff;
            margin: 15px 0;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
            transition: transform 0.3s ease;
          }

          .testimonial:hover {
            transform: scale(1.05);
            background-color: #e0f7ff;
          }

          .impact-list {
            list-style-type: none;
            padding: 0;
            text-align: center;
          }

          /* Fade-in animation for entire container */
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          /* Bounce animation for icons */
          .impact-list li {
            display: inline-block;
            padding: 10px;
            transition: transform 0.3s ease;
          }

          .impact-list li:hover {
            transform: translateY(-5px);
          }
        `}
      </style>

      <div className="section">
        <h2>Our Story</h2>
        <p>
          Amara Bhagat Singh Center for Young Leaders
          We established in the month of January 2021 in Miyapur, Hyderabad.
          <br />
          <strong>What</strong>: A training center for political skills, democratic spirit-values and leadership skills for aspiring humanist youth.
          <br />
          <strong>Why</strong>: To impart leadership skill training to the youth and develop positive community leadership in the village.
          <br />
          <strong>How</strong>: Expanding through two Telugu states, we train humanistic youths with political skills and leadership aspirations based on interest and ability.
        </p>
      </div>

      <div className="section">
        <h2>Achievements</h2>
        <p>
          Since our inception, we have successfully:
          <ul className="impact-list">
            <li onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
              {hovered ? '🚀 Launched 20+ community projects' : '🌱 Community Projects'}
            </li>
            <li onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
              {hovered ? '📖 Provided resources to 10,000+ kids' : '📚 Educational Resources'}
            </li>
            <li onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
              {hovered ? '🏥 Supported people in need' : '🏥 Healthcare'}
            </li>
            <li onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
              {hovered ? '🤝 Partnered with schools/colleges' : '🤝 Collaborations'}
            </li>
          </ul>
        </p>
      </div>

      <div className="section">
        <h2>Community Impact</h2>
        <p>Stories of our community:</p>
        <div className="testimonial">
          <p><strong>“Thanks to your educational programs, my daughter is thriving!”</strong> - Maria, Parent</p>
        </div>
        <div className="testimonial">
          <p><strong>“Thanks for the motivation for all the students!”</strong> - Ahmed, Community Member</p>
        </div>
        <p>Our impact:</p>
        <ul className="impact-list">
          <li>🎓 Scholarships for 1,500+ students.</li>
          <li>🍽️ Food for 3,000+ families.</li>
          <li>🏡 Educational support for rural areas.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
