import React from "react";
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState, useEffect } from "react";

function Hero() {
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

    return (
        <section className="relative w-screen mx-auto bg-primary h-max min-h-screen">
            <div className="flex flex-col justify-center items-center">
                <div className={`${styles.paddingX} absolute inset-0 top-[100px] mx-w-7xl mx-auto flex flex-row justify-between items-center flex-wrap gap-0`}>
                    <div className={`flex-1 flex flex-col items-start justify-center gap-5 `}>
                        <h1 className={`${styles.heroHeadText} text-white font-thin`}> Hello, I'm <br /><span className={`text-[#eeb639] ${isMobile? 'text-6xl' : 'text-8xl'} font-bold`}>Pranav Rao</span></h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>A Student, a Web Developer and ML Enthusiast</p>
                        <div className="w-80 sm:w-200 h-1 golden-gradient mt-5"></div>
                    </div>
                    <div className={`flex-1 w-full ${isMobile ? 'h-2/6': 'h-4/6 -mt-500'}`}>
                        <ComputersCanvas />
                    </div>
                </div>
                <div className={`absolute bottom-10 w-full flex justify-center items-center`}>
                    <a href="#interests">
                        <div className={`w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2`}>
                            <motion.dev
                                animate={{
                                    y: [0,24,0]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: 'loop'
                                }}
                                className="w-3 h-3 rounded-full bg-secondary mb-10"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;