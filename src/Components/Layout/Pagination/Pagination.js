import React from 'react'
import './Pagination.css'
import ReactPaginate from 'react-paginate';
const Pagination = () => {
    return (
        <ReactPaginate
            className='d-flex justify-content-center pagination Page navigation'
            breakLabel="..."
            nextLabel=">>"
            pageClassName="page-item"
            activeClassName="activePage"
            initialPage={1}
            pageRangeDisplayed={2}
            pageCount={100}
            marginPagesDisplayed	={0}
            previousClassName="previousPage"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            pageLinkClassName="page-link"
            nextClassName="nextPage"
            previousLabel="<<"
            renderOnZeroPageCount={null}
        />
    )
}

export default Pagination
