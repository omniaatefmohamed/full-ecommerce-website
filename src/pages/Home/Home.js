import React from 'react'
import Slider from '../../Components/Slider/Slider'
import CategoryContainer from '../../Components/CategoryContainer/CategoryContainer'
import ProductContainer from '../../Components/ProductContainer/ProductContainer'
import BrandContainer from '../../Components/BrandContainer/BrandContainer'

const Home = () => {
  return (
    <div>
      <Slider />
      <CategoryContainer />
      <ProductContainer categoryName="Most Popular" linkName="See More" />
      <ProductContainer categoryName="Bags" linkName="See More" />
      <ProductContainer categoryName="Laptops" linkName="See More" />
      <ProductContainer categoryName="Mobile" linkName="See More" />
      <BrandContainer/>
    </div>
  )
}

export default Home
