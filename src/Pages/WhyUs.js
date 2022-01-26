import React from 'react'
import './WhyUs.css'

const WhyUs = () => {
    return (
        <>
            {/* ***********************
                    WHY US 
            ************************** */}
            <section id="whyUs" className="why-us">
                <div className="container">

                    <div className="section-title">
                        <h3>Why Choose <span>Our resturent</span></h3>
                        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-4">
                            <div className="box">
                                <span>01</span>
                                <h4>lorem ipsum</h4>
                                <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="box">
                                <span>02</span>
                                <h4>lorem ipsum</h4>
                                <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="box">
                                <span>03</span>
                                <h4>lorem ipsum</h4>
                                <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default WhyUs
