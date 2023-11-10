import React, { useState, useRef } from 'react';

const CarouselPage5 = () => {
  const catRef = useRef(null);

  const move = {
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  // const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, src: 'https://placekitten.com/g/200/200', label: 'Image 1' },
    { id: 2, src: 'https://placekitten.com/g/300/200', label: 'Image 2' },
    { id: 3, src: 'https://placekitten.com/g/250/200', label: 'Image 3' },
  ];

  const handlePrev = (currentIndex) => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

    if (currentIndex === 0) {
      catRef.current.lastChild.scrollIntoView({
        move
      });
    } else {
      catRef.current.children[currentIndex - 1].scrollIntoView({
        move
      });
    }
  };

  const handleNext = (currentIndex) => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));

    // console.log(currentIndex);
    if (currentIndex === catRef.current.children.length - 1) {
      catRef.current.children[0].scrollIntoView({
        move
      });
    } else {
      catRef.current.children[currentIndex + 1].scrollIntoView({
        move
      });
    }
  };

  const handleLabelClick = (index) => {
    setCurrentIndex(index);
    console.log(index);
    // console.log(catRef);

    catRef.current.children[index].scrollIntoView({
      move
    });
  };

  /*
    this works but would be nice with play pause which also would be used when off screen
  setInterval(function () {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  
      console.log(currentIndex);
      if (currentIndex === catRef.current.children.length - 1) {
        catRef.current.children[0].scrollIntoView({
          move
        });
      } else {
        catRef.current.children[currentIndex + 1].scrollIntoView({
          move
        });
      }
    }, 5000); */


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

      <div className='cem'>
        {currentIndex}
        <button onClick={() => handlePrev(currentIndex)}>Previous</button>
        {images.map((image, index) => (
          <button key={image.id} onClick={() => handleLabelClick(index)}>
            {image.label}
            {/* {index} */}
          </button>
        ))}
        <button onClick={() => handleNext(currentIndex)}>Next</button>
      </div>
    </div>
  )
};

export default CarouselPage5;
