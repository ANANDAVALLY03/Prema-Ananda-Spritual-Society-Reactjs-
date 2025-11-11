
import React, { useState } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Services from './Components/Services';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <h1 style={styles.h1}>PREMA ANANDA SPIRITUAL SOCIETY</h1>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}
const styles = {
  h1: {
    fontFamily: "'Georgia', serif",         // Elegant serif font
    color: 'rgb(0,0,0)',                      // Deep blue text color
    textAlign: 'center',                   // Center-align the text
   // backgroundColor: '#F0F8FF',            // Light blue background
    padding: '20px 0',                     // Padding to space out the text
    margin: '0',                           // Remove default margin
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    //borderBottom: '5px solid #4A90E2',     // Blue underline border
    letterSpacing: '2px',                  // Increase space between letters
    textTransform: 'uppercase',            // Convert text to uppercase
  }
};

export default App;

