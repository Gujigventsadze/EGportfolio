import "./Projectspage.css";
import Projectbox from "../../Components/Projectbox/Projectbox";
import jobSearch from "../../assets/JobsearchLAPTOP.png";
import chatApp from "../../assets/chat-app.png";
import eCom from "../../assets/e-commerce.png";
import { Link } from "react-router-dom";

const Projectspage = () => {
  return (
    <section id="projects">
      <div className="projects-title">LIST OF PROJECTS</div>
      <div className="projects-container">
        <Projectbox
          linkToRep="https://github.com/Gujigventsadze/Job-Search-Portal"
          img={jobSearch}
          title1="JOB"
          title2="SEARCH"
          title3="PORTAL"
          body="Job Search Portal with optimized search engine, beautiful and intuitive UI"
        />
        <Projectbox
          linkToRep="https://github.com/Gujigventsadze/Capstone-Projects/tree/main/ChatApp"
          img={chatApp}
          title1="CHAT"
          title2="APPLICATION"
          body="Chat App, with features such as seen messages, adding people and etc. Used Chatengine."
        />
        <Projectbox
          linkToRep="https://github.com/Gujigventsadze/Capstone-Projects/tree/main/E-commerce"
          img={eCom}
          title1="E-COMMERCE"
          title2="WEBSITE"
          body="E-Commerce Store with flashy landing page, cart, product filtering and etc."
        />
      </div>
      <Link
        to="https://github.com/Gujigventsadze"
        target="__blank"
        className="see-more"
      >
        <button className="intro-button">See Full List</button>
      </Link>
    </section>
  );
};

export default Projectspage;
