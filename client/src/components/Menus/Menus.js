import React from 'react';
import './Menus.css';
import { Link } from "react-scroll";
import { FcHome, FcAbout, FcEngineering, FcVoicePresentation, FcGraduationCap, FcOrgUnit, FcBusinessContact } from 'react-icons/fc';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import profilePic from '../../utils/Photo_1.jpg';
const Menus = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <>
                    <Zoom>
                        <div className="navbar-profile-pic">
                            <img src={profilePic} alt="profile_pic" />
                        </div>
                    </Zoom>
                    <Fade left>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={400}
                                        activeClass="active"
                                    >
                                        <FcHome />
                                        Home
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={400}
                                        activeClass="active"
                                    >
                                        <FcAbout />
                                        About
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="education"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={400}
                                        activeClass="active"
                                    >
                                        <FcGraduationCap />
                                        Education
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="stack"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={400}
                                        activeClass="active"
                                    >
                                        <FcEngineering />
                                        Stack
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="project"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={400}
                                        activeClass="active"
                                    >
                                        <FcOrgUnit /> Project
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="work"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={400}
                                        activeClass="active"
                                    >
                                        <FcVoicePresentation /> Experience
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={400}
                                        activeClass="active"
                                    >
                                        <FcBusinessContact />
                                        Contact
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </Fade>
                </>
            ) : (
                <>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={400}
                                    activeClass="active"
                                >
                                    <FcHome />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={400}
                                    activeClass="active"
                                >
                                    <FcAbout />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="education"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={400}
                                    activeClass="active"
                                >
                                    <FcGraduationCap />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="stack"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={400}
                                    activeClass="active"
                                >
                                    <FcEngineering />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="project"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={400}
                                    activeClass="active"
                                >
                                    <FcOrgUnit />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="work"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={400}
                                    activeClass="active"
                                >
                                    <FcVoicePresentation />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={400}
                                    activeClass="active"
                                >
                                    <FcBusinessContact />
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )
            }
        </>
    );
}

export default Menus;
