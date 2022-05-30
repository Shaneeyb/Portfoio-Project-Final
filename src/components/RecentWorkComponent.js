import React, { useEffect } from "react";
import "../work.scss";
import { useState } from "react";
import Nucamp from "../Img/NuCamp_Macbook.png";
import KMPhone from "../Img/KMPhone.png";
import water from "../Img/water.avif";
import arrow from "../Img/arrow.jpeg";
import Aos from "aos";
import "aos/dist/aos.css"

function RecentWork() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: KMPhone,
      title: "Kingdom Man",
      desc: "Kingdom Man is my latest React project to show all the details of Inspire Waikele’s event, Kingdom Man. It is a mobile app that lets you sign up, gives you details and connect with Inspire team.",
      alt: "IPhone image of the Kingdom Man app",
    },

    {
      id: "2",
      icon: Nucamp,
      title: "Nucampsite",
      desc: "Nucampsite is a camping website and app that was designed by the Nucamp Bootcamp. It features front end with React.js and Redux with back end using Node.js and mongoDB.",
      alt: "Computer Image of Nucampsite",
    },
  ];

  const handleClick = (direction) => {
    if (direction === "left") {
      let temp;
      if (currentSlide > 0) {
        temp = currentSlide - 1;
      } else {
        temp = 1;
      }
      setCurrentSlide(temp);
    } else {
      let temp;
      if (currentSlide < data.length - 1) {
        temp = currentSlide + 1;
      } else {
        temp = 0;
      }
      setCurrentSlide(temp);
    }
  };

  //i have an array of objects
  //want to display the first Object
  //i want to switch to the 2nd id if i click a certain thing

  useEffect(() => {
    Aos.init({duration: 1000})
  }, []);



  return (
    <div id="recent">
      <div
        className="parallaxImg"
        style={{
          backgroundImage: "url(" + water + ")",
        }}
      >
        <div className="center" data-aos="fade">
          <h1
            style={{
              opacity: "100%",
              color: "white",
            }}
          >
            My Recent Work
          </h1>
        </div>
      </div>

      <div>
        <div className="works" id="works">
          <div
            className="slider"
            style={{
              transform: `translateX(-${currentSlide * 100}vw)`,
            }}
          >
            {/* map is the same as {data[0].icon} ... etc */}
            {data.map(function (item, index) {
              return (
                <div className="sliderContainer" key={index} data-aos="fade-up">
                  <div className="item row">
                    <div className="left col-md-6">
                      <h2>{item.title}</h2>
                      <p>{item.desc}</p>
                    </div>
                    <div className="right col-md-6">
                      <img src={item.icon} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <img
            src={arrow}
            className="arrow left"
            alt="arrowL"
            onClick={() => handleClick("left")}
          />
          {/*function onClick() {
              return (
                handleClick("left")
              )
            } */}
          <img
            src={arrow}
            className="arrow right"
            alt="arrowR"
            onClick={() => handleClick()}
          />
        </div>
      </div>
    </div>
  );
}
export default RecentWork;

