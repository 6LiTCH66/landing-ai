import React, {useEffect} from 'react';
import "./solutions.css"
import left_arrow from "../../assets/left_arrow.svg"
import right_arrow from "../../assets/right_arrow.svg"
import solution_pro from "../../assets/solution_pro.svg"
import Aos from "aos";
import "aos/dist/aos.css";
function Solutions(props) {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    return (
        <div className="solutions-box" id="solutions">

            <div className="solutions-container">
                <div className="solutions-shadow">

                </div>
                <div className="solutions-container_title">
                    <div className="solutions_title" data-aos="zoom-out">
                        <span>Our </span>
                        <span>
                            Solutions
                        </span>
                    </div>

                </div>

                <div className="solutions-container_content">

                    <div className="arrows" data-aos="fade-right">
                        <img src={left_arrow} alt=""/>
                    </div>

                    <div className="solutions-content">


                        <div className="solution-project_shadow" data-aos="fade-up">
                            <div className="solution-project">

                                <div className="solution-project_icon">
                                    <img src={solution_pro} alt="solution project"/>
                                </div>

                                <div className="solution-project_content">
                                    <div className="solution-project_content-title">
                                        <span>SOLUTION_PROJECTS</span>
                                    </div>

                                    <div className="solution-project_content-description">
                                        <span>Tired of hiking gas fees, and spending tons of money on development to extend limited functionality?</span>
                                    </div>
                                    <div className="solution-project_content-button">
                                        <a href="#join">Join our ecosystem</a>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="solution-project_shadow" data-aos="fade-down">
                            <div className="solution-project">

                                <div className="solution-project_icon">
                                    <img src={solution_pro} alt="solution project"/>
                                </div>

                                <div className="solution-project_content">
                                    <div className="solution-project_content-title">
                                        <span>SOLUTION_PROJECTS</span>
                                    </div>

                                    <div className="solution-project_content-description">
                                        <span>Tired of hiking gas fees, and spending tons of money on development to extend limited functionality?</span>
                                    </div>
                                    <div className="solution-project_content-button">
                                        <a href="#join">Join our ecosystem</a>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="solution-project_shadow" data-aos="fade-up">
                            <div className="solution-project">

                                <div className="solution-project_icon">
                                    <img src={solution_pro} alt="solution project"/>
                                </div>

                                <div className="solution-project_content">
                                    <div className="solution-project_content-title">
                                        <span>SOLUTION_PROJECTS</span>
                                    </div>

                                    <div className="solution-project_content-description">
                                        <span>Tired of hiking gas fees, and spending tons of money on development to extend limited functionality?</span>
                                    </div>
                                    <div className="solution-project_content-button">
                                        <a href="#join">Join our ecosystem</a>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="arrows" data-aos="fade-left">
                        <img src={right_arrow} alt=""/>
                    </div>
                </div>


                <div className="solutions-shadow_container">
                    <div className="solutions-shadow_2">

                    </div>
                    <div className="solutions-shadow_3">

                    </div>
                </div>

            </div>
        </div>

    );
}

export default Solutions;