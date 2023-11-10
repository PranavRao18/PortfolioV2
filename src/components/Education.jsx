import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { education } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";

const EducationCard = ({education}) => {
    return(
        <></>
    )
}

function Education(){
    return (
        <div className="mt-20 flex flex-col">
            <VerticalTimeline>
                {education.map((education, index) => {
                    <EducationCard key={index} education={education} />
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Education;