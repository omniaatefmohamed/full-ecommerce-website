import React from 'react'
import { Col } from 'react-bootstrap'

const BrandCard = ({ brandImg }) => {
    return (
        <Col lg="2" sm="4">
            <img src={brandImg} alt=""/>
        </Col>
    )
}

export default BrandCard
