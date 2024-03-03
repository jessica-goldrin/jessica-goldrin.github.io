import "./resume.scss"
import { motion } from "framer-motion"

const Resume = () => {
    return (
        <motion.div className="resume">
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
                        Successfully migrated a vital repository from AWS SDK for Go V1 to V2, entailing code adaptation for compatibility. Conducted necessary refactoring, consulting documentation for guidance on addressing V1-specific tools absent in V2
                        <br />Resolved system crashes by addressing a Kafka offset commitment issue, ensuring offsets are not committed in case of failed workflow initiation. Implemented robust error handling for graceful program termination and validated the solution through unit testing, replicating error conditions
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
                        Implemented highly requested drag and drop functionality for list items
                        <br />Redesigned UI according to Figma specification by adding and removing UI elements, and altering layouts to increase visual appeal and improve user experience
                        <br />Transformed UI to facilitate smoother navigation between dialogs and to correct popup flow
                        <br />Authored code which constructed and displayed lists modelled on back-end data
                        <br />Investigated and resolved data loss

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
                        Improved functionality and cosmetic appearance of mobile radio and news apps
                        <br />Located and removed faulty files to make weather icons across apps consistent
                        <b></b>Resolved crash that occurred when user tried to share video with contacts
                        <br />Investigated why feed did not load on first opening of some apps

                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Resume