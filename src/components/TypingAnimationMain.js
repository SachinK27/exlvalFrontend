import React from 'react';
import TypingAnimation from './TypingAnimation';

const TypingAnimationMain = () => {
  const words = ['growth', 'leads', 'traffic', 'sales', 'revenue'];
  const speed = 300; 

  return (
    <div>
      <h1>
        <TypingAnimation words={words} speed={speed} />
      </h1>
    </div>
  );
};

export default TypingAnimationMain;
