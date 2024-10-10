import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.svg';
import { FaFacebookF, FaTwitter, FaRegBuilding, FaPhoneAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footerContainerMain">
      <div className='footer'>
        <div className='companyInfo'>
          <img src={logo} className='logoImage' alt="Company Logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat distinctio odit culpa, totam eius consequuntur praesentium? At itaque eos, voluptate molestiae rerum ipsa perspiciatis ab. Ab, </p>
          <div className='icons'>
            <div className='icon'>
              <FaFacebookF color='#fff' />
            </div>
            <div className='icon'>
              <FaTwitter color='#fff' />
            </div>
            <div className='icon'>
              <GrInstagram color='#fff' />
            </div>
          </div>
        </div>
        <div className='addressContainer'>
          <b className='title'>Address</b>
          <div className='address'>
            <FaRegBuilding color='white' />
            <p>Home Town Building</p>
          </div>
          <div className='address'>
            <FaPhoneAlt color='white' />
            <p>+91 8888888888</p>
          </div>
          <div className='address'>
            <FiMail color='white' />
            <p>example123@gmail.com</p>
          </div>
          <div className='address'>
            <MdLocationPin color='white' />
            <p>T-Hub Hyderabad, Telangana</p>
          </div>
        </div>
        <div className='companyName'>
          <b className='title'>Company</b>
          <div className='companyContainer'>
            <li>About Us</li>
            <li>Agency</li>
            <li>Services</li>
            <li>NetWork</li>
            <li>Team</li>
          </div>
        </div>
        <div className='information'>
          <b className='title'>Information</b>
          <div className='informationContainer'>
            <li>Products</li>
            <li>Pricing</li>
            <li>Disclaimer</li>
            <li>Privacy Statement</li>
            <li>Terms and Service</li>
          </div>
        </div>
      </div>
      <div className='line'></div>
      <div className='copyright'>
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
