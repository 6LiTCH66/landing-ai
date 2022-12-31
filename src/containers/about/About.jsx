import React from 'react';
import "./about.css"
import apple_card from "../../assets/apple_card.svg"
import microsoft_card from "../../assets/Group 94.svg"
import boeing_card from "../../assets/Group 93.svg"
import about_vector from "../../assets/about_vector.svg"
function About(props) {
    return (
        <div className="about-main_container" id="about_us">
            <div className="about-container">

                <div className="about-info_container">
                    <div className="about_info-title">
                        <p>
                            <span>How it's </span>
                            <span>work</span>
                        </p>
                    </div>
                    <div className="about_info-description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non tellus orci ac auctor augue. Dignissim sodales ut eu sem integer vitae. Odio facilisis mauris sit amet massa vitae. Iaculis urna id volutpat lacus laoreet non curabitur.
                        </p>
                    </div>
                </div>

                <img src={about_vector} alt="about vector" className="about_vector"/>

                <div className="about-images_container">


                    <div className="about-images_cards">
                        <div className="about-images_shadow">

                        </div>
                        <div className="apple-card">
                            <img src={apple_card} alt=""/>
                        </div>

                        <div className="microsoft-card">
                            <img src={microsoft_card} alt=""/>
                        </div>

                        <div className="boeing-card">
                            <img src={boeing_card} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;