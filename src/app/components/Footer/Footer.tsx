// src/app/components/Footer/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 text-center">
      <p className="text-sm"> {/* Use text-sm for smaller text */}
        &copy; {new Date().getFullYear()} ミスターブライアンデザイン All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
