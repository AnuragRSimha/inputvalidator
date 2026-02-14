// Author: Anurag R Simha
// This component is where a message combining the details submitted through the form get displayed.
// Data sent from Form through App.jsx is captured and displayed via this component.
// The useEffect() utility of react has been utilized to provide a typing animation to the display text.
// With the formatTest() method, the name and age are highlighted in bold.
import { useState, useEffect } from 'react';
import '../App.css';

const DetailsDisplay = ({ name, age }) => {
    const yearText = age === 1 ? "year" : "years";
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        const fullText = `You are ${name}, and you are ${age} ${yearText} old.`;
        setDisplayedText(''); 
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setDisplayedText(fullText.substring(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50);

        return () => clearInterval(typingInterval);
    }, [name, age]);

    const formatText = (text) => {
        if (!text) return text;
        
        let parts = text.split(new RegExp(`(${name}|${age})`, 'g'));
        return parts.map((part, index) => 
            (part === name || part === String(age)) ? <strong key={index}>{part}</strong> : part
        );
    };

    return (
        <div className="detailsWrapper">
            <hr className="mt-0 mb-3" />
            <p className='detailsDisplay'>
                {formatText(displayedText)}
                <span className="typing-cursor"></span>
            </p>
        </div>
    );
};

export default DetailsDisplay;