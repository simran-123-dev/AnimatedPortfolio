import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id="about">

      {/* LEFT SIDE */}
      <div className="leftabout">
        <div className="timeline">

          <div className="item">
            <div className="dot"></div>
            <div className="text">
              <h2>Personal Info</h2>
              <p><span>NAME :</span> Ayush Sahu</p>
              <p><span>AGE :</span> 21 Years</p>
              <p><span>GENDER :</span> Male</p>
              <p><span>LANGUAGE KNOWN :</span> Hindi, English</p>
            </div>
          </div>

          <div className="item">
            <div className="dot"></div>
            <div className="text">
              <h2>Education</h2>
              <p><span>DEGREE :</span> BTECH</p>
              <p><span>BRANCH :</span> Computer Science & Engineering</p>
              <p><span>CGPA :</span> 8.2</p>
            </div>
          </div>

          <div className="item">
            <div className="dot"></div>
            <div className="text">
              <h2>Skills</h2>
              <p>MERN Stack Web Developer</p>
              <p>Java</p>
              <p>DSA</p>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="rightabout">
        <div className="card">MERN STACK WEB DEVELOPER</div>
        <div className="card">JAVA</div>
        <div className="card">DSA</div>
      </div>

    </div>
  );
};

export default About;