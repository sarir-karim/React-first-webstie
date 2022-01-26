import React from 'react';
import { NavLink } from 'react-router-dom';
import './Gallery.css'

const Gallery  = () =>{
    return(
            <div>
                <section id="gallery" class="gallery ">
                    <div class="container-fluid">

                        <div class="section-title">
                            <h2>Some photos from <span>Our Restaurant</span></h2>
                            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                        </div>

                        <div className="row">
                                <div className="col-lg-3 col-md-4">
                                    <div className="gallery-item">
                                        <NavLink to="" className="gallery-lightbox w-100">
                                            <img src="https://images.pexels.com/photos/1064136/pexels-photo-1064136.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="image-fluid w-100"/>
                                        </NavLink>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4">
                                    <div class="gallery-item">
                                        <NavLink to="" class="gallery-lightbox">
                                            <img src="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="image-fluid w-100"/>
                                        </NavLink>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4">
                                    <div class="gallery-item">
                                        <NavLink to="" class="gallery-lightbox">
                                            <img src="https://images.pexels.com/photos/4450334/pexels-photo-4450334.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="image-fluid w-100"/>
                                        </NavLink>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4">
                                    <div class="gallery-item">
                                        <NavLink to="" class="gallery-lightbox">
                                            <img src="https://images.pexels.com/photos/4255412/pexels-photo-4255412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="image-fluid"/>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                            {/* 2nd row */}

                            <div className="row">
                                <div class="col-lg-3 col-md-4">
                                    <div class="gallery-item">
                                        <NavLink to="" class="gallery-lightbox">
                                            <img src="https://images.pexels.com/photos/6126306/pexels-photo-6126306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="image-fluid"/>
                                        </NavLink>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4">
                                    <div class="gallery-item">
                                        <NavLink to="" class="gallery-lightbox">
                                            <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="image-fluid"/>
                                        </NavLink>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4">
                                    <div class="gallery-item">
                                        <NavLink to="" class="gallery-lightbox">
                                            <img src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="image-fluid"/>
                                        </NavLink>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4">
                                    <div class="gallery-item">
                                        <NavLink to="" class="gallery-lightbox">
                                            <img src="https://images.pexels.com/photos/5865147/pexels-photo-5865147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="image-fluid"/>
                                        </NavLink>
                                    </div>
                                </div>
                           </div>
                    </div>
            </section>
        </div>
    )
}

export default Gallery