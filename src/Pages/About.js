import React from 'react'
import './About.css'
import { BsCheckAll } from "react-icons/bs";
const About = () => {
    return (
        <>
        <section id="about" className="about-us">
            <div className="fluid-container">
                <div className="row">
                    <div className="col-lg-5 align-items-stretch video-box " >
                        <img
                            className="d-block w-100 h-100 "
                            src="https://images.pexels.com/photos/5775055/pexels-photo-5775055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="Third slide"/>
                    </div>
                    <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
                        <div className="content">
                            <h3>This is the best delisjhei <strong>velit pariatur architecto aut nihil</strong></h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                            </p>

                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            
                            <ul>
                                <li><i><BsCheckAll/></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i><BsCheckAll/></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i><BsCheckAll/></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat</li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                id est laborum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About
