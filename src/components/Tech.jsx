import React from "react";
import { styles } from "../styles";
import { motion } from 'framer-motion';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";

function Tech() {
    return (
        <div>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center mt-20`}>WHAT I KNOW</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>Languages, Tools and Frameworks</h2>
            </motion.div>
            <div className="flex flex-row justify-center items-center flex-wrap py-20 px-10 sm:px-80 gap-5">
                {technologies.map((tech, index) => (
                    <motion.div
                        variants={fadeIn("right", "spring", 0.1 * index, 2)}
                        className='w-28 h-28 px-2' key={tech.name}
                    >
                        <img src={tech.icon} />
                    </motion.div>   
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Tech);