import axios from 'axios'
import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Pagination from '../../Components/Layout/Pagination/Pagination'
import CategoryCard from '../../Components/Category/CategoryCard/CategoryCard'
import BaseURL from '../../API/BaseUrl'
import './AllCategory.css'

const AllCategory = () => {
    // const category = async () => {
    //     const res = await BaseURL.get("/api/v1/categories")
    //     console.log(res.data.data)
    // }
    // useEffect(() => {
    //     category()
    // })
    return (
        <Container className='my-5'>
            <h1 className='font-24 mb-5'>AllCategory</h1>
            <Row>
                <CategoryCard />
                {/* {loading === false ? (
                    data.data ? (data.data.map((item, index) => {
                        return (<CategoryCard key={index} CategoryTitle={item.name} background={backgrounds[Math.floor(Math.random() * 5) + 1]} />)
                    })) : (<h3>no data</h3>)
                ) : <Spinner animation="border" variant="info" />} */}
            </Row>
            <Pagination />
        </Container>
    )
}

export default AllCategory
