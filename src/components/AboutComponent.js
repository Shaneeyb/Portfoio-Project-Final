import React, { useEffect } from "react";
import Beach from "../Img/Beach.jpg";
import Video from "../Img/WebSiteDroneFinal.mp4";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  return (
    <div id="about">
      <div
        className="parallaxImg"
        style={{
          backgroundImage: "url(" + Beach + ")",
        }}
      >
        <div className="center" data-aos="fade">
          <h1
            style={{
              opacity: "100%",
              color: "white",
            }}
          >
            About
          </h1>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          textAlign: "center",
        }}
      >
        <video
          loop
          autoPlay
          muted
          playsinline
          id="video"
          className="videoStyle"
        >
          <source src={Video} type="video/mp4" />
        </video>
        <div
          className="video-text large  mdLg midMdLg mdMdLg medium smMd small xsmall"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          style={{
            color: "#FFFAF3",
          }}
        >
          <p>
            Aloha, I’m a front-end developer located on the island of Oahu,
            Hawaii. I have a serious passion for technology and learning all the
            ways to make technology work for me.
          </p>
          <br />
          <p>
            When I’m not tinkering with the latest tech gadget, you can find me
            surfing at Waikiki, competing on a beach volleyball court, or
            testing my limits (sometimes a little too much) at a California ski
            resort.
          </p>
          <br />
          <p>
            Along with sports and technology, more core values relate to my
            family and my faith. Both keep me grounded and continue to shape me
            into the best version of myself.
          </p>
          <br />
          <p>
            My current goal is to meet smart, passionate people to learn from in
            the web development space while continuing to grow my business and
            personal skills. Want to work together?
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
