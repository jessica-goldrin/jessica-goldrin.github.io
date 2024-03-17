import "./resume.scss"
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
            duration: 1,
            staggerChildren: 0.1
        },
    },
};

const Resume = () => {

    return (
        <motion.div className="resume" variants={textVariants} initial="initial" animate="animate">
            <motion.div className="textContainer">
                <div className="title">
                    <h1>Work Experience</h1>
                </div>
            </motion.div>
            <motion.div className="listContainer">
                <div className="box">
                    <h2>Software Developer Intern</h2>
                    <h3>Arctic Wolf Networks, Jan 2024 - April 2024</h3>
                    <div className="technologies">
                        <div className="technology-box">Kafka</div>
                        <div className="technology-box">Go</div>
                        <div className="technology-box">AWS</div>
                        <div className="technology-box">Kubernetes</div>
                    </div>
                    <p>
                        I succesfully migrated a critical repository from AWS SDK for Go V1 to V2, involving intricate code adaptation and comprehensive refactoring. Additionally, I resolved system crashes by addressing a Kafka offset commitment issue, ensuring proper handling in case of failed workflow initiation. I further enhanced the system's reliability by implementing robust error handling, validated through thorough unit testing to replicate error conditions.
                    </p>
                </div>
                <div className="box">
                    <h2>Application Developer Intern</h2>
                    <h3>1Password, Sep 2022 - Dec 2022</h3>
                    <div className="technologies">
                        <div className="technology-box">Kotlin</div>
                        <div className="technology-box">Android SDK</div>
                    </div>
                    <p>
                        I implemented a high-requested drag-and-drop functionality for list items and redesigned the UI based on Figma specifications, enhancing visual appeal and user experience. Additional improvements included optimizing UI navigation, constructing dynamic lists from backend data, and effectively addressing data loss concerns.
                    </p>
                </div>
                <div className="box">
                    <h2>Android Developer Intern</h2>
                    <h3>Rogers Comms., Jan 2022 - April 2022</h3>
                    <div className="technologies">
                        <div className="technology-box">Kotlin</div>
                        <div className="technology-box">Android SDK</div>
                    </div>
                    <p>
                        I enhanced the functionality and aesthetic appeal of mobile radio and news apps, ensuring a consistent visual experience by removing faulty files affecting weather icons. Additionally, I successfully resolved a crash issue associated with video sharing and investigated and addressed challenges related to the initial feed loading in certain apps, ensuring overall improved performance and user satisfaction.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Resume