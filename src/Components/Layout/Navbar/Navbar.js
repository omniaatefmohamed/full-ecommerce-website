import React from 'react'
import './Navbar.css'
import white_logo from '../../../assets/images/white-logo.png'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
const NavBar = () => {
    let SearchState = false;
    const showSearch = () => {
        SearchState = !SearchState;
    }
    return (
        <Navbar expand="lg">
            <Container className="position-relative">
                <Navbar.Brand >
                    <a href="/">
                        <img src={white_logo} className="logo" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className='bg-white' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/" className='text-white'>Home</Nav.Link>
                        <Nav.Link href="#action2" className='text-white'>Mobiles</Nav.Link>
                        <Nav.Link href="#action2" className='text-white'>Laptop</Nav.Link>
                        <Nav.Link href="#action2" className='text-white'>Bags</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className='d-flex flex-row-reverse reverse flex-lg-row align-items-center'>
                    <Form className="d-flex  mx-1">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <i className="fa-solid fa-magnifying-glass text-white  mx-1" onClick={showSearch}></i>
                    </Form>
                    <div className='profile-name d-flex'>
                        <Nav.Link href="/login" className='text-white font-12 mx-1'> <i className="fa-solid fa-user font-16 mx-1"></i> <span> Login In </span> </Nav.Link>
                        <Nav.Link href="#action1" className='text-white font-12 mx-1'> <i class="fa-solid fa-cart-shopping font-16 mx-1"></i> <span> Cart </span> </Nav.Link>
                    </div>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavBar
