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
    const openResume = () => {
        // Replace 'path/to/your/resume.pdf' with the actual path to your PDF file
        const pdfURL = '/Resume 2023.pdf';
        window.open(pdfURL, '_blank');
    };

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Hi, I'm Jess.</motion.h2>
                    <motion.h1 variants={textVariants}>
                        I'm a software developer and a fourth-year Computer Science student at the University of Waterloo. 
                        I have experience with ...
                    </motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants} onClick={openResume}>Resume</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;