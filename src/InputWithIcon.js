
import React, { useState} from 'react';
import './InputWithIcon.css';

const InputWithIcon = ({ type, placeholder, icon: Icon }) => {
//   const [hideIcon, setHideIcon] = useState(false);
  const [isFocused, setIsFocused] = useState(false);


  const handleInputFocus = () => {
    // setHideIcon(true);
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    // setHideIcon(false);
    setIsFocused(false);
  };
 

  return (
    <div className={`input-container ${isFocused ? 'focused' : ''}`}>
    
      <div className="input-field">
        { <Icon className="input-icon" />}
        <div className="ip">
        <input
          type={type}
          placeholder={placeholder}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        
        </div>
      </div>
    </div>
  );
};

export default InputWithIcon;
