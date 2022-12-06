import React from 'react'
import Navbar from '../../Components/Layout/Navbar/Navbar'
import Slider from '../../Components/Home/Slider/Slider'
import CategoryContainer from '../../Components/CategoryContainer/CategoryContainer'
import ProductContainer from '../../Components/ProductContainer/ProductContainer'

const Home = () => {
  return (
    <div>
      <Slider />
      <CategoryContainer />
      <ProductContainer categoryName="Most Popular" linkName="See More" />
      <ProductContainer categoryName="Bags" linkName="See More" />
      <ProductContainer categoryName="Laptops" linkName="See More" />
      <ProductContainer categoryName="Mobile" linkName="See More" />
    </div>
  )
}

export default Home
