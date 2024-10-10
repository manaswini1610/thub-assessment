import React from 'react';
import aboutimg from '../../assets/about.svg';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={aboutimg} alt="img" />
      </div>

      <div className="text">
        <div className="about-heading">
          <h4>About Us</h4>
        </div>
        <div className="heading">
          <h3>
            Various Features
            <br />
            That You Can Get In
            <br />
            Our Company
          </h3>
        </div>
        <div className="about-para">
          <p>
            Raising say express had chiefly detract demands she. Quiet led own
            cause three him. Front no party young abode state up. Saved he do
            fruit woody of to. Met defective are allowance two perceived
            listening consulted contained. It chicken oh colonel pressed excited
            suppose to shortly. He improve started no we manners however
            effects. Prospect humoured mistress to by proposal marianne
            attended. Simplicity the far admiration preference everything. Up
            help home head spot an he room in.
          </p>
        </div>
        <div className="readmore">
          <p>Read More</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
