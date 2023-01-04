import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from '../CategoryCard/CategoryCard'
import CategoryName from '../../Layout/CategoryName/CategoryName'
import './CategoryContainer.css'
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios'

const CategoryContainer = () => {


    return (
        <Container className='my-5'>
            <CategoryName categoryName="All Category" linkName="See More" PathCategory="/allCategory" />
            <Row className='d-flex align-items-center justify-content-center'>
                <CategoryCard />
                {/* {
                    loading === false ? (
                        data.data ? (
                            data.data.slice(0, 6).map((item, index) => {
                                return (<CategoryCard key={index} CategoryTitle={item.name} background={backgrounds[index]} />
                                )
                            })) : (<h2>nodata</h2>)
                    ) : (<Spinner animation="border" variant="info" />
                    )
                } */}
            </Row>
        </Container>
    )
}

export default CategoryContainer
