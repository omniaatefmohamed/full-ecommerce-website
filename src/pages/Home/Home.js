import React from 'react'
import Slider from '../../Components/Home/Slider/Slider'
import ProductContainer from '../../Components/Product/ProductCard/ProductCard'
import BrandContainer from '../../Components/Brand/BrandContainer/BrandContainer'
import CategoryContainerHome from '../../Components/Home/CategoryContainerHome/CategoryContainerHome'

const Home = () => {
  return (
    <div>
      <Slider />
      <CategoryContainerHome />
      <ProductContainer categoryName="Most Popular" linkName="See More" PathCategory="/search" />
      <ProductContainer categoryName="Bags" linkName="See More" PathCategory="/search" />
      <ProductContainer categoryName="Laptops" linkName="See More" PathCategory="/search" />
      <ProductContainer categoryName="Mobile" linkName="See More" PathCategory="/search" />
      <BrandContainer />
    </div>
  )
}

export default Home
