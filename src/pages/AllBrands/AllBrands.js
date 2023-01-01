import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BrandCard from '../../Components/Brand/BrandCard/BrandCard'
import brand1 from '../../assets/images/brand1.png'
import brand2 from '../../assets/images/brand2.png'
import brand3 from '../../assets/images/brand3.png'
const AllBrands = () => {
    return (
        <Container className='my-5'>
            <Row>
                <BrandCard brandImg={brand1} />
                <BrandCard brandImg={brand2} />
                <BrandCard brandImg={brand3} />
                <BrandCard brandImg={brand1} />
                <BrandCard brandImg={brand2} />
                <BrandCard brandImg={brand3} />
                <BrandCard brandImg={brand1} />
                <BrandCard brandImg={brand2} />
                <BrandCard brandImg={brand3} />
                <BrandCard brandImg={brand1} />
                <BrandCard brandImg={brand2} />
                <BrandCard brandImg={brand3} />
                <BrandCard brandImg={brand1} />
                <BrandCard brandImg={brand2} />
                <BrandCard brandImg={brand3} />
                <BrandCard brandImg={brand1} />
                <BrandCard brandImg={brand2} />
                <BrandCard brandImg={brand3} />
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

export default AllBrands
