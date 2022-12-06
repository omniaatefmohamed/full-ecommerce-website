import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryName from '../Layout/CategoryName/CategoryName'
import ProductCard from '../ProductCard/ProductCard'
import product1 from './../../assets/images/prod1.png'
import product2 from './../../assets/images/prod3.png'
import product3 from './../../assets/images/slider3.png'

const ProductContainer = ({ categoryName, linkName }) => {
    return (
        <Container className='my-5'>
            <CategoryName categoryName={categoryName} linkName={linkName} />
            <Row>
                <ProductCard ProductDescription="Product1 details details" imgsrc={product1} rateValue="5" ProductPrice="880"/>
                <ProductCard ProductDescription="Product2 details details" imgsrc={product2} rateValue="2" ProductPrice="900"/>
                <ProductCard ProductDescription="Product3 details details" imgsrc={product3} rateValue="5" ProductPrice="1120"/>
                <ProductCard ProductDescription="Product4 details details" imgsrc={product2} rateValue="3" ProductPrice="654"/>
            </Row>
        </Container>
    )
}

export default ProductContainer
