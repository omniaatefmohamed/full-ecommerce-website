import React from 'react'
import { Link } from 'react-router-dom'

const CategoryName = ({ categoryName, linkName, PathCategory }) => {
    return (
        <div className='d-flex justify-content-between mb-3'>
            <h2 className='fw-bold font-24 dark-blue-color'>{categoryName}</h2>
            {linkName ? (
                <Link className='btn fw-bold font-14 dark-blue-color' to={PathCategory}>
                    {linkName}
                </Link>

            ) : null}
        </div>
    )
}

export default CategoryName
