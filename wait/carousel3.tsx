// this does back and forward nicely but not off an array with links to each
import React, { useState, useRef } from 'react';

const CarouselPage3 = () => {

  const catRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { id: 1, src: 'https://placekitten.com/g/200/200', label: 'Image 1' },
    { id: 2, src: 'https://placekitten.com/g/300/200', label: 'Image 2' },
    { id: 3, src: 'https://placekitten.com/g/250/200', label: 'Image 3' },
  ];

  // console.log(images);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleLabelClick = (index) => {
    setCurrentIndex(index);
    console.log(index);
    console.log(catRef);
    // console.log(catRef.current);

    // close but scrolls the first one into view
    /*  catRef.current.scrollIntoView({
       behavior: 'smooth',
       block: 'nearest',
       inline: 'center'
     }); */


    // this works but only for the last one
    if (index === images.length - 1) {
      console.log('last');
      catRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }

    // index is the number I want to go to theres the minus 1 thing but thats later
    // if (index === 0) {
    //   console.log('first');
    //   catRef.current.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'nearest',  
    //     inline: 'center'
    //   });
    // }

  };



  return (
    <div className='car-check'>
      <hr />
      <button onClick={handlePrev}>Previous</button>

      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <img
              src={image.src}
              className={currentIndex === image.id - 1 ? 'active' : ''}
              ref={image.id === 1 ? catRef : null} // ! this works so you can use variables here
              // the above is returning a string but with logic before which might be why it works
              alt={image.id}

            // ref={catRef}
            />
          </li>
        ))}
      </ul>
      <button onClick={handleNext}>Next</button>
      <hr />


      {/* <img src={images[currentIndex].src} alt={images[currentIndex].label} /> */}
      <div className='cem'>
        {images.map((image, index) => (
          <button key={image.id} onClick={() => handleLabelClick(index)}>
            {image.label}
          </button>
        ))}
      </div>
    </div>
  )
};

export default CarouselPage3;
