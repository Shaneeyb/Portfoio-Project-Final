import React from "react";
import Nucamp from "../Img/NuCamp_Macbook.png"
import KMPhone from "../Img/KMPhone.png"
import water from "../Img/water.avif";
import { Fade } from "react-reveal";



function RecentWork() {
  return (
    <div id="recent">
   
      <div className="parallaxImg" style={{
        backgroundAttachment: "fixed",
        backgroundImage: 'url(' + water + ')',
        display: "flex",
              objectFit: "cover",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "25vh",
              zIndex: "1",
              opacity: "90%",
              backgroundRepeat: "no-repeat",
      }}>

      <Fade bottom>
      <div class="center">
        <h1 style={{
          opacity: "100%",
          color: "white"
        }}>My Recent Work </h1>
      </div>
      </Fade>
    </div>
      

      <div className="container" style={{
        padding: "40px"
    }}>
        <div className="row" style={{
          display: "flex",
          alignItems: "center"
        }}>
          <div className="col">
            <div
              className="col"
              style={{
                textAlign: "center",
                padding: "40px",
              }}
            >
              <Fade left>
              <h1>Kingdom Man</h1>
              <p>
                Kingdom Man is my latest React project to show all the details
                of Inspire Waikele’s event, Kingdom Man. It is a mobile app that
                lets you sign up, gives you details and connect with Inspires
                team.
              </p>
              </Fade>
            </div>
          </div>
          <Fade right>
          <img
            className="col"
            src={KMPhone}/>
          </Fade>
        </div>
      </div>

      <br />

      <div className="container">
        <div className="row" style={{
          display: "flex",
          alignItems: "center"
        }}>
          <div className="col"></div>
          <Fade left>
          <img
            className="col"
            src={Nucamp}
            style={{
              width: "80vh",
              padding: "40px",
            }}
          />
          </Fade>

          <div
            className="col"
            style={{
              textAlign: "center",
              padding: "40px",
            }}
          >
            <Fade right>
            <h1>Nucampsite</h1>
            <p>
              Nucampsite is a campsite website and app that was designed by the
              Nucamp Bootcamp. It features fron end with React.js and Redux as
              well as back end with Node.js and mongoDB.
            </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RecentWork;


/*
   <img src={water} height="300px" opacity=".5">
            <h1 style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "10vh",
            }}>My Recent Work</h1>
        </img>


        style={{
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            
          }}
*/