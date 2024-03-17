import "./navbar.scss"
import { motion } from "framer-motion"
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    const openLinkedIn = () => {
        const linkedinURL = 'http://www.linkedin.com/in/jessica-goldrin';
        window.open(linkedinURL, '_blank');
    };

    const openGithub = () => {
        const githubURL = 'https://github.com/jessica-goldrin';
        window.open(githubURL, '_blank');
    };

    const openResume = () => {
        const pdfURL = '/Resume 2024.pdf';
        window.open(pdfURL, '_blank');
    };

    return (
        <div className="navbar">
            <div className="wrapper">
                <ScrollLink to="Homepage" spy={true} smooth={true} offset={-70} duration={500}>
                    <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>Jessica Goldrin</motion.span>
                </ScrollLink>
                <div className="navItems">
                    <motion.button className="navItem" onClick={openResume} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                        RESUME
                    </motion.button>
                    <ScrollLink to="Work Experience" spy={true} smooth={true} offset={-70} duration={500}>
                        <motion.button className="navItem" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>WORK EXPERIENCE</motion.button>
                    </ScrollLink>
                    <ScrollLink to="Side Projects" spy={true} smooth={true} offset={-70} duration={500}>
                        <motion.button className="navItem" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>PROJECTS</motion.button>
                    </ScrollLink>
                    <ScrollLink to="Contact" spy={true} smooth={true} offset={-70} duration={500}>
                        <motion.button className="navItem" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>CONTACT</motion.button>
                    </ScrollLink>
                    <motion.button className="navItem" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                        <div className="social">
                            <a href="#" onClick={openLinkedIn}><img src="/In-White-26.png" alt="" /></a>
                        </div>
                    </motion.button>
                    <motion.button className="navItem" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                        <div className="social">
                            <a href="#" onClick={openGithub}><img src="/github-mark-white.png" alt="" /></a>
                        </div>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default Navbar