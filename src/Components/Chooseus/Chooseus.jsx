import React from 'react';
import chooseimg from '../../assets/chooseus.svg';
import './Chooseus.css';


const Chooseus = () => {
  return (
    <div className='chooseus-container'>
        <div className="chooseus-text">
            <h3>You Need to Know Why You Should Choose Us</h3>

        </div>
        <div className="chooseus-img">
            <img src={chooseimg} alt="img" />

        </div>

      
    </div>
  )
}

export default Chooseus;
