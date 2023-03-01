import { useState } from 'react';
import './gallery.css'

function Gallery({gallery}) {
    const [pictureIndex, setPictureIndex] = useState(0);

    return (
        <div className='house-gallery'>
            <i class="fa-solid fa-chevron-left" onClick={() => {if (pictureIndex >0)setPictureIndex(pictureIndex-1)}}></i>
            <img src={gallery[pictureIndex]} alt='imagem'></img>      
            <i className="fa-solid fa-chevron-right" onClick={() => {if (pictureIndex < gallery.length -1)setPictureIndex(pictureIndex+1)}}></i>
        </div>
    )

}

export default Gallery;