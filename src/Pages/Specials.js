import React from 'react'
import './Specials.css'
import { NavLink } from 'react-router-dom'

const Specials = () => {

    return (
     
        <div>
            <section id="specials" className="specials-container">
                <div className="container">

                    <div className="section-title">
                        <h2>Check Our <span> Specials</span></h2>
                        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3">
                            <ul className="nav nav-tabs flex-column">
                                <li className="nav-item">
                                    <NavLink className="nav-link active show" data-bs-toggle="tab" to="/tab-1" >modi ki data</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " data-bs-toggle="tab" href="#tab-2"> urnae modi ki data</a>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" data-bs-toggle="tab" to="/tab-3"> kparuean modi ki data</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" data-bs-toggle="tab" to="/tab-4"> ajeira modi ki data</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" data-bs-toggle="tab" to="/tab-5"> arna modi ki data</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-9 mt-4 mt-lg-0">
                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1">
                                    <div className="row">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Architecho ut ladfja jsdiei id</h3>
                                            <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                        <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem
                                            quaerat quos qui similique accusamus nostrum rem vero</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="https://media.istockphoto.com/photos/fried-pork-and-vegetables-on-white-background-picture-id1190330112?k=20&m=1190330112&s=612x612&w=0&h=_TrmthJupdqYmMU-NC-es85TEvaBJsynDS383hqiAvM=" alt="Special" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>   
                                <div className="tab-pane" id="tab-2">
                                    <div className="row">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Architecho ut ladfja jsdiei id</h3>
                                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                            <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem
                                                quaerat quos qui similique accusamus nostrum rem vero</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Special" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-3">
                                    <div className="row">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Architecho ut ladfja jsdiei id</h3>
                                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                            <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem
                                                quaerat quos qui similique accusamus nostrum rem vero</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWH9xu2QQ9z9BaOQplNFpp73GRN1YlPzkHg&usqp=CAU" alt="Special" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-4" >
                                    <div className="row">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Architecho ut ladfja jsdiei id</h3>
                                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                            <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem
                                                quaerat quos qui similique accusamus nostrum rem vero</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="" alt="Special" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-5">
                                    <div className="row">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Architecho ut ladfja jsdiei id</h3>
                                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                            <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem
                                                quaerat quos qui similique accusamus nostrum rem vero</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="" alt="Special" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-6">
                                    <div className="row">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Architecho ut ladfja jsdiei id</h3>
                                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                            <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem
                                                quaerat quos qui similique accusamus nostrum rem vero</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="" alt="Special" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Specials
