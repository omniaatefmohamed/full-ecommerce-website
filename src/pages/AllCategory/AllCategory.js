import axios from 'axios'
import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Pagination from '../../Components/Layout/Pagination/Pagination'
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import './AllCategory.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../redux/Actions/CategoryAction'
import Spinner from 'react-bootstrap/Spinner';

const AllCategory = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory())
    })

    const data = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading)
    const backgrounds = ["red","yellow","green"]
 
    return (
        <Container className='my-5'>
            <h1 className='font-24 mb-5'>AllCategory</h1>
            <Row>
                {loading === false ? (
                    data.data ? (data.data.map((item,index) => {
                        return (<CategoryCard key={index} CategoryTitle={item.name} background={backgrounds[Math.floor(Math.random()*5) + 1]}/>)
                    })) : (<h3>no data</h3>)
                ) : <Spinner animation="border" variant="info" />}
            </Row>
            <Pagination />
        </Container>
    )
}

export default AllCategory
