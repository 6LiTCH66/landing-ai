import React from 'react';
import "./belief.css"
import eclipse from "../../assets/mockup-ellipse1.svg"
import belief_image from "../../assets/Group 95 (1).svg"
import eclipse_2 from "../../assets/mockup-ellipse2.svg"
function Belief(props) {
    return (
        <div className="belief-box" id="whitepaper">
            <img src={eclipse} alt="eclipse image" className="belief-box_shadow"/>
            <img src={eclipse_2} alt="eclipse image 2" className="belief-box_shadow2"/>

            <div className="belief-container">
                <div className="belief-info_container">

                    <div className="belief_info-title">
                        <p>
                            <span>Unique service for your convenience.</span>
                        </p>

                    </div>
                    <div className="belief_info-description">
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non tellus orci ac auctor augue. Dignissim sodales ut eu sem integer vitae. Odio facilisis mauris sit amet massa vitae. Iaculis urna id volutpat lacus laoreet non curabitur.
                            </span>
                        </p>
                    </div>

                </div>

                <div className="belief-images_container">
                    <img src={belief_image} alt=""/>
                </div>

            </div>
        </div>
    );
}

export default Belief;