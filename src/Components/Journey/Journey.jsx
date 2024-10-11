import React from 'react';
import './Journey.css';
import phoneimg from '../../assets/phone.svg';
import uparrowimg from '../../assets/uparrow.svg';

const Journey = () => {
  return (
    <div className="journey-container">
      <div className="journey-heading">
        <h3>Join the Journey</h3>
      </div>
      <div className="journey-para">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="journey-box ">
        <input placeholder='example123@gmail.com'/>
        <p>Subscribe</p>
      </div>
      <div className="call-uparrow">
        <div className="call">
          <img src={phoneimg} alt="" />
        </div>
        <div className="uparrow">
          <img src={uparrowimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Journey;
