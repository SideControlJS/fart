// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {(new Date().getFullYear())} Streamer's Hub. All rights reserved.</p>
      {/* Additional footer content here */}
    </footer>
  );
}

export default Footer;
