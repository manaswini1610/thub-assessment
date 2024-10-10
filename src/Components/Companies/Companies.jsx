import React from 'react';
import './Companies.css';
import img1 from '../../assets/img1.svg';
import img2 from '../../assets/img2.svg';
import img3 from '../../assets/img3.svg';
import img4 from '../../assets/img4.svg';

const data = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  }
];

const Companies = () => {
  return (
    <div className='companies-container'>
      <div className="container">
        <div className="companies-text">
          <h5>Wealth Management for People from Leading Tech Companies</h5>
        </div>
        <div className="companies">
          {data.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
