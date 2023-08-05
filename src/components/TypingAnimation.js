import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import underline2 from "../assets/images/underline2.svg";
import './TypingAnimation.css';


const TypingAnimation = ({ words, speed }) => {
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentWord === words[currentIndex]) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setCurrentWord("");
      } else {
        setCurrentWord(
          (prevWord) => prevWord + words[currentIndex][prevWord.length]
        );
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentWord, currentIndex, speed, words]);

  return (
    <div className="typing-container">
        <span className="typing-text">
        <Typography variant="h1" className="typing-text">{currentWord}</Typography>
        <img src={underline2} alt="Underline" className="underline-image" />
      </span>
    </div>
  );
};

export default TypingAnimation;