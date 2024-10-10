import React from 'react';
import graphimg from '../../assets/graph.svg';
import './Opportunity.css';

const Opportunity = () => {
  return (
    <div className="opportunity-container">
      <div className="opportunity">
        <div className="opportunity-heading">
          <h3>Smart Solution With Great Opportunity</h3>
        </div>
        <div className="opportunity-para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="explore">
          <p>Explore More</p>
        </div>
      </div>
      <div className="graph-img">
        <img src={graphimg} alt="" />
      </div>
    </div>
  );
};

export default Opportunity;
