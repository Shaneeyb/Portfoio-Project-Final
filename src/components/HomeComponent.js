import React from "react";
import BlueSmTriangle from "../Img/BlueSmTriangle.png";
import BigBlueCircle from "../Img/BigBlueCircle.png";
import OrangeSmTriangle from "../Img/OrangeSmTriangle.png";
import OrangeBigSquare from "../Img/OrangeBigSqaure.png";
import Portrait from "../Img/Shane_Together.png";
import OceanBG from "../Img/Shane_OceanOnly.png";
import SoloPic from "../Img/Shane_ShaneOnly.png"

function handleMouseOver(e) {
  console.log(e);
}

function Home() {

  
  return (
    
    <div
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      <div
        style={{
          zIndex: "0",
          position: "absolute",
        }}
      >
        {/* Shapes */}
        <div
          style={{
            position: "relative",
            width: "100vw",
            height:"100vh",
          }}
        >
          <img
            src={BlueSmTriangle}
            style={{
              height: "8vh",
              position: "absolute",
              top: "60px",
              left: "10px",
              zIndex: "-1"
            }}
            onMouseOver={handleMouseOver}
          />

          <img
            src={OrangeSmTriangle}
            style={{
              height: "8vh",
              position: "absolute",
              top: "800px",
              left: "700px",
            }}
          />

          <img
            src={BigBlueCircle}
            style={{
              height: "500px",
              position: "absolute",
              top: "-100px",
              right: "-200px",
            }}
          />

          <img
            src={BigBlueCircle}
            style={{
              height: "35vh",
              position: "absolute",
              bottom: "0",
              left: "-100px",
            }}
          />
          {/* End of Shapes */}
        </div>
      </div>

      {/* Position: Absolute is positioned Relative to the nearest PARENT*/}
      {/* Position: Relative is positioned Relative to its normal position */}
      
      <div className="container">
        <div className="row"style={{
          height: "100vh",
          alignItems: "center"
        }}>
          <div
            className="col-sm-6">
            <div
              style={{
                backgroundColor: "FBAB7E",
                backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
                width: "100%",
                zIndex: "9"
              }}
            >
              <img
                src={Portrait}
                alt="portrait"
                style={{
                  width: "100%",
                  position: "relative",
                  zIndex: "10",
                  top: "10px",
                  left: "10px",
                }}
              />
             
            </div>
          </div>

          <div
            className="col-sm-6" style={{fontSize: "3.8rem"}}>
            Hi, i'm Shane and sometimes I do things.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
