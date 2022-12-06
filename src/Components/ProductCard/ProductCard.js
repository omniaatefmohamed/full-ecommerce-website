import React from 'react'
import { Card, Col } from 'react-bootstrap';
import './ProductCard.css'

const ProductCard = ({ ProductDescription, imgsrc, rateValue, ProductPrice }) => {
    return (
        <Col
            sm="6"
            md="4"
            lg="3">
            <Card className="product-card border-0 mb-5">
                <Card.Img variant="top" src={imgsrc} className="d-block mx-auto" />
                <hr className='m-0' />
                <Card.Body>
                    <Card.Text className='mb-2'>
                        {ProductDescription}
                    </Card.Text>
                    <i className="fa-regular fa-heart mb-2"></i>
                    <div className='d-flex justify-content-between'>
                        <p className="mb-2">
                            <i className='fa fa-star'></i>
                            <span className="mx-2">{rateValue}</span>
                        </p>
                        <p className="mb-2">
                            <strong>{ProductPrice}</strong>
                            <span>EGP</span>
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default ProductCard
