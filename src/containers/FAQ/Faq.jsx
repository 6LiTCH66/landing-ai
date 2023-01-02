import React, {useState} from 'react';
import "./faq.css"
import arrow_down from "../../assets/arrow_down.svg"
import arrow_up from "../../assets/arrow_up.svg"
import faq_dots from "../../assets/faq_dots.svg"

const ToggleItem = ({ description, id }) => {
    const [toggleMenu, setToggleMenu] = useState(true)
    return (
        <div className="faq-dropdown">

            <label htmlFor={"touch" + id} onClick={() => toggleMenu ? setToggleMenu(false): setToggleMenu(true)}>

                        <span className="faq-title">
                            <span>{description}</span>

                            <img src={toggleMenu ? arrow_down: arrow_up} alt="arrow"/>
                        </span>
            </label>

            <input type="checkbox" id={"touch" + id}/>

            <ul className="slide">
                <li>
                    <span className="faq-description">You can register on the site or pass verification through your Facebook account.</span>
                </li>
            </ul>
        </div>
    )
}

function Faq(props) {
    const titles = [
        "How can I register on your platform ?",
        "Where can I download the application?",
        "In which countries are you available?",
        "How can I recover my account?"
    ]

    return (
        <div className="faq-box">

            <div className="faq-shadow2">

            </div>
            <div className="faq-container">
                <div className="faq-info_container">
                    <div className="faq-shadow">

                    </div>
                    <div className="faq_info-title">
                        <p>
                            <span>
                                Frequently
                            </span>
                            <div className="faq_title-down-text">
                                <span>
                                    Asked
                                </span>
                                <span className="faq-gradient"> Question</span>
                            </div>

                        </p>
                    </div>
                    <div className="faq_info-description">
                        <p>
                            <span>
                                We Know you have some questions in mind, we've tried to list the most important ones.
                            </span>
                        </p>
                    </div>

                    <div className="faq_info_rectangle">
                        <img src={faq_dots} alt="dots"/>
                    </div>

                </div>
                <div className="faq-dropdown_container">
                    {titles.map((d, id) => {
                        return <ToggleItem id={id} description={d}/>
                    })}
                </div>
            </div>



        </div>
    );
}

export default Faq;