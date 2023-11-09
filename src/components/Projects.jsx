import React from "react";
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets/assets';
import { SectionWrapper } from "../hoc";
import { projects } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import HorizontalScroll from "react-scroll-horizontal";

const ProjectCard = ({ index, name, subdescription, description, tags, image, source_code_link, child }) => {
    return (
        <div style={child} className="text-white">{name}</div>
    )
}

function Projects() {
    const child = { width: `80vw`, height: `50vh` }

    return (
        <div className="bg-primary mt-100 w-full">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>MY WORK</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
            </motion.div>
            <div className='mt-20 flex flex-row flex-wrap gap-10 justify-center items-center'>
                <HorizontalScroll>
                    {projects.map((project, index) => (
                        <ProjectCard key={`project-${index}`} index={index} {...project} child={child}/>
                    ))}
                </HorizontalScroll>
            </div>
        </div>
    )
}

export default SectionWrapper(Projects);