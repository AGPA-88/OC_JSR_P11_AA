import { useState } from 'react';
import './gallery.css'

function Gallery({gallery}) {
    const [pictureIndex, setPictureIndex] = useState(0);

    const handleNextClick = () => {
        if (pictureIndex === gallery.length - 1) {
          setPictureIndex(0);
        } else {
          setPictureIndex(pictureIndex + 1);
        }
      };
    
      const handlePreviousClick = () => {
        if (pictureIndex === 0) {
          setPictureIndex(gallery.length - 1);
        } else {
          setPictureIndex(pictureIndex - 1);
        }
      };

    return (
        <div className='house-gallery'>
            {gallery.length > 1 && <i className="fa-solid fa-chevron-left previousSlide" onClick={handlePreviousClick}></i>}
            <img src={gallery[pictureIndex]} alt='imagem'></img> 
            <div className='picture-index'>{pictureIndex +1}/{gallery.length} </div>     
            {gallery.length > 1 && <i className="fa-solid fa-chevron-right nextSlide" onClick={handleNextClick}></i>}
        </div>
    )

}

export default Gallery;