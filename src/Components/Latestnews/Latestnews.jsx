import React from 'react';
import './Latestnews.css';
import img1 from '../../assets/box1.svg';
import img2 from '../../assets/box2.svg';
import img3 from '../../assets/box3.svg';

const data = [
  {
    image: img1,
    subtitle: "The Role of AI in Fintech: Opportunities and Challenges",
    date: "May 14, 2023/No Comments",
    para: "Her old collecting she considered discovered. So at parties he warrant oh staying. Square new horses and put better end. Sincerity…",
    box:"Read More"
  },
  {
    image: img2,
    subtitle: "Investing in Fintech: Is it the Right Move for Your Portfolio?",
    date: "May 14, 2023/No Comments",
    para: "Her old collecting she considered discovered. So at parties he warrant oh staying. Square new horses and put better end. Sincerity…",
    box:"Read More"

  },
  {
    image: img3,
    subtitle: "The Benefits of Using Fintech for Small Business Owners",
    date: "May 14, 2023/No Comments",
    para: "Her old collecting she considered discovered. So at parties he warrant oh staying. Square new horses and put better end. Sincerity…",
    box:"Read More"

  }
];

const Latestnews = () => {
  return (
    <div className="latestnews-container">
      <div className="latestnews">
        <div className="latestnews-heading">
          <h4>Latest News</h4>
        </div>
        <div className="read-heading">
          <h3>Read Latest News</h3>
        </div>
        <div className="latestnews-para">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="news-topics">
          <ul>
            <li>All Post</li>
            <li>Banking</li>
            <li>Business</li>
            <li>Commercial</li>
            <li>Entertainment</li>
          </ul>
        </div>
      </div>
      <div className="latestnews-box">
        {data.map((item, index) => (
          <div key={index} className='single-box'>
            <div className="news-img">
              <img src={item.image} alt="image" />
            </div>
            <div className="title">
              <p>{item.subtitle}</p>
            </div>
            <div className="news-date">
              <p>{item.date}</p>
            </div>
            <div className="news-para">
              <p>{item.para}</p>
            </div>
            <div className="latestnews-readmore">
              <p>{item.box}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Latestnews;
