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
            <div className="flex flex-row justify-center items-center flex-wrap py-20 px-0 md:px-28 sm:px-80 gap-5">
                {technologies.map((tech, index) => (
                    <motion.div
                        variants={fadeIn("right", "spring", 0.1 * index, 2)}
                        className='w-20 sm:w-28 p-2 bg-[#333340] rounded-[10px]' key={tech.name}
                    >
                        <img src={tech.icon} />
                        <p className="text-center text-[0.6rem] sm:text-[0.8rem]">{tech.name}</p>
                    </motion.div>   
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Tech);