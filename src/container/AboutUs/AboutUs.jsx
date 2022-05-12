import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G Letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about__spoon" className='spoon__image' />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, necessitatibus voluptatibus dolore cupiditate aliquid, omnis assumenda ipsam modi ad animi adipisci velit nisi, pariatur aliquam?</p>
        <button type="button" className='custom__button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="Knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about__spoon" className='spoon__image' />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis vero facilis sequi quia id perferendis possimus illo odit harum libero, iste amet sed, numquam exercitationem.</p>
        <button type="button" className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
