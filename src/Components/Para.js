import React from 'react';
import  { useState, useEffect } from 'react';

const Para = () => {
    const [text, setText] = useState('');
    const [spelling, setSpelling] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const words = ['Your contribution is a catalyst for change.', 'Together, we can make a real difference'];

    useEffect(() => {
        let interval;

    if (text === words[currentIndex]) {
      clearInterval(interval);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setText('');
        interval = setInterval(() => {
          setText((prevText) => {
            if (prevText.length < words[currentIndex].length) {
              return words[currentIndex].slice(0, prevText.length + 1);
            } else {
              clearInterval(interval);
              return prevText;
            }
          });
        }, 50); // Faster animation, 50ms interval
      }, 1500); // 2-second delay before moving to the next text
    } else {
      interval = setInterval(() => {
        setText((prevText) => {
          if (prevText.length < words[currentIndex].length) {
            return words[currentIndex].slice(0, prevText.length + 1);
          } else {
            clearInterval(interval);
            return prevText;
          }
        });
      }, 50); // Faster animation, 50ms interval
    }

    return () => clearInterval(interval);
  }, [text, currentIndex]);

    return (
        <div>
             <p className=''>{text}</p>
        </div>
    );
};

export default Para;