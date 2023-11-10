import React from "react";
import { styles } from "../styles";
import { motion } from 'framer-motion';
import { technologies } from '../constants';
import { textVariant } from "../utils/motion";

function Tech() {
    return (
        <div>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center mt-20`}>WHAT I KNOW</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>Languages, Tools and Frameworks</h2>
            </motion.div>
            <div className="flex flex-row justify-center items-center">
                {technologies.map((tech) => (
                    <div className='w-28 h-28 px-2' key={tech.name}>
                        <img src={tech.icon} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tech;