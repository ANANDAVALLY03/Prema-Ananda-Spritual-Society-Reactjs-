import React from 'react';

const Services = () => {
  return (
    <div>
      <style>{`
        /* General Styles */
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f0f8ff;
          margin: 0;
          padding: 0;
        }

        .services-container {
          padding: 50px;
          max-width: 1200px;
          margin: 0 auto;
          background-color: rgba(240, 248, 255, 0.8); /* Semi-transparent background for the main container */
          border-radius: 10px;
          color: #333;
        }

        .title {
          text-align: center;
          font-size: 3rem;
          color: #003366;
          margin-bottom: 40px;
          animation: fadeIn 2s ease-in-out;
        }

        /* Service Section */
        .service {
          display: flex;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          margin: 20px 0;
          gap: 20px;
        }

        .service:nth-child(even) {
          flex-direction: row-reverse;
        }

        .service-image {
          flex: 1;
          max-width: 40%;
        }

        .service-image img {
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .service-content {
          flex: 2;
        }

        .service-content h2 {
          color: #20B2AA;
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .service-content p {
          font-size: 1.2rem;
          color: #333333;
          line-height: 1.6;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .service {
            flex-direction: column;
          }

          .service-image {
            max-width: 100%;
          }

          .title {
            font-size: 2rem;
          }

          .service-content h2 {
            font-size: 1.5rem;
          }

          .service-content p {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="services-container">
        <h1 className="title">Our Services</h1>
        
        <div className="service">
          <div className="service-image">
            <img src="balachaitanyam.jpg" alt="Balachaitanyam" />
          </div>
          <div className="service-content">
            <h2>Balachaitanyam</h2>
            <p>
              Encouraging young people to question and empowering them to become better leaders
              so that we can see our nation among the top 10 countries in the world.
            </p>
          </div>
        </div>
        
        <div className="service">
          <div className="service-image">
            <img src="cycletour.jpg" alt="Cycle Tour for Humanism and Democracy" />
          </div>
          <div className="service-content">
            <h2>Cycle Tour for Humanism and Democracy</h2>
            <p>
              Promoting the spirit of humanism and democracy through cycle tours that bring
              communities together in a healthy, sustainable way.
            </p>
          </div>
        </div>

        <div className="service">
          <div className="service-image">
            <img src="services.jpg" alt="Workshops for a Better Democratic Government" />
          </div>
          <div className="service-content">
            <h2>Workshops for a Better Democratic Government</h2>
            <p>
              Conducting workshops that provide insights into how to form a better democratic government,
              fostering discussions and new ideas to strengthen democracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
