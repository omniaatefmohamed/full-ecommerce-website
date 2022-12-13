import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Pagination from '../../Components/Layout/Pagination/Pagination'
import category1 from './../../assets/images/slider3.png'
import category2 from './../../assets/images/category2.png'
import category3 from './../../assets/images/category3.png'
import category4 from './../../assets/images/category4.jpg'
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import axios from 'axios'
import './AllCategory.css'
const AllCategory = () => {
    const get = async () => {
        const res = await axios.get("http://127.0.0.1:8000/api/v1/categories")
        console.log(res.data)
    }
    useEffect(() => {
        get();
    }, [])
    return (
        <Container className='my-5'>
            <h1 className='font-24 mb-5'>AllCategory</h1>
            <Row>
                <CategoryCard CategoryTitle="Bags" imgSrc={category1} />
                <CategoryCard CategoryTitle="LapTops" imgSrc={category2} />
                <CategoryCard CategoryTitle="Mobiles" imgSrc={category3} />
                <CategoryCard CategoryTitle="Furniture" imgSrc={category4} />
                <CategoryCard CategoryTitle="Bags" imgSrc={category1} />
                <CategoryCard CategoryTitle="LapTops" imgSrc={category2} />
                <CategoryCard CategoryTitle="Mobiles" imgSrc={category3} />
                <CategoryCard CategoryTitle="Furniture" imgSrc={category4} />
                <CategoryCard CategoryTitle="Bags" imgSrc={category1} />
                <CategoryCard CategoryTitle="LapTops" imgSrc={category2} />
                <CategoryCard CategoryTitle="Mobiles" imgSrc={category3} />
                <CategoryCard CategoryTitle="Furniture" imgSrc={category4} />
                <CategoryCard CategoryTitle="Bags" imgSrc={category1} />
                <CategoryCard CategoryTitle="LapTops" imgSrc={category2} />
                <CategoryCard CategoryTitle="Mobiles" imgSrc={category3} />
                <CategoryCard CategoryTitle="Furniture" imgSrc={category4} />
            </Row>

            <Pagination />
        </Container>
    )
}

export default AllCategory
