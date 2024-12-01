// Accordion.js
import React, { useState } from 'react';
import './Accordian.css';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const accordionData = [
        {
            title: 'What is ReactJS?',
            content: 'ReactJS is a JavaScript library for building user interfaces.'
        },
        {
            title: 'Why use ReactJS?',
            content: 'ReactJS allows for fast, efficient, and flexible development of dynamic web applications.'
        },
        {
            title: 'How do you use ReactJS?',
            content: 'ReactJS can be used by creating components and managing state effectively.'
        }
    ];

    return (
        <div className="accordion-container">
            {accordionData.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <div
                        className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.title}
                        <span className="accordion-icon">
                            {activeIndex === index ? '-' : '+'}
                        </span>
                    </div>
                    {activeIndex === index && (
                        <div className="accordion-content">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
