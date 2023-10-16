import React, { useState } from 'react';
import '../colors.css';

const CustomIcon = ({ Icon, title }) => {

    // intialize the state
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          display:'inline-block',
          color:isHovered ? 'var(--secondary-color)' : 'var(--primary-text-color)'
        }}>
          <Icon 
          stroke= {isHovered ? 'var(--secondary-color)' : 'var(--primary-text-color)'} 
          size= {18}
          style={{
            margin:"5px 5px -2px 0",
          }}
           />
           {title}
        </div>

           
      );

};

export default CustomIcon