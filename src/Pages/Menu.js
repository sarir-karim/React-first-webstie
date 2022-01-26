import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css';

const Menu = () => {
    return (
        <>
            <section id="menu" className="menu-container">
                
                <div className="container">

                    <div className="section-title">
                        <h2>Check our tasty <span>Menu</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="menu-flters">
                                <li data-filters="*" className="filter-acive">Show All</li>
                                <li data-filters=".filter-starters">Starters</li>
                                <li data-filters=".filter-salads">Salads</li>
                                <li data-filters=".filter-specialty ">Specialty</li>
                            </ul>
                        </div>
                    </div>
                        <div className="row menu-container">
                            <div className="col-lg-6 menu-items filter-starters">
                                <div className="menu-content">
                                    <NavLink to="">Lobstre Bisgil</NavLink><span>$5.93</span>
                                </div>
                                <div className="menu-ingredients">
                                    lorem ipsum sepa dodo loda
                                </div>
                            </div>
                            <div className="col-lg-6 menu-item filter-specialty">
                                <div className="menu-content">
                                    <NavLink to="">Bread barrel</NavLink><span>$6.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    lorem deran totoraol falirea merdia
                                </div>
                            </div>

                            <div className="col-lg-6 menu-item filter-starters">
                                <div className="menu-content">
                                    <NavLink to="">Carab LInks</NavLink><span>$7.43</span>
                                </div>
                                <div className="menu-ingredients">
                                    A delite crab  cake served on a toasted roll with lettuce and tarate sauce 
                                </div>
                            </div>
                            <div className="col-lg-6 menu-item filter-salads">
                                <div className="menu-content">
                                    <NavLink to="">Caesar Selectons</NavLink><span>$8.56</span>
                                </div>
                                <div className="menu-ingredients">
                                    Lorem, deren tratore, fliea. newraa
                                </div>
                            </div>

                            <div class="col-lg-6 menu-item filter-specialty">
                            <div class="menu-content">
                                <NavLink to="#">Tuscan Grilled</NavLink><span>$9.95</span>
                            </div>
                            <div class="menu-ingredients">
                                Grilled chicken with provolone, artichoke hearts, and roasted red pesto
                            </div>
                        </div>

                        <div class="col-lg-6 menu-item filter-starters">
                            <div class="menu-content">
                                <NavLink to="#">Mozzarella Stick</NavLink><span>$4.95</span>
                            </div>
                            <div class="menu-ingredients">
                                Lorem, deren, trataro, filede, nerada
                            </div>
                        </div>

                        <div class="col-lg-6 menu-item filter-salads">
                            <div class="menu-content">
                                <NavLink to="#">Greek Salad</NavLink><span>$9.95</span>
                            </div>
                            <div class="menu-ingredients">
                                Fresh spinach, crisp romaine, tomatoes, and Greek olives
                            </div>
                        </div>

                        <div class="col-lg-6 menu-item filter-salads">
                            <div class="menu-content">
                                <NavLink to="#">Spinach Salad</NavLink><span>$9.95</span>
                            </div>
                            <div class="menu-ingredients">
                                Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
                            </div>
                        </div>

                        <div class="col-lg-6 menu-item filter-specialty">
                            <div class="menu-content">
                                <NavLink to="#">Lobster Roll</NavLink><span>$12.95</span>
                            </div>
                            <div class="menu-ingredients">
                                Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu
