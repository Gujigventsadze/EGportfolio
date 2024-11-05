import "./Projectbox.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Projectbox = (props) => {
  return (
    <Link
      to={props.linkToRep}
      target="__blank"
      className="projectbox-container"
    >
      <div className="projectbox-img">
        <img src={props.img} />
      </div>
      <div className="projectbox-title">
        <div>{props.title1}</div>
        <div>{props.title2}</div>
        <div>{props.title3}</div>
      </div>
      <div className="projectbox-body">
        <div className="body-title">[CAMPAIGN]</div>
        <div className="body-text">{props.body}</div>
      </div>
    </Link>
  );
};

export default Projectbox;

Projectbox.propTypes = {
  linkToRep: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string,
  title3: PropTypes.string,
  body: PropTypes.string.isRequired,
};
