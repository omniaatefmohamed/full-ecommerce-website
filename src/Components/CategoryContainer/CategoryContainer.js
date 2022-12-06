import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from '../CategoryCard/CategoryCard'
import CategoryName from '../Layout/CategoryName/CategoryName'
import category1 from './../../assets/images/slider3.png'
import category2 from './../../assets/images/category2.png'
import category3 from './../../assets/images/category3.png'
import category4 from './../../assets/images/category4.jpg'
import './CategoryContainer.css'
const CategoryContainer = () => {
    return (
        <Container className='my-5'>
            <CategoryName categoryName="All Category" linkName="See More" PathCategory="/allCategory"/>
            <Row className='d-flex align-items-center justify-content-center'>
                <CategoryCard CategoryTitle="Bags" imgSrc={category1} />
                <CategoryCard CategoryTitle="LapTops" imgSrc={category2} />
                <CategoryCard CategoryTitle="Mobiles" imgSrc={category3} />
                <CategoryCard CategoryTitle="Furniture" imgSrc={category4} />
            </Row>
        </Container>
    )
}

export default CategoryContainer
