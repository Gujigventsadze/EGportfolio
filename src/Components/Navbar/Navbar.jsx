import "./Navbar.css";
import pentagram from "../../assets/pentagram.png";
import fb from "../../assets/facebook (2).png";
import gh from "../../assets/github (1).png";
import linkedIn from "../../assets/linkedin (1).png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [link, setLink] = useState("home");

  const handleLink = (dir) => {
    setLink(dir);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section id="navbar">
        <ul className="navbar-links">
          <Link
            to="/"
            className={link === "home" ? "active-link" : "link"}
            onClick={() => handleLink("home")}
          >
            HOME
          </Link>
          <Link
            to="/projects"
            className={link === "projects" ? "active-link" : "link"}
            onClick={() => handleLink("projects")}
          >
            PROJECTS
          </Link>
          <Link
            to="/career"
            className={link === "about" ? "active-link" : "link"}
            onClick={() => handleLink("career")}
          >
            CAREER
          </Link>
          <Link
            to="/contact"
            className={link === "contact" ? "active-link" : "link"}
            onClick={() => handleLink("contact")}
          >
            CONTACT
          </Link>
        </ul>
        <div className="middle">
          <img src={pentagram} draggable={false} />
        </div>
        <div className="navbar-right">
          <div>
            <Link to="https://github.com/Gujigventsadze" target="__blank">
              <img src={gh} />
            </Link>
          </div>
          <div>
            <Link
              to="https://www.linkedin.com/in/guji-gventsadze-95b214327/"
              target="__blank"
            >
              <img src={linkedIn} />
            </Link>
          </div>
          <div>
            <Link to="https://www.facebook.com/guji.gvencadze" target="__blank">
              <img src={fb} />
            </Link>
          </div>
        </div>
        <div className="resp-title">EGportfolio</div>
        <div className="hamburger" onClick={handleMenuClick}>
          <div className={isMenuOpen ? "line1-active" : "line1"}></div>
          <div className={isMenuOpen ? "line2-active" : "line2"}></div>
          <div className={isMenuOpen ? "line3-active" : "line3"}></div>
        </div>
      </section>
      <div className={isMenuOpen ? "resp-links-open" : "resp-links"}>
        <Link to="/" onClick={handleMenuClick}>
          Home
        </Link>
        <Link to="/projects" onClick={handleMenuClick}>
          Projects
        </Link>
        <Link to="/career" onClick={handleMenuClick}>
          Career
        </Link>
        <Link to="/contact" onClick={handleMenuClick}>
          Contact
        </Link>
        <Link
          to="https://github.com/Gujigventsadze"
          target="__blank"
          onClick={handleMenuClick}
        >
          Github
        </Link>
        <Link
          to="https://www.linkedin.com/in/guji-gventsadze-95b214327/"
          target="__blank"
          onClick={handleMenuClick}
        >
          LinkedIn
        </Link>
        <Link
          style={{ marginBottom: "15px" }}
          to="https://www.facebook.com/guji.gvencadze"
          target="__blank"
          onClick={handleMenuClick}
        >
          Facebook
        </Link>
      </div>
    </>
  );
};

export default Navbar;
