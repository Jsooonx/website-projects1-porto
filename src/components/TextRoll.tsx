import React from 'react';

export const TextRoll: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  return (
    <span className="relative inline-block overflow-hidden pb-[0.1em]">
      <span className={`block transition-transform duration-500 ease-[0.16, 1, 0.3, 1] group-hover:-translate-y-[115%] ${className}`}>
        {text}
      </span>
      <span className={`absolute top-[115%] left-0 block w-full transition-transform duration-500 ease-[0.16, 1, 0.3, 1] group-hover:-translate-y-[115%] ${className}`}>
        {text}
      </span>
    </span>
  );
};
