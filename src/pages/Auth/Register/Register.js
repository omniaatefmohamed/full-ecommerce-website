import React from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <Container className='Auth-form my-5'>
            <Row className='d-flex align-items-center justify-content-center flex-column'>
                <Col lg="7" md="8" sm="12">
                    <Form className='my-5 shadow p-5'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button type="submit" className='border-0 d-block mx-auto justify-content-center w-lg-25 w-75'>
                            Sign Up
                        </Button>
                        <Form.Group className="my-2 text-center ">
                            <Form.Label><Link to="/login" className='text-decoration-none font-14 orange-color'> I have an Account | Login </Link></Form.Label>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container >
    )
}

export default Register
