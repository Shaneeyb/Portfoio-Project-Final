import React from "react";
import BlueSmTriangle from "../Img/BlueSmTriangle.png";
import BigBlueCircle from "../Img/BigBlueCircle.png";
import OrangeSmTriangle from "../Img/OrangeSmTriangle.png";
import Portrait from "../Img/Shane_Together.png";
import OceanBG from "../Img/Shane_OceanOnly.png";
import SoloPic from "../Img/Shane_ShaneOnly.png";
import styles from "./HomeComponent.module.css";
import { motion } from "framer-motion";

function template({ rotate, x }) {
  return `rotate(${rotate}) translateX(${x})`;
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
            height: "100vh",
          }}
        >
          <motion.img
            src={BlueSmTriangle}
            style={{
              height: "8vh",
              position: "absolute",
              top: "100px",
              left: "200px",
            }}
            whileHover={{ scale: 1.4 }}
            whileTap={{
              scale: "0.8",
              borderRadius: "100%",
            }}
            alt="Small Blue Triangle"
          />

          <motion.img
            src={OrangeSmTriangle}
            style={{
              height: "8vh",
              position: "absolute",
              top: "800px",
              left: "700px",
            }}
            whileHover={{ scale: 1.4 }}
            whileTap={{
              scale: "0.8",
              borderRadius: "100%",
            }}
            alt="Small Orange Triangle"
          />

          <motion.img
            src={BigBlueCircle}
            style={{
              height: "500px",
              position: "absolute",
              top: "-100px",
              right: "-200px",
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: "0.8",
              borderRadius: "100%",
            }}
            alt="Big Blue Circle"
          />

          <motion.img
            src={BigBlueCircle}
            style={{
              height: "35vh",
              position: "absolute",
              bottom: "0",
              left: "-100px",
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: "0.8",
              borderRadius: "100%",
            }}
            alt="Big Blue Circle"
          />
          {/* End of Shapes */}
        </div>
      </div>

      {/* Position: Absolute is positioned Relative to the nearest PARENT*/}
      {/* Position: Relative is positioned Relative to its normal position */}

      <div
        className="container"
        style={{
          height: "100vh",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          className="row"
          style={{
            zIndex: "10000",
          }}
        >
          <div className="col-md-8 col-lg-6">
            <motion.div
              whileHover="hover"
              style={{
                backgroundColor: "FBAB7E",
                backgroundImage:
                  "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
                width: "100%",
                zIndex: "9",
                position: "relative",
              }}
            >
              <motion.img
                variants={portraitHover}
                src={SoloPic}
                className={styles.solo}
                alt="portrait"
              />
              <motion.img
                variants={oceanHover}
                src={OceanBG}
                className={styles.portrait}
                alt="portrait"
              />
            </motion.div>
          </div>

          <div
            className="col-md-4 col-lg-6 text"
            style={{
              zIndex: "1000",
            }}
          >
            Hi, I'm Shane Burke and I create memorable web experiences.
          </div>
        </div>
      </div>
    </div>
  );
}

const portraitHover = { hover: { x: 225 } };

const oceanHover ={ hover: { x: 100 } };

export default Home;
