import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { achievements } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";
import '@fortawesome/fontawesome-free/css/all.min.css';

const AchCard = ({ index, ach }) => {
    return (
        <Tilt className="max-w-xl gap-10">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="orange-yellow-gradient p-[2px] rounded-[20px] shadow-card"
            >
                <div options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                    className="bg-tertiary rounded-[20px] py-10 px-12 min-h-[280px] flex flex-col items-center justify-center center"
                >
                    <a href={ach.link} target="_blank" rel="noopener noreferrer">
                        <img
                            src={ach.image}
                            alt="Certificate"
                            style={{ cursor: "pointer" }}
                            className="w-2/3 h-1/3 mx-auto"
                        />
                    </a>
                    <h3 className="text-[28px] font-bold text-[#eeb639] bg-tertiary mt-2">{ach.title}</h3>
                    <h3 className="text-[24px] font-bold text-white bg-tertiary mb-2 text-center">{ach.subtitle}</h3>
                    <p className="text-white text-center bg-tertiary px-1 sm:px-16">{ach.text}</p>
                </div>

            </motion.div>
        </Tilt>
    )
}

function Achievements() {
    return (
        <div className="bg-primary mt-100 w-fit">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>WHAT I HAVE DONE</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>My Achievements</h2>
            </motion.div>
            <div className='mt-20 flex flex-row flex-wrap gap-10 justify-center items-center'>
                {achievements.map((ach, index) => (
                    <AchCard key={ach.title + ach.subtitle} index={index} ach={ach} />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Achievements);