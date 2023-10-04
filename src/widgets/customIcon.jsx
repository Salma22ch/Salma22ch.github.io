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
          color:isHovered ? 'var(--secondary-color)' : 'white'
        }}>
          <Icon 
          stroke= {isHovered ? 'var(--secondary-color)' : 'white'} 
          size= {16}
          style={{
            margin:"5px 5px 0 0",
          }}
           />
           {title}
        </div>

           
      );

};

export default CustomIcon