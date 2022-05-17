import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding' id='chef'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we Believe in</h1>

      <div className='app__chef-content'>
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>

        <p className='p__opensans'>Optio accusamus libero, blanditiis aut, aliquid deleniti, velit beatae voluptatibus praesentium placeat quibusdam nihil consequatur numquam laborum sapiente ab. Deleniti saepe vel aspernatur officiis amet libero quasi assumenda quibusdam corporis placeat ducimus, esse quia, quae cum fugit?</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
