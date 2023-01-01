import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './CategoryBar.css'
import { Link } from 'react-router-dom'

const CategoryBar = () => {
    return (
        <Container className='category-bar'>
            <Row>
                <Col className='d-flex justify-content-between'>
                    <Link className='font-14 dark-blue-color'>All</Link>
                    <Link className='font-14 dark-blue-color'>Electronics</Link>
                    <Link className='font-14 dark-blue-color'>Clothes</Link>
                    <Link className='font-14 dark-blue-color'>Mobiles</Link>
                    <Link className='font-14 dark-blue-color'>Computer</Link>
                    <Link className='font-14 dark-blue-color'>Laptop</Link>
                    <Link className='font-14 dark-blue-color'>Offers</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default CategoryBar
