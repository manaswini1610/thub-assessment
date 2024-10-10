import React from 'react';
import './Services.css';
import connect from '../../assets/connect.svg';
import privacy from '../../assets/privacy.svg';
import currency from '../../assets/currency.svg';

const text = [
  {
    image: connect,
    heading: "Connect To Bank",
    para: "Hover mouse here to see backend content. Lorem ipsum dolor sit amet.",
  },
  {
    image: privacy,
    heading: "Privacy & Security",
    para: "Hover mouse here to see backend content. Lorem ipsum dolor sit amet.",
    background:true
  },
  {
    image: currency,
    heading: "Global Currencies",
    para: "Hover mouse here to see backend content. Lorem ipsum dolor sit amet.",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <div className="services">
        <div className="service-heading">
          <h4>Services</h4>
        </div>
        <div className="main-heading">
          <h3>
            Best Features That Make
            <br />
            Everything Easy
          </h3>
        </div>
        <div className="service-para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>

      <div className="service-boxes">
        {text.map((item, index) => (
          <div key={index} className={`each-box ${item?.background ? 'backgroundSticker':''}`} >
            <div className="img">
              <img src={item.image} alt="" />
            </div>
            <div className="par1">
              <p>{item.heading}</p>
            </div>
            <div className="par2">
              <p>{item.para}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="allservices">
        <p>View All Services</p>
      </div>
    </div>
  );
};

export default Services;
