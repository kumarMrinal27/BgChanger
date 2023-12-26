import React, { useState } from 'react';

const ColorButtons = () => {
  // Initialize state for the background color
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Initial color is white

  // Function to handle button click and update background color
  const handleButtonClick = (color) => {
    setBackgroundColor(color);
    document.body.style.backgroundColor = color; // Set the background color on the body
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('#ff0000')}>Red</button>
      <button onClick={() => handleButtonClick('#00ff00')}>Green</button>
      <button onClick={() => handleButtonClick('#ffffff')}>White</button>

      {/* <div style={{ padding: '20px', marginTop: '10px' }}>
        <p>This is a component with a dynamic background color.</p>
      </div> */}
    </div>
  );
};

export default ColorButtons;

