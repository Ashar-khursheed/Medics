import React, { useState } from 'react';

const AccordionSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveSlider = (direction) => {
    const items = document.querySelectorAll('.accordion-item');

    // Remove active class from the current item
    items[currentIndex].classList.remove('active');

    // Update the index
    let newIndex = currentIndex + direction;

    // Handle index out of bounds
    if (newIndex < 0) {
      newIndex = items.length - 1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }

    // Add active class to the new item
    items[newIndex].classList.add('active');
    setCurrentIndex(newIndex);
  };

  return (
    <div className="accordion-slider">
      <button onClick={() => moveSlider(-1)}>Previous</button>
      <button onClick={() => moveSlider(1)}>Next</button>
      
      {/* Replace this part with your accordion content */}
      <div className="accordion">
        <div className="accordion-item active">Item 1</div>
        <div className="accordion-item">Item 2</div>
        <div className="accordion-item">Item 3</div>
        <div className="accordion-item">Item 4</div>
      </div>
    </div>
  );
};

export default AccordionSlider;
