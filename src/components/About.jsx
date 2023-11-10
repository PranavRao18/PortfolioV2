import React from "react";
import Education from "./Education";
import Tech from "./Tech";
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";

const About = () => {
    return (
        <div className="bg-primary mt-100 w-full">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>KNOW MORE ABOUT ME</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>About Me</h2>
            </motion.div>
            <Education />
            <Tech />
        </div>
    )
}

export default SectionWrapper(About, "about");