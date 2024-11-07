import "./Careerpage.css";
import Careerbox from "../../Components/Careerbox/Careerbox";
import newton from "../../assets/newtonlogo.jpg";
import iset from "../../assets/isetLogo.png";
import erasmus from "../../assets/erasmusLogo.jpg";
import gtu from "../../assets/gtuLogo.jpg";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
const Careerpage = () => {
  const isWideScreen = useMediaQuery("(max-width: 426px)");

  return (
    <motion.section
      id="career-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Timeline
        position={isWideScreen ? "right" : "alternate"}
        sx={{ width: "100%" }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <img
                src={newton}
                style={{
                  width: isWideScreen ? "30px" : "70px",
                  height: isWideScreen ? "30px" : "70px",
                  borderRadius: "50%",
                }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Careerbox
              title="Newton Free School"
              date="2013 - 2021"
              body="I graduated from Newton Free School with a High School Diploma. After achieving a perfect score on the National Exams, I was awarded a full scholarship and continued my studies at ISET."
              edLvl="High School Diploma"
            />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <img
                src={iset}
                style={{
                  width: isWideScreen ? "30px" : "70px",
                  height: isWideScreen ? "30px" : "70px",
                  borderRadius: "50%",
                }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Careerbox
              title="ISET University"
              date="2021 - 2023"
              body="I pursued my studies at ISET, where I chose Economics as my major. After spending 1.5 years in the program, I decided to change direction and shift my focus to a career in programming."
              edLvl="Bachelor's Degree"
            />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <img
                src={gtu}
                style={{
                  width: isWideScreen ? "30px" : "70px",
                  height: isWideScreen ? "30px" : "70px",
                  borderRadius: "50%",
                }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Careerbox
              title="GTU"
              date="2023 - Present"
              body="I am currently a Computer Science major at GTU. Beyond the core curriculum, I also explore other areas of programming that I find particularly interesting."
              edLvl="Bachelor's Degree"
            />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <img
                src={erasmus}
                style={{
                  width: isWideScreen ? "30px" : "70px",
                  height: isWideScreen ? "30px" : "70px",
                  borderRadius: "50%",
                }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Careerbox
              title="Erasmus+"
              date="2024 FEB - 2024 JUL"
              body="I participated in the Erasmus+ Exchange program, which allowed me to spend 5 months in Spain at the University of Cordoba, where I deepened my knowledge of Computer Science."
              edLvl="Bachelor's Degree - Exchange Program"
            />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </motion.section>
  );
};
export default Careerpage;
