import "./hero.scss"
import {motion} from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration:1,
            staggerChildren:0.1
        },
    },
};

const Hero = () => {

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Hi, I'm Jess.</motion.h2>
                    <motion.h1 variants={textVariants}>
                        I'm a software developer and a fourth-year Computer Science student at the University of Waterloo. 
                        Experienced in both frontend and backend development, I'm keen on expanding my expertise and being
                        a continuous learner.
                    </motion.h1>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;