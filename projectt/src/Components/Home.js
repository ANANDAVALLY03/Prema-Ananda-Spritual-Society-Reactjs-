import React, { useEffect, useState } from 'react';

const Home = () => {
  const images = [
    'slide1.jpg',
    'slide2.jpg',
    'slide3.jpg',
    'slide4.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMissionHovered, setMissionHovered] = useState(false);
  const [isVisionHovered, setVisionHovered] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <style>
        {`
          .home-container {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0 auto;
            max-width: cover;
            background-image: url('https://i.pinimg.com/564x/ba/05/b8/ba05b8c89b014a348910bc2dc484f018.jpg'); /* Replace with your image URL */
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: fixed; /* Keep background fixed during scroll */
            color: #333; /* Text color for readability */
          }

          .header {
            background-color: rgba(248, 249, 250, 0.8); /* Semi-transparent background */
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .main-content {
            padding: 20px;
          }

          .mission h2, .vision h2 {
            color: rgb(0,105,148); 
          }

          /* Animation for "Jai Constitution!" */
          .animated-text {
            font-size: 2em;
            color: rgb(0, 105, 148);
            animation: pulse 2s infinite ease-in-out;
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.7;
            }
          }

          .slideshow {
            position: relative;
            max-width: 1000px;
            margin: 30px auto;
          }

          .slideshow img {
            width: 80%;
            height: auto;
            border-radius: 5px;
          }

          .mission-vision {
            display: flex;
            justify-content: space-between;
            margin: 20px 0;
          }

          .mission, .vision {
            background-color: rgba(248, 249, 250, 0.9); /* Semi-transparent for readability */
            padding: 20px;
            border-radius: 5px;
            flex: 1;
            margin: 0 10px;
            transition: background-color 0.3s ease;
          }

          .footer {
            background-color: rgba(248, 249, 250, 0.9);
            padding: 10px;
            position: relative;
            bottom: 0;
            width: 100%;
          }

          .dots {
            text-align: center;
            margin-top: 10px;
          }

          .dot {
            display: inline-block;
            height: 10px;
            width: 10px;
            margin: 0 5px;
            border-radius: 50%;
            background-color: #bbb;
            cursor: pointer;
          }

          .active {
            background-color: #717171;
          }
        `}
      </style>

      <main className="main-content">
        <p>Satyameva Jayate! Prashna yeva Jayate! Shrama yeva Jayate!
        Training Young People in Self-development and Nation-Building!</p>
        <p>Amara Bhagat Singh Center for Young Leaders</p>

        {/* Animated Jai Constitution Text */}
        <h2 className="animated-text">Jai Constitution!</h2>

        {/* Slideshow Section */}
        <div className="slideshow">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="mission-vision">
          <div
            className="mission"
            onMouseEnter={() => setMissionHovered(true)}
            onMouseLeave={() => setMissionHovered(false)}
            style={{
              backgroundColor: isMissionHovered ? 'lightblue' : 'rgba(248, 249, 250, 0.9)'
            }}
          >
            <h2>Our Mission</h2>
            <p>Our Society proposes a humanist way of life for all citizens. It is possible! It is the best feasible and practical way of life in a democracy.</p>
          </div>
          <div
            className="vision"
            onMouseEnter={() => setVisionHovered(true)}
            onMouseLeave={() => setVisionHovered(false)}
            style={{
              backgroundColor: isVisionHovered ? 'lightblue' : 'rgba(248, 249, 250, 0.9)'
            }}
          >
            <h2>Our Vision</h2>
            <p>Prema Ananda Spiritual Institute was formed with the dream of making our country one of the ten best countries in the world. We believe it is possible! This dream will come true if our democracy works. A functioning democracy leads to honest politics, transparent and accountable governance.</p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Prema Ananda Spiritual Society. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
