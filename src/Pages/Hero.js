import React from 'react'
import './Hero.css'
import { Carousel } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Hero = ()=>{
    return(
        <>
            <section id="hero-section">
                <div className="hero-container">
                            <Carousel className="heroCarousel" >
                                <Carousel.Item className="carousel-item">
                                    <img
                                    className="d-block w-100"
                                    src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="First slide"
                                    />
                                    <div className="carousel-container">
                                        <Carousel.Caption className="carousel-content">
                                            <h2 class="animate__animated animate__fadeInDown"><span>Delicious</span> Restaurant</h2>
                                            <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus
                                                et tempore modi architecto.</p>
                                            <div>
                                                <NavLink to="" class="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</NavLink>
                                                <NavLink to="" class="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</NavLink>
                                            </div>
                                        </Carousel.Caption>
                                    </div>
                                </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Second slide"
                                        />
                                        <div className="carousel-container">
                                            <Carousel.Caption className="carousel-content">
                                                <h2 class="animate__animated animate__fadeInDown"><span>24/7</span> Resturent</h2>
                                                <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad NavLink aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus
                                                    et tempore modi architecto.</p>
                                                <div>
                                                    <NavLink to="" class="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</NavLink>
                                                    <NavLink to="" class="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</NavLink>
                                                </div>
                                            </Carousel.Caption>
                                            </div>
                                    </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption className="carousel-content">
                                        <h2 class="animate__animated animate__fadeInDown"><span>Special</span> Foods</h2>
                                        <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad NavLink aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus
                                            et tempore modi architecto.</p>
                                        <div>
                                            <NavLink to="" class="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</NavLink>
                                            <NavLink to="" class="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</NavLink>
                                        </div>
                                    </Carousel.Caption >
                                </Carousel.Item>
                         </Carousel>
                    </div>
            </section>
            
        </>
    )
}
export default Hero