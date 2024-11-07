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
import "./Techstack.css";

const Techstack = () => {
  return (
    <div>
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
    </div>
  );
};

export default Techstack;
