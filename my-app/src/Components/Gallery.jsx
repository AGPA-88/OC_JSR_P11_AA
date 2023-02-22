import JsonData from '../data.json';
import '../CSS/gallery.css';

const myJson = JsonData;

function Gallery() {
    return (
        <div id="gallery">
            {myJson.map(value => {
                return (
                <div className='img_block'>
                    <img src={value.cover} alt="house cover"/>
                    <p>
                    {value.title}
                    </p>
                </div>
                )
            })}
        </div>

    )
}

export default Gallery;