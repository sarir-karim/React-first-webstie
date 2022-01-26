import React from 'react';
import './BookTable.css'
import {Form,Col,Row,Button,Float,FloatingLabel} from 'react-bootstrap'


const BookTable = () =>{
    return(
        <>
        <section id="bookTable" className="bookTable-container">
            <div className="container">

                <div className="section-title">
                    <h2>Book a <span>Table</span></h2>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div> 

                <Form className="form-main">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail" >
                        <Form.Control className="form-control" type="text" placeholder="Your Name"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control className="form-control" type="email" placeholder="Your Email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control className="form-control" type="phone" placeholder="Your Phone" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3" controlId="formGridAddress1">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control className="form-control" type="date" placeholder="Date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control className="form-control" type="time" placeholder="Time" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control className="form-control" type="Number" placeholder="# of people" />
                        </Form.Group>
                    </Row>

                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control className="form-control"
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '150px' }}
                        />
                    </FloatingLabel>
                    <div className="text-center mt-4">
                    <Button variant="primary" type="submit" className="form-button">
                        Send Message
                    </Button>
                    </div>
                </Form>
            </div>            
        </section>        
        </>
    )
}

export default BookTable