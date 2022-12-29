import React from 'react';
import "./services.css"
import iphone_12 from "../../assets/iphone_12.svg"
import pc from "../../assets/iconoir_pc-check.svg"
import user from "../../assets/user.svg"
import iphone_13 from "../../assets/iPhone_13.svg"
function Services(props) {
    return (
        <div className="services-container">
            <div className="services-container_images">
                <img src={iphone_12} alt=""/>
            </div>
            <div className="services-container_info">
                <div className="services-info_title">
                    <p>
                        <span >Explore </span>
                        <span className="normal_title">from computer,control from phone</span>
                    </p>

                </div>


                <div className="services-info_discretion">

                    <div className="services-info_container">
                        <div className="services-info_icon_container">

                            <div className="services-info_icon_shadow">

                            </div>

                            <div className="services-info_icon">
                                <div className="services-info_icon_phone">
                                    <span className="dot"></span>
                                </div>
                            </div>


                        </div>


                        <div className="services-info_discretion_container">
                            <p>Mobile version</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididutellus orci ac auctor augue.
                            </p>
                        </div>
                    </div>




                    <div className="services-info_container">
                        <div className="services-info_icon_container">

                            <div className="services-info_icon_shadow">

                            </div>

                            <div className="services-info_icon">
                                <img src={pc} alt=""/>
                            </div>


                        </div>


                        <div className="services-info_discretion_container">
                            <p>Desktop version</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididutellus orci ac auctor augue.
                            </p>
                        </div>
                    </div>





                    <div className="services-info_container">
                        <div className="services-info_icon_container">

                            <div className="services-info_icon_shadow">

                            </div>

                            <div className="services-info_icon">
                                <img src={user} alt=""/>
                            </div>


                        </div>


                        <div className="services-info_discretion_container">
                            <p>User friendly design</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididutellus orci ac auctor augue.
                            </p>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
}

export default Services;