import React from "react";
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets/assets';
import { SectionWrapper } from "../hoc";
import { projects } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { useTransform, useScroll } from 'framer-motion';
import { useRef } from "react";

const ProjectCard = ({ index, project }) => {
    return (
        <div style={{ width: '1200px', height: '500px' }} className="relative text-white overflow-hidden bg-tertiary rounded-[30px] p-10">
            <a href={project.source_code_link}>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row w-full">
                        <div className="w-11/12"><p className="text-center text-[28px] font-semibold">{project.name}</p></div>
                        <div className="w-1/12"><img src={github} className="flex-2 w-[40px]" /></div>
                    </div>
                    <div className="flex flex-row justify-center items-center p-8">
                        <div className="flex-1"><img src={project.image} className="mt-5 rounded-[10px] w-4/5" /></div>
                        <div className="flex-1 flex flex-col">
                            <div className="pb-12 mt-5"><p className="text-[19px] text-justify">{project.subdescription}</p></div>
                            <div><p className="text-justify">{project.description}</p></div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

function Projects() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-primary">
            <div className="sticky top-0 flex h-screen bg-primary mt-100 w-full items-center overflow-hidden">
                <motion.div variants={textVariant()}>
                    <p className={`${styles.sectionSubText} text-white text-center`}>MY WORK</p>
                    <h2 className={`${styles.sectionHeadText} text-white text-center`}>Projects</h2>
                </motion.div>
                <motion.div style={{ x }} className='mt-20 flex flex-row justify-center items-center gap-10'>
                    {projects.map((project, index) => (
                        <ProjectCard key={`project-${index}`} index={index} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default SectionWrapper(Projects);