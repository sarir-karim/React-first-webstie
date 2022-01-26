import React from 'react';
import './Event.css'
import {Carousel} from 'react-bootstrap';
import { BsCheckCircle } from "react-icons/bs";

const Event = () =>{
    return(
        <section id="events" className="event-container">
            <div className="container">

                <div className="section-title">
                    <h2>Organize Your <span> Events</span> In Our Resturent</h2>
                </div>

                <div className="events-slider swiper">
                    <div className="swiper-wrapper">
                    <Carousel > 
                            <Carousel.Item>
                                <div className="swiper-slide">
                                    <div className="row event-item">
                                                <div class="col-lg-6 mr-au">
                                                    <img src="https://images.pexels.com/photos/6004758/pexels-photo-6004758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="img-fluid w=100" alt=""/>
                                                </div>
                                                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                                                        <h3>Birthday Parties</h3>
                                                        <div class="price">
                                                            <p><span>$140</span></p>
                                                        </div>
                                                        <p class="fst-italic">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        </p>
                                                        <ul>
                                                            <li><i class="bi bi-check-circle"><BsCheckCircle/></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                            <li><i class="bi bi-check-circle"><BsCheckCircle/></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                                            <li><i class="bi bi-check-circle"><BsCheckCircle/></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                        </ul>
                                                        <p>
                                                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                                                        </p>
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </div>
                                            </div>
                                        </div>    
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="swiper-slide">
                                    <div className="row event-item">
                                                <div class="col-lg-6 mr-au">
                                                    <img src="https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid w=100" alt=""/>
                                                </div>
                                                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                                                        <h3>Weeging aniversery</h3>
                                                        <div class="price">
                                                            <p><span>$110</span></p>
                                                        </div>
                                                        <p class="fst-italic">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        </p>
                                                        <ul>
                                                            <li><i class="bi bi-check-circle"><BsCheckCircle/></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                            <li><i class="bi bi-check-circle"><BsCheckCircle/></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                                            <li><i class="bi bi-check-circle"><BsCheckCircle/></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                        </ul>
                                                        <p>
                                                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                                                        </p>
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </div>
                                            </div>
                                        </div>    
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="swiper-slide">
                                    <div className="row event-item">
                                                <div class="col-lg-6 mr-au">
                                                    <img src="https://images.pexels.com/photos/3937468/pexels-photo-3937468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="img-fluid w=100" alt=""/>
                                                </div>
                                                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                                                        <h3>Parties</h3>
                                                        <div class="price">
                                                            <p><span>$150</span></p>
                                                        </div>
                                                        <p class="fst-italic">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        </p>
                                                        <ul>
                                                            <li><i class="bi bi-check-circle"><BsCheckCircle/></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                            <li><i class="bi bi-check-circle"><BsCheckCircle/></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                                            <li><i class="bi bi-check-circle"><BsCheckCircle/></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                        </ul>
                                                        <p>
                                                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                                                        </p>
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </div>
                                            </div>
                                        </div>    
                            </Carousel.Item>
                         </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Event