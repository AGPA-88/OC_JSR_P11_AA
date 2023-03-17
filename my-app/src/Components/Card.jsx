import JsonData from '../data.json';
import '../CSS/card.css';
import { Link } from 'react-router-dom';

const myJson = JsonData;

function Card() {
    return (
        <div id="card">
            {myJson.map((value, index) => {
                return (
                <Link key={index} to={`/house/${value.id}`}>
                    <div className='img_block'>
                        <img src={value.cover} alt="house cover"/>
                        <p>
                        {value.title}
                        </p>
                    </div>
                </Link>
                )
            })}
        </div>

    )
}

export default Card;