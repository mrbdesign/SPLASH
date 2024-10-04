// src/app/components/SocialIcons.tsx
import React from 'react';
import { FaDiscord, FaX } from 'react-icons/fa6'; // Ensure you're importing from the correct version

const SocialIcons = () => {
  return (
    <div className="flex justify-center space-x-4 mt-[-100px]"> {/* Move up by 100px */}
      <a href="https://discord.gg/NNNB42QxHk" target="_blank" rel="noopener noreferrer">
        <FaDiscord className="text-white text-[50px]" /> {/* 50px size */}
      </a>
      <a href="https://x.com/mrbriandesign" target="_blank" rel="noopener noreferrer">
        <FaX className="text-white text-[50px]" /> {/* 50px size */}
      </a>
    </div>
  );
};

export default SocialIcons;
