import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ServiceCard = ({ index, title, icon, content}) => {
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
                    className="bg-tertiary rounded-[20px] py-10 px-12 min-h-[280px] flex flex-col items-center justify-center text-justify"
                >
                    <h3 className="text-white text-[24px] font-bold text-center bg-tertiary">{title}</h3>
                    <i className={`${icon} fa-5x w-16 h-16 object-contain m-10 bg-tertiary`}></i>
                    <p className="text-white text-justify bg-tertiary">{content}</p>
                </div>

            </motion.div>
        </Tilt>
    )
}

function Interests() {
    return (
        <div className="bg-primary mt-100 w-fit">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>WHAT I LIKE TO DO</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>My Interests</h2>
            </motion.div>
            <div className='mt-20 flex flex-row flex-wrap gap-10 justify-center items-center'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Interests, "interests");