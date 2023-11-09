import { motion, stagger } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => function HOC() {
    return(
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} relative z-0`}
        >
            <span className="hash-span"  id={idName}>&nbsp;</span>
            <Component />
        </motion.section>
    )
}
export default SectionWrapper;