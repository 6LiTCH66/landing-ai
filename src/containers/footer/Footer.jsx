import React from 'react';
import "./footer.css"
import discord from "../../assets/discord_icon.svg"
import github from "../../assets/github.svg"
import instagram from "../../assets/instagram_icon.svg"
import linkedin from "../../assets/linkedin.svg"
import medium from "../../assets/Medium - Negative.svg"
import reddit from "../../assets/reddit_icon.svg"
import telegram from "../../assets/telegram_icon.svg"
import twitter from "../../assets/twitter_icon.svg"
function Footer(props) {
    return (
        <div className="footer-container">
            <div className="footer-copyright">
                <p>
                    <span>
                        Copyright © | terms & conditions
                    </span>
                </p>
            </div>
            <div className="footer-icons_container">
                <img src={telegram} alt="telegram"/>
                <img src={twitter} alt="twitter"/>
                <img src={discord} alt="discord"/>
                <img src={instagram} alt="instagram"/>
                <img src={medium} alt="medium"/>
                <img src={linkedin} alt="linkedin"/>
                <img src={github} alt="github"/>
                <img src={reddit} alt="reddit"/>
            </div>
        </div>
    );
}

export default Footer;