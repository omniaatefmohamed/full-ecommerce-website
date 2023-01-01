import React from 'react'
import CategoryBar from '../../Components/Category/CategoryBar/CategoryBar'
import SearchCount from '../../Components/Search/searchCount/SearchCount'

const Search = () => {
  return (
    <div className='search'>
      <CategoryBar/>
      <SearchCount searchCount="400 result"/>
    </div>
  )
}

export default Search
