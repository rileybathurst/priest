// ! what if I ref the ul instead of the li
import React, { useState, useRef } from 'react';

const CarouselPage4 = () => {
  const catRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { id: 1, src: 'https://placekitten.com/g/200/200', label: 'Image 1' },
    { id: 2, src: 'https://placekitten.com/g/300/200', label: 'Image 2' },
    { id: 3, src: 'https://placekitten.com/g/250/200', label: 'Image 3' },
  ];

  const handlePrev = (currentIndex) => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

    if (currentIndex === 0) {
      catRef.current.lastChild.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    } else {
      catRef.current.children[currentIndex - 1].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  const handleNext = (currentIndex) => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));

    console.log(currentIndex);
    if (currentIndex === catRef.current.children.length - 1) {
      catRef.current.children[0].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    } else {
      catRef.current.children[currentIndex + 1].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  const handleLabelClick = (index) => {
    setCurrentIndex(index);
    console.log(index);
    console.log(catRef);

    catRef.current.children[index].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };



  return (
    <div className='car-check'>
      <hr />
      <button onClick={() => handlePrev(currentIndex)}>Previous</button>

      <ul ref={catRef}>
        {images.map((image) => (
          <li key={image.id}>
            <img
              src={image.src}
              className={currentIndex === image.id - 1 ? 'active' : ''}
              alt={`${image.id} image}`}
            />
          </li>
        ))}
      </ul>
      <button onClick={() => handleNext(currentIndex)}>Next</button>
      <hr />


      {/* <img src={images[currentIndex].src} alt={images[currentIndex].label} /> */}
      <div className='cem'>
        {currentIndex}
        <button onClick={() => handlePrev(currentIndex)}>Previous</button>
        {images.map((image, index) => (
          <button key={image.id} onClick={() => handleLabelClick(index)}>
            {image.label}
          </button>
        ))}
        <button onClick={() => handleNext(currentIndex)}>Next</button>
      </div>
    </div>
  )
};

export default CarouselPage4;
