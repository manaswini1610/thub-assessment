import React from "react";
import girl from "../../assets/feedback.svg";
import boy from "../../assets/feedback2.svg";
import star from "../../assets/star.svg";
import "./Feedback.css";

const text = [
  {
    heading: "Awesome Theme",
    image: girl,
    image2: star,
    name1: "John Doe",
    name2: "Sony CEO",
    para1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet cursus volutpat. Aliquam sit amet ligula et justo tincidunt laoreet non vitae lorem. Aliquam porttitor tellus enim, eget commodo augue porta ut. Maecenas lobortis ligula vel tellus sagittis ullamcorper vestibulum pellentesque cursus.",
    para2:
      "Maecenas lobortis ligula vel tellus sagittis ullamcorper vestibulum pellentesque cursus. Maecenas lobortis ligula vel tellus sagittis ullamcorper.",
  },
  {
    heading: "Simply The Best",
    image: boy,
    image2: star,
    name1: "Tom Jones",
    name2: "Tesla CMO",
    para1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet cursus volutpat. Aliquam sit amet ligula et justo tincidunt laoreet non vitae lorem. Aliquam porttitor tellus enim, eget commodo augue porta ut. Maecenas lobortis ligula vel tellus sagittis ullamcorper vestibulum pellentesque cursus.",
    para2:
      "Maecenas lobortis ligula vel tellus sagittis ullamcorper vestibulum pellentesque cursus. Maecenas lobortis ligula vel tellus sagittis ullamcorper.",
  },
];

const Feedback = () => {
  return (
    <div className="feedback-container">
      <div className="feedback">
        <div className="feedback-heading">
          <h4>Feedback</h4>
        </div>
        <div className="feedback-subheading">
          <h3>What People Think About Us?</h3>
        </div>
        <div className="feedback-para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>

      <div className="rating">
        {text.map((item, index) => (
          <div key={index} className="img-text">
            <div className="rating-image">
              <div className="item-img">
                <img src={item.image} alt="img" />
              </div>
              <div className="name1">
                <p>{item.name1}</p>
              </div>
              <div className="name2">
                <p>{item.name2}</p>
              </div>
            </div>
            <div className="rating-text">
              <div className="rating-para">
                <p>{item.heading}</p>
              </div>
              <div className="star-img">
                <img src={item.image2} alt="img" />
                <img src={item.image2} alt="img" />
                <img src={item.image2} alt="img" />
                <img src={item.image2} alt="img" />
                <img src={item.image2} alt="img" />
              </div>
              <div className="rating-para1">
                <p>{item.para1}</p>
              </div>
              <div className="rating-para2">
                <p>{item.para2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
