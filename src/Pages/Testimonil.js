import React from 'react'
import {Carousel} from 'react-bootstrap'
import './Testimonil.css'

const Testimonil = () => {
    return (
        <>
            <section id="testimonil" className="testimonil-section">
                <div className="container">
                    <Carousel > 
                            {/* <Carousel.Item>
                                <div className="swiper-slide">
                                    <div className="row event-item">
                                                <div>
                                                    <img src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="testimonial-img" alt=""/>
                                                </div>
                                                 <div class="swiper-slide">
                                                    <div class="testimonial-item">
                                                        
                                                        <h3>Saul Goodman</h3>
                                                        <h4>Ceo &amp; Founder</h4>
                                                        <div class="stars">
                                                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                                        </div>
                                                        <p>
                                                            <i class="bx bxs-quote-alt-left quote-icon-left"></i> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                                                            risus at semper.
                                                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                                        </p>
                                                <Carousel.Caption>
                                               
                                            </Carousel.Caption>
                                             </div>
                                        </div>
                                    </div>    
                            </Carousel.Item> */}
                        </Carousel>
                    </div>
            </section> 
        </>
    )
}

export default Testimonil
