import React from 'react'
import CategoryBar from '../../Components/CategoryBar/CategoryBar'
import SearchCount from '../../Components/searchCount/SearchCount'

const Search = () => {
  return (
    <div className='search'>
      <CategoryBar/>
      <SearchCount searchCount="400 result"/>
    </div>
  )
}

export default Search
