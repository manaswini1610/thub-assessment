import React from 'react';
import './Features.css';
import image from '../../assets/feature.svg';

const Feedback = () => {
  return (
    <div className="features-container">
      <div className="image">
        <img src={image} alt="img" />
      </div>
      <div className="features">
        <div className="features-heading">
          <div className="features-title">
            <h4>Features</h4>
          </div>
          <div className="features-heading">
            <h3>
              See How Our<br/>
              Features Work For<br/>
              Your Business
            </h3>
          </div>
        </div>
        <div className="features-para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus
            <br />
            nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="points">
          <ul>
            <li>Attended no do thoughts me on dissuade scarcely.</li>
            <li>Own are pretty spring suffer old denote his.</li>
            <li>He forbade affixed parties of assured to me windows.</li>
            <li>Out may few northward believing attempted.</li>
            <li>Unsatiable understood or expression dissimilar so sufficient.</li>
            <li>Prepared do an dissuade be so whatever steepest.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
