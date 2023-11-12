import React from "react";
import Education from "./Education";
import Tech from "./Tech";
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";
import Achievements from "./Achievements";

const About = () => {
    return (
        <div className="bg-primary mt-100 w-full">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>KNOW MORE ABOUT ME</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>About Me</h2>
            </motion.div>
            <motion.div variants={textVariant()}>
                <p className="text-center sm:text-justify text-white text-[20px] mt-10">I am a dedicated MERN stack developer currently pursuing a Bachelor's degree in Computer Science at BMS College of Engineering in Bangalore. Proficient in MongoDB, Express.js, React.js, and Node.js, I have actively applied these skills in projects. I am deeply interested in the fusion of web development and machine learning, continually expanding my knowledge in both areas. A regular participant in hackathons, I thrive in high-pressure environments, showcasing problem-solving abilities and collaborative teamwork. I am now actively seeking new opportunities to contribute my skills and passion for innovation. Beyond my technical prowess, I engage with the tech community through extracurricular activities, such as participating in clubs and attendance at workshops. A highly dedicated individual, I bring not only technical skills but also a commitment to staying abreast of the latest industry trends. Outside of coding, I find solace in my love for music, which adds a creative dimension to my personality.</p>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(About, "about");