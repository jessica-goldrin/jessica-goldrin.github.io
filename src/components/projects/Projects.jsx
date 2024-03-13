import "./projects.scss"
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

const Projects = () => {
    return (
        <motion.div className="projects" variants={textVariants} initial="initial" animate="animate">
            <motion.div className="textContainer">
                <div className="title">
                    <h1>Projects</h1>
                </div>
            </motion.div>
            <motion.div className="listContainer">
                <div className="box">
                    <h2>Unicorn Ubers</h2>
                    <div className="technologies">
                        <div className="technology-box">AWS Lambda</div>
                        <div className="technology-box">DynamoDB</div>
                        <div className="technology-box">RESTful API</div>
                        <div className="technology-box">API Gateway</div>
                    </div>
                    <p>
                    Developed and deployed a dynamic, serverless web application that facilitated unicorn rides, leveraging AWS Amplify Console for hosting static resources with continuous deployment. Implemented user registration, email confirmation, and login functionalities using AWS Cognito. Developed a backend process for unicorn dispatching, utilizing AWS Lambda and DynamoDB to efficiently manage requests. Additionally, constructed and deployed a publicly-accessible RESTful API via AWS API Gateway and Lambda, enhancing user interaction and service accessibility.
                    </p>
                </div>
                <div className="box">
                    <h2>Digital Portfolio</h2>
                    <div className="technologies">
                        <div className="technology-box">EC2</div>
                        <div className="technology-box">RDS</div>
                        <div className="technology-box">Route 53</div>
                        <div className="technology-box">ASG</div>
                        <div className="technology-box">VPC</div>
                    </div>
                    <p>
                    Deployed and hosted highly-available WordPress digital portfolio using EC2, RDS, Route 53, ASG and VPC.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Projects