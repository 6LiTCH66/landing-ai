import React from 'react';
import "./header.css";
import ai from "../../assets/ai.png"
import ai_2 from "../../assets/ai_2.svg"

function Header(props) {
    return (
        <div className="header-container">

            <div className="header-info">
                <div className="header-text">
                    <div className="header-text_title">
                        <p className="header-title_gradient">
                            Neural
                        </p>

                        <p className="header-title">
                            finance AI.
                        </p>
                    </div>

                    <div className="header-text_description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non tellus orci ac auctor augue.
                        </p>
                    </div>

                </div>

                <div className="btn">
                    <a href="#play_demo">
                        <span className="triangle">
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.4629 8.31237L0.0222387 16.2365L0.0222387 0.388224L15.4629 8.31237Z" fill="white"/>
                            </svg>

                        </span>

                        <span className="play-demo">
                            play demo
                        </span>
                    </a>

                </div>
            </div>

            <div className="header-image">
                <img src={ai_2} alt="ai"/>
            </div>


        </div>
    );
}

export default Header;