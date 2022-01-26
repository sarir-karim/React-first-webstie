import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsFacebook,BsInstagram,BsYoutube,BsTwitter } from "react-icons/bs";
import './Chefs.css'

const Chefs = () => {
    return (
        <>
            <section id="chefs" className="chefs-container">
                <div className="container ">
                    <div className="section-title">
                        <h2>Our Professional <span>Chefs</span></h2>
                        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                    </div>
                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="member ">
                                <div className="pic"><img src="https://images.pexels.com/photos/3351927/pexels-photo-3351927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid"/></div>
                                <div className="member-info">
                                    <h4>Walter White</h4>
                                    <span>Master Chef</span>
                                    <div className="social">
                                        <NavLink to="facebook.com"><i><BsFacebook className="icon"/></i></NavLink>
                                        <NavLink to="instagram.com"><i><BsInstagram className="icon"/></i></NavLink>
                                        <NavLink to="twitter.com"><i><BsTwitter className="icon"/></i></NavLink>
                                        <NavLink to="youtube.com"><i><BsYoutube className="icon"/></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2nd chef */}

                        <div className="col-lg-4 col-md-6">
                            <div className="member">
                                <div className="pic"><img src="https://images.pexels.com/photos/4254255/pexels-photo-4254255.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid"/></div>
                                <div className="member-info">
                                    <h4>Walter White</h4>
                                    <span>Master Chef</span>
                                    <div className="social">
                                    <NavLink to="facebook.com"><i><BsFacebook className="icon"/></i></NavLink>
                                        <NavLink to="instagram.com"><i><BsInstagram className="icon"/></i></NavLink>
                                        <NavLink to="twitter.com"><i><BsTwitter className="icon"/></i></NavLink>
                                        <NavLink to="youtube.com"><i><BsYoutube className="icon"/></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3rd chef */}

                        <div className="col-lg-4 col-md-6">
                            <div className="member">
                                <div className="pic"><img src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid"/></div>
                                <div className="member-info">
                                    <h4>Walter White</h4>
                                    <span>Master Chef</span>
                                    <div className="social">
                                        <NavLink to="facebook.com"><i><BsFacebook className="icon"/></i></NavLink>
                                        <NavLink to="instagram.com"><i><BsInstagram className="icon"/></i></NavLink>
                                        <NavLink to="twitter.com"><i><BsTwitter className="icon"/></i></NavLink>
                                        <NavLink to="youtube.com"><i><BsYoutube className="icon"/></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
        </>
    )
}

export default Chefs
