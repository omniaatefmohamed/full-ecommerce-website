import React from 'react'
import BrandCard from '../BrandCard/BrandCard'
import './BrandContainer.css'
import brand1 from '../../../assets/images/brand1.png'
import brand2 from '../../../assets/images/brand2.png'
import brand3 from '../../../assets/images/brand3.png'
import { Container, Row } from 'react-bootstrap'
import CategoryName from '../../Layout/CategoryName/CategoryName'
const BrandContainer = () => {
    return (
        <Container>
            <CategoryName categoryName="Your Favorite Brand" linkName="See More" PathCategory="/allbrands" />
            <Row>
                <BrandCard brandImg={brand1} />
                <BrandCard brandImg={brand2} />
                <BrandCard brandImg={brand3} />
                <BrandCard brandImg={brand1} />
                <BrandCard brandImg={brand2} />
                <BrandCard brandImg={brand3} />
            </Row>
        </Container>
    )
}

export default BrandContainer
