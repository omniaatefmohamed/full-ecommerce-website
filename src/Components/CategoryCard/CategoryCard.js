import React from 'react'
import './CategoryCard.css'
import { Col } from 'react-bootstrap'

const CategoryCard = ({ CategoryTitle, imgSrc }) => {
    return (
        <Col sm="6" md="4" lg="3">
            <div className='category-Card d-flex flex-column align-items-center mb-5'>
                <img src={imgSrc} alt="" className='w-100' />
                <h3 className='font-16 dark-blue-color mb-0 p-3'>{CategoryTitle}</h3>
            </div>
        </Col>
    )
}

export default CategoryCard
