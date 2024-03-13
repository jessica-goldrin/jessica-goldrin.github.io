import "./contact.scss"
import { motion } from "framer-motion"

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

const Contact = () => {
    const openLinkedIn = () => {
        const linkedinURL = 'http://www.linkedin.com/in/jessica-goldrin';
        window.open(linkedinURL, '_blank');
    };

    return (
        <motion.div className="contact" variants={textVariants} initial="initial" animate="animate">
            <motion.div className="textContainer">
                <div className="title">
                    <h1>Contact me</h1>
                    <h2>Reach me by phone, email, or connect with me on LinkedIn.</h2>
                    <h3>(416) 887-2685</h3>
                    <h3>jgoldrin@uwaterloo.ca</h3>
                    <h3> <a href="#" onClick={openLinkedIn}>
                        LinkedIn
                    </a></h3>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Contact