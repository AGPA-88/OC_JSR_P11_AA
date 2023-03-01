import houses from '../data.json';
import { useParams } from 'react-router-dom';
// import { useState } from 'react';
// import '../CSS/house.css'

import Error404 from '../Pages/Error404Page';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Gallery from '../Components/HousePage/Gallery';
import Title from '../Components/HousePage/Title';
import Host from '../Components/HousePage/Host';
import Tags from '../Components/HousePage/Tags';
import Rating from '../Components/HousePage/Rating';

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
          PAGE UNDER CONSTRUCTION: {house.id}
          <br/>
          <br/>
            <Gallery gallery={house.pictures} />
          <br/>
          <br/>
          
          <div id='name-frame'>
            <Title title={house.title} location={house.location} />
            <br/>
            <Host />
          </div>

          <br/>
          <br/>

          <div className='house-rating'>
            <Tags tags={house.tags}/>
          <br/>
            <Rating rating={house.rating}/>
          </div>

          <br/>
          <br/>

          <div className='house-description'>
            <h2>DESCRIPTION:</h2> {house.description}
          <br/>
            <h2>EQUIPEMENTS:</h2> {house.Amenities}
          </div>

          <br/>

        <Footer />
        </div>
    )
}

export default Housepage;
