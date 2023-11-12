import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { education } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";

const EducationCard = ({ education }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: '#202010', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #202010' }}
            date={education.date}
            iconStyle={{ background: '#eeb639' }}
            position="right"
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{education.degree}</h3>
                <p className="text-secondary text-[20px] font-semibold" style={{ margin: 0 }}>{education.title}, {education.place_name}</p>
                <p className="text-secondary text-[12px] font-semibold mt-5">{education.grade}</p>
            </div>
        </VerticalTimelineElement>
    )
}

function Education() {
    return (
        <div>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center mt-20`}>WHERE I GRADUATED FROM</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>Education</h2>
            </motion.div>
            <div className='my-20 flex flex-col'>
                <VerticalTimeline>
                    {education.map((edu, index) => (
                        <EducationCard
                            key={`education-${index}`}
                            education={edu}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default SectionWrapper(Education);