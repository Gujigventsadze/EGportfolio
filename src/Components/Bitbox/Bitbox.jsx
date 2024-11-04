import "./Bitbox.css";
import emoji from "../../assets/Screenshot_2024-11-04_172037-removebg-preview.png";
import html from "../../assets/html-5.png";
import css from "../../assets/css-3.png";
import js from "../../assets/js.png";
import react from "../../assets/science.png";
import node from "../../assets/programing.png";
import ts from "../../assets/typescript.png";
import postgre from "../../assets/postgre.png";
import py from "../../assets/python.png";
import ex from "../../assets/exp.png";
import tp from "../../assets/apple-icon.png";
import rn from "../../assets/png-transparent-react-native-hd-logo-removebg-preview.png";
import { useState } from "react";

const Bitbox = () => {
  const [techStack, setTechStack] = useState(false);

  const handleTech = () => {
    setTechStack(!techStack);
  };

  return (
    <section id="intro">
      <div className="intro-container">
        <div
          className={techStack ? "stack-container-visible" : "stack-container"}
        >
          <div className="stack-grid">
            <img src={html} />
            <img src={js} />
            <img src={css} />
            <img src={react} />
            <img src={node} />
            <img src={py} />
            <img src={ts} />
            <img src={postgre} />
            <img src={ex} />
            <img src={tp} />
            <img src={rn} />
          </div>
          <button className="intro-button" onClick={handleTech}>
            Back
          </button>
        </div>
        <div className={techStack ? "display-none" : "intro-box"}>
          <div className="intro-img">
            <img src={emoji} />
          </div>
          <div className="intro-header">HEY, I`M ELGUJA</div>
          <div className="intro-header2">FULL-STACK DEVELOPER</div>
          <div className="intro-body">
            I create websites with intuitive designs, to achieve seamless user
            experience. For more details please visit the Projects Section
          </div>
          <button className="intro-button" onClick={handleTech}>
            Tech Stack
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bitbox;
