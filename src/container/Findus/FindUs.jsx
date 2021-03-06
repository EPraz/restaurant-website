import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
const FindUs = () => {

  const [mapShow, setMapShow] = React.useState(true);


  
  return (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper-info'>
      <SubHeading title="Contact" />
      <h1 className='headtext__cormorant'>Find Us</h1>
      <div className='app__wrapper_content'>
        <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className='p__cormorant' style={{color: '#dcca87', margin: '2rem 0'}}>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri: 10:00  am - 02:00 Am</p>
        <p className='p__opensans'>Sat - Sun: 10:00  am - 03:00 Am</p>
      </div>
      <button type='button' className='custom__button' style={{marginTop: '2rem'}} onClick={() => setMapShow((prev) => !prev)}>
        {mapShow ? "Visit Us" : "Back to Drink Image"}
      </button>
    </div>

    <div className='app__wrapper_img'>
      {mapShow ? <img src={images.findus} alt="Find Us" /> : <img src={images.map} alt="map" /> }
      
    </div>
  </div>
);

}
export default FindUs;
