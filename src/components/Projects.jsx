import React from "react";
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets/assets';
import { SectionWrapper } from "../hoc";
import { projects } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { useTransform, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from "react";

const ProjectCard = ({ index, project }) => {
    return (
        <div className="relative w-[300px] sm:w-[1200px] h-[380px] sm:h-[550px] text-white overflow-hidden bg-[#505020] rounded-[10px] sm:rounded-[30px] pr-3 p-1 sm:p-10">
            <a href={project.source_code_link} target="blank">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row w-full pt-3">
                        <div className="w-11/12"><p className="text-center text-[18px] sm:text-[28px] font-semibold">{project.name}</p></div>
                        <div className="w-1/12 flex justify-center items-center"><img src={github} className="flex-2 w-[40px]" /></div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center p-8">
                        <div className="flex-1 flex justify-center items-center"><img src={project.image} className="mt-1 sm:mt-5 rounded-[10px] w-4/5" /></div>
                        <div className="flex-1 flex flex-col">
                            <div className="pb-1 sm:pb-12 mt-5"><p className="text-[10px] sm:text-[19px] text-justify">{project.subdescription}</p></div>
                            <div><p className="text-justify text-[10px] sm:text-[15px] hidden sm:flex">{project.description}</p></div>
                        </div>
                    </div>
                    <div className='mt-0 px-10 sm:mt-4 flex flex-wrap gap-2'>
                        {project.tags.map((tag) => (
                            <p
                                key={`${project.name}-${tag}`}
                                className={`text-[10px] sm:text-[14px] text-[#ffff00] bg-[#aa7739] p-1 rounded-[15px]`}
                            >
                                #{tag}
                            </p>
                        ))}
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

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 576px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    const xvalue = isMobile ? ["2%", "-75%"] : ["6%", "-72%"];

    const x = useTransform(scrollYProgress, [0, 1], xvalue);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-primary mt-100">
            <div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-white text-center`}>MY WORK</p>
                <h2 className={`${styles.sectionHeadText} text-white text-center`}>Projects</h2>
            </div>
            <div className="sticky top-0 h-screen flex bg-primary w-full overflow-hidden">
                <motion.div style={{ x }} className='mt-20 flex flex-row justify-center items-center gap-10'>
                    {projects.map((project, index) => (
                        <ProjectCard key={`project-${index}`} index={index} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default SectionWrapper(Projects, "projects");