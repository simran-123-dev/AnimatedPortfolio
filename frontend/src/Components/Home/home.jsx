import React from "react";
import "./home.css";
import fox from "../../assets/fox.png";
import { TypeAnimation } from "react-type-animation";
const home = () => {
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'm</div>
          <div className="line2">SIMRANJEET KAUR</div>
          <div className="line3">
            {/* <TypingEffect/> */}
            <TypeAnimation
              sequence={[
                "WEB DEVELOPER",
                1000,
                "SOFTWARE DEVELOPER",
                1000,
                "EDITOR",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
          <button>Hire Me</button>
        </div>
      </div>
      <div className="righthome">
        <img src={fox}></img>
      </div>
    </div>
  );
};

export default home;
