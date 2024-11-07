import "./Careerbox.css";
import PropTypes from "prop-types";

const Careerbox = (props) => {
  return (
    <div className="career-container">
      <div className="career-top">
        <div className="career-title">{props.title}</div>
        <div className="career-date">{props.date}</div>
      </div>
      <div className="career-body">{props.body}</div>
      <div className="career-ed-lvl">Education Level: {props.edLvl}</div>
    </div>
  );
};

export default Careerbox;

Careerbox.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  edLvl: PropTypes.string.isRequired,
};
