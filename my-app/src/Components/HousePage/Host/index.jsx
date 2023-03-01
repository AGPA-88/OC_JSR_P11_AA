import houses from '../../../data.json';
import { useParams } from 'react-router-dom';
import './host.css'

function Host() {
    const { id } = useParams();
    const house = houses.find((house) => house.id === id);
    return (
        <div className='house-host'>
            <div id='host-name'>
                {house.host.name}
            </div>
                <div id='host-photo'>
                <img src={house.host.picture} alt='host_photo'></img>
            </div>
        </div>
    )
}

export default Host;  