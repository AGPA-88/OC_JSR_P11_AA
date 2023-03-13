import houses from '../data.json';
import { useParams } from 'react-router-dom';
// import { useState } from 'react';
import '../CSS/house.css'

import Error404 from '../Pages/Error404Page';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Gallery from '../Components/HousePage/Gallery';
import Title from '../Components/HousePage/Title';
import Host from '../Components/HousePage/Host';
import Tags from '../Components/HousePage/Tags';
import Rating from '../Components/HousePage/Rating';
import Details from '../Components/HousePage/Details';

function Housepage () {
    const { id } = useParams();
    const house = houses.find((house) => house.id === id);
    // const [pictureIndex, setPictureIndex] = useState(0);
    // console.log(house.pictures[pictureIndex]);
    
    if (!house) {
      return <Error404 />;
    }
    return (
      <div>
          <Header />
            <Gallery gallery={house.pictures} />
          <div className='house-details'>
            <div id='name-frame'>
              <Title title={house.title} location={house.location} />
              <Tags tags={house.tags}/>
            </div>
            <div className='house-rating'>
              <Host />
              <Rating rating={house.rating}/>
            </div>
          </div>

          <div className='house-description'>
            <Details content={house.description} name="Description"/>
            <Details content={house.Amenities} name="Equipements"/>
          </div>
        <Footer />
        </div>
    )
}

export default Housepage;
