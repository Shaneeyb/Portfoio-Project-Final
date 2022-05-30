import React, { useEffect } from "react";
import "../tes.scss";
import Mom from "../Img/Mom.png"
import Henry from "../Img/Henry.png";
import Nick from "../Img/Nick.png";
import BlueArt from "../Img/BlueArt.jpg"
import Aos from "aos";
import "aos/dist/aos.css";

function Testimony() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


    return (
      <div
        id="testimony"
        className="testimony"
        data-aos="fade-right"
        style={{
          backgroundImage: { BlueArt },
        }}
      >
        {/* Card 1 start */}
        <div className="col-md-4 mt-4">
          <div className="card profile-card-1">
            <div className="card-img-block">
              <img className="card-img-top" src={Mom} alt="My Mom" />
            </div>
            <div className="card-body pt-0">
              <h5 className="card-title">My Mom</h5>
              <p className="card-desc">The best mom of all times</p>
              <p className="card-text">
                "He is so smart and handsome and fixes my computer all the
                time!"
              </p>
            </div>
          </div>
        </div>
        {/* Card 1 end */}

        {/* Card 2 start */}
        <div className="col-md-4 mt-4">
          <div className="card profile-card-2">
            <div className="card-img-block">
              <img className="card-img-top" src={Henry} alt="Henry" />
            </div>
            <div className="card-body pt-0">
              <h5 classname="card-title">Henry Motunui</h5>
              <p className="card-desc">
                Senior Full Stack developer at Inspire Waikele
              </p>
              <p className="card-text">
                "He is a very diligent worker and good at solving problems."
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 end */}

        {/* Card 3 start */}
        <div className="col-md-4 mt-4">
          <div className="card profile-card-3">
            <div className="card-img-block">
              <img className="card-img-top" src={Nick} alt="My Mom" />
            </div>
            <div className="card-body pt-0">
              <h5 className="card-title">Nick Galang</h5>
              <p className="card-desc">CEO of The Creative Co.</p>
              <p className="card-text">
                "His creativity and positivity made him very easy and fun to
                work with!"
              </p>
            </div>
          </div>
        </div>
        {/* Card 3 end */}
      </div>
    );
}

export default Testimony;
