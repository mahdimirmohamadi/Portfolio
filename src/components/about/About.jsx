import React from "react";
import "./About.css";
import about from "../../img/about.png";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={about} alt="about" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I've been familiar with programming since 14. i started with PASCAL
          language(now that i'm writing it it sounds kinda weird to me😂)
        </p>
        <p className="a-desc">
          After that i learned Python and a little Django and since 2021 i
          entered Front-End web developing cause of several reasons:
          <ol>
            <li>
              I WANTED A JOB! (i know you were expecting something more
              Emotional. sorry about that😒)
            </li>
            <li>
              nothing was more enjoyable to me than Creating and Developing
              Websites. i could've sit hours and do coding without even noticing
              it(YES. just like FAIRYTALES 🦄)
            </li>
            <li>
              wasn't the first 2 reasons satisfyinf enough for you? what else is
              it that you're seeking so hard for?😋
            </li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default About;
