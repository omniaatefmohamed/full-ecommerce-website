import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from '../CategoryCard/CategoryCard'
import CategoryName from '../../Layout/CategoryName/CategoryName'
import './CategoryContainer.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../../redux/Actions/CategoryAction'
import Spinner from 'react-bootstrap/Spinner';

const CategoryContainer = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory());
    }, [])

    const data = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading)
    const backgrounds = ["red","yellow","orange"]

    return (
        <Container className='my-5'>
            <CategoryName categoryName="All Category" linkName="See More" PathCategory="/allCategory" />
            <Row className='d-flex align-items-center justify-content-center'>
                {
                    loading === false ? (
                        data.data ? (
                            data.data.slice(0,6).map((item,index) => {
                                return (<CategoryCard key={index} CategoryTitle={item.name} background={backgrounds[index]}/>
                                )
                            })) : (<h2>nodata</h2>)
                    ) : (<Spinner animation="border" variant="info" />
                    )
                }
            </Row>
        </Container>
    )
}

export default CategoryContainer
