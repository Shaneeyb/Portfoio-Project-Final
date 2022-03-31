import React from "react";
import { Fade } from "react-reveal";
import Beach from "../Img/Beach.jpg";
import Video from "../Img/WebSiteDrone3.mov";

function About() {
  return (
    <div id="about">
      <div
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: "url(" + Beach + ")",
          display: "flex",
          objectFit: "cover",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "25vh",
          opacity: "80%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="center">
          <Fade bottom>
            <h1
              style={{
                opacity: "100%",
                color: "white",
              }}
            >
              About{" "}
            </h1>
          </Fade>
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
          id="video"
          style={{
            height: "100vh",
            width: "100vw",
            objectFit: "cover",
            position: "relative",
            pointerEvents: "none",
          }}
        >
          <source src={Video} type="video/mp4" />
        </video>
        <div className="video-text large  mdLg mdMdLg medium smMd small" style={{
          color: "#FFFAF3"
        }}>
        <Fade bottom>
          <p>
            Aloha, I’m a front-end developer located on the island of Oahu,
            Hawaii. I have a serious passion for technology and learning all the
            ways to make technology work for me.
          </p>
          <br />
          <p>
            When i’m not tinkering with the latest gadget, you can find me
            surfing Hawaii's waves, on a beach volleyball court or vacationing
            at a ski resort breaking another collar bone.
          </p>
          <br />
          <p>
            Other than sports and technology, I am very much a family person and
            faith oriented. Both keep me grounded and make me want to be the
            best version of myself.
          </p>
          <br />
          <p>
            Overall, im trying to meet like-minded people who can mentor me to
            make me a stronger Web Developer, a smarter employee and a more
            wholesome and selfless person in general.
          </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}
export default About;
